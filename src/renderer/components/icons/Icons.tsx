interface IIconsProps {
  className?: string;
}
export const Icons = {
  User: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      className={props?.className}
    >
      <g opacity="0.4">
        <path
          d="M12.9987 10.4193C15.2999 10.4193 17.1654 8.55379 17.1654 6.2526C17.1654 3.95142 15.2999 2.08594 12.9987 2.08594C10.6975 2.08594 8.83203 3.95142 8.83203 6.2526C8.83203 8.55379 10.6975 10.4193 12.9987 10.4193Z"
          fill="#3BAA35"
        />
        <path
          d="M21.3346 18.2266C21.3346 20.8154 21.3346 22.9141 13.0013 22.9141C4.66797 22.9141 4.66797 20.8154 4.66797 18.2266C4.66797 15.6377 8.39893 13.5391 13.0013 13.5391C17.6037 13.5391 21.3346 15.6377 21.3346 18.2266Z"
          fill="#3BAA35"
        />
      </g>
    </svg>
  ),
  ChevronDown: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      className={props?.className}
    >
      <path
        d="M4 6.5L8 10.5L12 6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
