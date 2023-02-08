function CantoCoin({ className }) {
  return (
    <svg
      width={200}
      height={200}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <circle cx={100} cy={100} r={100} fill="#0DF99B" />
      <g clipPath="url(#prefix__clip0_1_823)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M164.94 33.588v132.824H35.06l24.352-.001v-23.439H35.06V57.027h24.352v-23.44H164.94zm-85.235 23.44h60.881v23.44H79.705v-23.44zm60.881 66.413H79.705V80.468l-24.353.001v42.973l24.353-.001v23.439h60.881v-23.439z"
          fill="#02130D"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0_1_823">
          <path
            fill="#fff"
            transform="translate(35.06 33.588)"
            d="M0 0h129.88v132.824H0z"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CantoCoin;
