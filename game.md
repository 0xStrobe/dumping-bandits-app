# Game and API design

## Contracts

A few design principles:

- We manage minimum state variables as possible, to preserve single source of truth
- Winners are deterministically generated from a single random number
- We store past games on the contract, to avoid reliance on off-chain event indexing for historical lookups

## Frontend

```
User {
  IsParticipating: boolean;
  participantId: BigInt;
  address: string;
}

Round {
    id: BigInt;
    randomness: BigInt;
    price: BigInt;
    minDuration: BigInt;
    totalWinners: BigInt;
    noWinnerProbability: BigInt;
    totalPot: uint // totalParticipants * price
    totalParticipants: BigInt;
    roundStartedAt: BigInt;
}

```

### function signatures

get winners of a given round

```
  Winner {
    amount: BigInt;
    address: string;
  }

  getWinners(roundId) : Winners[] {}
```

get history of all rounds:

```
  HistoricalRound {
    id: BigInt;
    price: BigInt;
    totalParticipants: BigInt;
    winners: Winners[];
  }

  getAllHistorical() : HistoricalRound[] {}
```

### Event subscriptions\*\*

start of round:

- RoundStarted(roundId)

participants added:

- ParticipantAdded(roundId, msg.sender, totalParticipants)

### Flow of data

**On page load**

we need to get from contract:

- current round id `roundId: uint`
- total participants: `totalParticipants: uint`
- current Round: `currentRound: Round`
- if the round started, and how long ago: `roundStartedAt: 0 | timestamp`

For user:

- check for `address`

if user is not connected, show connectWallet info

if user is connected, check if user address is listed in currentRound
` roundId(uint) => participant(address) => participantId`

if not, we set `user.isParticipating = false`, and show the "enter round" interface

If they are, we set `user.isParticipating = true` and show the "pending round" interface

**A user calls "participate()"**

If the round isn't already started, we call `_startRound()` which emits the event:

`emit RoundStarted(roundId);`

we should listen for this event to update ze url `/rounds/roundId` to clear the screen and show the new round data.

on the contracts we:

- increment the `totalParticipants:uint` we add the participant to the round
- map the roundId => msg.sender to the totalParticipants count (this becomes their uid)
- map the roundId => totalParticipants(uid) to the user address

Then emit the `participantAdded(roundId, msg.sender, totalParticipants)` event.

we will be listeneing for `participantAdded` so we can:

- increment the new number of participants on the UI
- increment the totalPot
- if the new participant == connectedWallet, we switch the user state to participating.
  - _this makes me think, we need a UI for non-playing users, and we need a separate state for active users_
  - _simple userIsParticipating: boolean; works_

Basically, during the round we just have new participants being added. simple event listeners above can handle that to update state.

**User calls finalizeRound()**

we update ze randomness `uint256 randomness = rc.generateRandomness()`

update round struct for history:
`rounds[roundId].randomness = randomness;`
`rounds[roundId].totalParticipants = totalParticipants;`

we get the winners:

```
  // derive winners from randomness
  uint256[] memory winners = _deriveWinner(randomness);
  if (winners.length == 0) {
      _handleRedistribution();
  } else {
      _handlePrizes(winners);
  }
```

in really rare case that no winners, we redistribute prizes

In normal case, we handle the prizes

```
  function _handlePrizes(uint256[] memory winners) internal {
      uint256 poolSize = address(this).balance - finalizerReward;
      for (uint256 i = 0; i < winners.length; i++) {
          // TODO: add NFT stuff here
          address winner = idParticipants[roundId][winners[i]];
          uint256 prizeAmount = poolSize.mulWadDown(prizes[i]);

          SafeTransferLib.safeTransferETH(winner, prizeAmount);
          emit WonPrize(roundId, winner, i, prizeAmount);
      }
  }
```

handling prizes is basically, loop over every winner and distribute winnings to the winner. the wonPrize event will allow us to check:

- if `winner === user.address`, show that they won `prizeAmount`
- otherwise, they got a wojak

still waiting for the NFT handling portion because that will be different

**maybe we should show a user's canto balance on the UI so that winners can see that they won, like a small animation showing their balance going up**

After rewards are distributed we simply emit RoundFinalized(roundId, randomness);

this roundFinalized should be what we use to tell people its over, and we give notifications to users if they are not a winner.

Then the `roundStart` event will have us change the Ui so people can again enter to the next round.
