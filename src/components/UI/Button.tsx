"use client";
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  handleClick: () => void;
};
export const IButton: React.FC<ButtonProps> = ({ label, handleClick }) => {
  return (
    <button
      onClick={async () => {
        await handleClick();
      }}
      className="text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold  text-center justify-center border-0 border-transparent rounded-md focus-visible:outline-none focus:outline-none text-white px-4 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white bg-[#ee4d2d] h-12"
    >
      {label}
    </button>
  );
};
