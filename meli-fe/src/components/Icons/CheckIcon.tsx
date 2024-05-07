const CheckIcon = ({ color = "#000", size = "24" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export default CheckIcon;
