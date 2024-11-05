"use client";
import { useFormContext, Controller } from "react-hook-form";

const Input: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-1 text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`py-2 px-3 border rounded ${
              errorMessage ? "border-red-500" : "border-gray-300"
            } focus:border-blue-500`}
          />
        )}
      />
      <p className={`mt-1 text-[10px] text-red-500 h-4`}>{errorMessage || " "}</p>
    </div>
  );
};

export default Input;
