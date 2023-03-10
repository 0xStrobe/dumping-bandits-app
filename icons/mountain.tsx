import { Icon } from "./types";

function Mountain({ className }: Icon) {
  return (
    <svg
      viewBox="0 0 690 648"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M99.66 246.394L-16.138.825-50.984 647.96h740.451L452.885 494.344l-96.264-22.842-93.432-85.688-78.679-94.499-84.85-44.921z"
        fill="#03140E"
      />
      <path
        d="M194.96 200.98c0 8.978-2.587 12.669-13.062 19.652-3.84 10.475-13.558 13.005-23.376 14.517-9.619 2.941-12.762-7.01-20.793-10.153-4.538-7.507-8.205-12.22-11.172-22.171 2.793-8.904 0-20.252 9.776-22.521 6.41-7.058 13.3-14.365 23.586-14.365 19.352 0 33.327 20.301 35.041 35.041z"
        fill="#03140E"
      />
      <circle cx={114.46} cy={216.417} r={10.418} fill="#03140E" />
      <path
        d="M122.642 219.938l22.576 22.576M142.271 237.401l-21.756 23.368M141.173 237.287l2.09 31.859"
        stroke="#03140E"
        strokeWidth={9}
      />
    </svg>
  );
}

export default Mountain;
