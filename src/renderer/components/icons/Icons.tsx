import { cn } from '../../lib/utils';

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
  Spinner: (props: IIconsProps): JSX.Element => (
    <svg
      className={cn('animate-spin h-5 w-5 text-white', props?.className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className={`opacity-25`}
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className={`opacity-75`}
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ),
  GridView: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props?.className}
    >
      <path
        d="M11.666 16.8974V12.2641C11.666 11.9327 11.9346 11.6641 12.266 11.6641H16.8993C17.2307 11.6641 17.4993 11.9327 17.4993 12.2641V16.8974C17.4993 17.2288 17.2307 17.4974 16.8993 17.4974H12.266C11.9346 17.4974 11.666 17.2288 11.666 16.8974Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 16.8974V12.2641C2.5 11.9327 2.76863 11.6641 3.1 11.6641H7.73333C8.0647 11.6641 8.33333 11.9327 8.33333 12.2641V16.8974C8.33333 17.2288 8.0647 17.4974 7.73333 17.4974H3.1C2.76863 17.4974 2.5 17.2288 2.5 16.8974Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11.666 7.73333V3.1C11.666 2.76863 11.9346 2.5 12.266 2.5H16.8993C17.2307 2.5 17.4993 2.76863 17.4993 3.1V7.73333C17.4993 8.0647 17.2307 8.33333 16.8993 8.33333H12.266C11.9346 8.33333 11.666 8.0647 11.666 7.73333Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 7.73333V3.1C2.5 2.76863 2.76863 2.5 3.1 2.5H7.73333C8.0647 2.5 8.33333 2.76863 8.33333 3.1V7.73333C8.33333 8.0647 8.0647 8.33333 7.73333 8.33333H3.1C2.76863 8.33333 2.5 8.0647 2.5 7.73333Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  ),
  Settings: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props?.className}
    >
      <g clipPath="url(#clip0_1582_19462)">
        <path
          d="M16.3513 8.66023L15.4366 6.45139L16.666 4.9974L14.9993 3.33073L13.5533 4.56653L11.2975 3.63884L10.7788 1.66406H9.15017L8.62358 3.665L6.41969 4.59403L4.99935 3.33073L3.33268 4.9974L4.54382 6.4881L3.6431 8.70267L1.66602 9.16406V10.8307L3.66694 11.377L4.59581 13.5805L3.33268 14.9974L4.99935 16.6641L6.49198 15.4476L8.66353 16.341L9.16602 18.3307H10.8327L11.3365 16.3417L13.5453 15.427C13.9134 15.6902 14.9993 16.6641 14.9993 16.6641L16.666 14.9974L15.4293 13.5386L16.3442 11.3291L18.3326 10.8117L18.3327 9.16406L16.3513 8.66023Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1582_19462">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
  SidebarToggleRight: (props: IIconsProps): JSX.Element => (
    <svg
      width="28"
      height="65"
      viewBox="0 0 28 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M4.50001 0.658722L4.5 64.3413L18.3616 60.471C23.7639 58.9626 27.5 54.0404 27.5 48.4315L27.5 16.5685C27.5 10.9596 23.7639 6.03738 18.3616 4.529L4.50001 0.658722Z"
        fill="#071311"
        stroke="#071311"
      />

      <path
        d="M13.5 28L18.5 33L13.5 38"
        stroke="#00feb6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  SidebarToggleLeft: (props: IIconsProps): JSX.Element => (
    <svg
      width="28"
      height="65"
      viewBox="0 0 28 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M0 65L14.496 60.9526C20.1144 59.3839 24 54.2648 24 48.4315L24 16.5685C24 10.7352 20.1144 5.61613 14.496 4.04742L1.1365e-05 -7.62939e-06L0 65Z"
        fill="#071311"
      />
      <path
        d="M14.5 28L9.5 33L14.5 38"
        stroke="#00feb6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  CheckTik: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props?.className}
    >
      <path
        d="M4.16602 10.8359L7.49935 14.1693L15.8327 5.83594"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  PlayButton: (props: IIconsProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5833 7.48332L3.44992 14.7583C3.37492 14.4833 3.33325 14.1917 3.33325 13.8917V6.10832C3.33325 3.54166 6.10825 1.94166 8.33325 3.22499L11.6999 5.16666L15.0749 7.11666C15.2583 7.22499 15.4333 7.34166 15.5833 7.48332Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M15.0743 12.8833L11.6993 14.8333L8.33262 16.775C6.74095 17.6917 4.86595 17.1417 3.93262 15.8L4.28262 15.5917L16.316 8.375C17.1493 9.875 16.741 11.925 15.0743 12.8833Z"
        fill="currentColor"
      />
    </svg>
  ),
  PauseButton: (props: IIconsProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.875 15.925V4.075C8.875 2.95 8.4 2.5 7.2 2.5H4.175C2.975 2.5 2.5 2.95 2.5 4.075V15.925C2.5 17.05 2.975 17.5 4.175 17.5H7.2C8.4 17.5 8.875 17.05 8.875 15.925Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M17.5017 15.925V4.075C17.5017 2.95 17.0267 2.5 15.8267 2.5H12.8017C11.61 2.5 11.1267 2.95 11.1267 4.075V15.925C11.1267 17.05 11.6017 17.5 12.8017 17.5H15.8267C17.0267 17.5 17.5017 17.05 17.5017 15.925Z"
        fill="currentColor"
      />
    </svg>
  ),
  EditButton: (props: IIconsProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          opacity="0.4"
          d="M15.85 2.90164C14.2333 1.28497 12.65 1.2433 10.9916 2.90164L9.98331 3.90997C9.89998 3.9933 9.86665 4.12664 9.89998 4.2433C10.2187 5.33695 10.8081 6.33257 11.6136 7.13807C12.419 7.94356 13.4147 8.53292 14.5083 8.85164C14.5674 8.87098 14.6307 8.87342 14.691 8.8587C14.7514 8.84397 14.8065 8.81266 14.85 8.7683L15.85 7.75997C16.675 6.9433 17.075 6.15164 17.075 5.35164C17.0833 4.52664 16.6833 3.72664 15.85 2.90164Z"
          fill="currentColor"
        />
        <path
          d="M13.0084 9.60835C12.7668 9.49169 12.5334 9.37502 12.3084 9.24169C12.1257 9.13281 11.9477 9.01603 11.7751 8.89169C11.6334 8.80002 11.4668 8.66669 11.3084 8.53335C11.2574 8.49617 11.21 8.45433 11.1668 8.40835C10.8918 8.17502 10.5834 7.87502 10.3084 7.54169C10.2834 7.52502 10.2418 7.46669 10.1834 7.39169C10.1001 7.29169 9.95844 7.12502 9.83344 6.93335C9.71465 6.77662 9.60609 6.61239 9.50844 6.44169C9.3751 6.21669 9.25844 5.99169 9.14177 5.75835C9.0251 5.50835 8.93344 5.26669 8.8501 5.04169L3.61677 10.275C3.50844 10.3834 3.40844 10.5917 3.38344 10.7334L2.93344 13.925C2.8501 14.4917 3.00844 15.025 3.35844 15.3834C3.65844 15.675 4.0751 15.8334 4.5251 15.8334C4.6251 15.8334 4.7251 15.825 4.8251 15.8084L8.0251 15.3584C8.1751 15.3334 8.38344 15.2334 8.48344 15.125L13.7168 9.89169C13.4834 9.80835 13.2584 9.71669 13.0084 9.60835Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  DeleteButton: (props: IIconsProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M17.5584 4.35835C16.2167 4.22502 14.875 4.12502 13.525 4.05002V4.04169L13.3417 2.95835C13.2167 2.19169 13.0334 1.04169 11.0834 1.04169H8.90005C6.95838 1.04169 6.77505 2.14169 6.64172 2.95002L6.46672 4.01669C5.69172 4.06669 4.91672 4.11669 4.14172 4.19169L2.44172 4.35835C2.09172 4.39169 1.84172 4.70002 1.87505 5.04169C1.90838 5.38335 2.20838 5.63335 2.55838 5.60002L4.25838 5.43335C8.62505 5.00002 13.0251 5.16669 17.4417 5.60835H17.5084C17.8251 5.60835 18.1 5.36669 18.1334 5.04169C18.1459 4.87522 18.0928 4.71046 17.9853 4.58273C17.8778 4.45499 17.7245 4.37444 17.5584 4.35835Z"
          fill="currentColor"
        />
        <path
          opacity="0.399"
          d="M16.025 6.78331C15.825 6.57498 15.55 6.45831 15.2666 6.45831H4.73329C4.44995 6.45831 4.16662 6.57498 3.97495 6.78331C3.78329 6.99165 3.67495 7.27498 3.69162 7.56665L4.20829 16.1166C4.29995 17.3833 4.41662 18.9666 7.32495 18.9666H12.675C15.5833 18.9666 15.7 17.3916 15.7916 16.1166L16.3083 7.57498C16.325 7.27498 16.2166 6.99165 16.025 6.78331Z"
          fill="currentColor"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.98341 14.1666C7.98341 14.0009 8.04926 13.8419 8.16647 13.7247C8.28368 13.6075 8.44265 13.5416 8.60841 13.5416H11.3834C11.5492 13.5416 11.7081 13.6075 11.8254 13.7247C11.9426 13.8419 12.0084 14.0009 12.0084 14.1666C12.0084 14.3324 11.9426 14.4914 11.8254 14.6086C11.7081 14.7258 11.5492 14.7916 11.3834 14.7916H8.60841C8.44265 14.7916 8.28368 14.7258 8.16647 14.6086C8.04926 14.4914 7.98341 14.3324 7.98341 14.1666ZM7.29175 10.8333C7.29175 10.6676 7.3576 10.5086 7.47481 10.3914C7.59202 10.2742 7.75099 10.2083 7.91675 10.2083H12.0834C12.2492 10.2083 12.4081 10.2742 12.5254 10.3914C12.6426 10.5086 12.7084 10.6676 12.7084 10.8333C12.7084 10.9991 12.6426 11.158 12.5254 11.2753C12.4081 11.3925 12.2492 11.4583 12.0834 11.4583H7.91675C7.75099 11.4583 7.59202 11.3925 7.47481 11.2753C7.3576 11.158 7.29175 10.9991 7.29175 10.8333Z"
          fill="currentColor"
        />
      </g>
    </svg>
  ),
  Plus: (props: IIconsProps): JSX.Element => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      className={props?.className}
    >
      <path
        d="M4.5 9H9M13.5 9H9M9 9V4.5M9 9V13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};
