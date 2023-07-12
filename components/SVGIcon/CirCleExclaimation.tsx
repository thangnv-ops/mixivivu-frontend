interface CirCleExclaimationIconProps {
  fillColor?: string
  strokeColor?: string
}

export const CirCleExclaimationIcon = ({ fillColor, strokeColor }: CirCleExclaimationIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={fillColor}
    >
      <path
        d="M12 8V13M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
