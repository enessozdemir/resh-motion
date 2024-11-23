interface InputProps {
  name: string;
  type: string;
  id: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

export default function TextInput({
  name,
  type,
  id,
  value,
  handleChange,
  label,
}: InputProps) {
  return (
    <div>
      <label className="text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        className="px-2 ring-0 focus:ring-0 focus:outline-none bg-transparent w-full h-11 border border-alt-black focus:border-alt-black rounded-lg"
        name={name}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
