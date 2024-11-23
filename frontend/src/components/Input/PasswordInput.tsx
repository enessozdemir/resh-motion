import { FiEye, FiEyeOff } from "react-icons/fi";

interface PasswordInputProps {
  name: string;
  id: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick: () => void;
  showPassword: boolean;
  label: string;
}

export default function PasswordInput({
  name,
  id,
  handleChange,
  handleClick,
  showPassword,
  label,
}: PasswordInputProps) {
  return (
    <div className="mt-6">
      <label className="text-sm font-bold" htmlFor="password">
        {label}
      </label>
      <div className="flex justify-between ring-0 focus:ring-0 pr-2 mt-1 bg-transparent outline-none w-full h-11 border border-alt-black focus:border-alt-black rounded-lg">
        <input
          className="w-[90%] rounded-lg ring-0 focus:ring-0 focus:outline-none border-none focus:border-alt-black"
          name={name}
          id={id}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={handleClick}
          className="focus:outline-none"
        >
          {showPassword ? <FiEyeOff /> : <FiEye />}
        </button>
      </div>
    </div>
  );
}
