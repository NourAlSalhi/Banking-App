// components/FormInput.tsx
"use client";

import { useFormContext, Controller } from 'react-hook-form';

interface FormInputProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const Input: React.FC<FormInputProps> = ({
  name,
  label,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  const { control, formState: { errors } } = useFormContext(); // Use context to access the form methods

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm font-medium text-gray-700">{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            placeholder={placeholder}
            className={`py-2 px-3 border rounded ${
              errors[name] ? 'border-red-500' : 'border-gray-300'
            }`}
          />
        )}
      />
      {errors[name] && (
        <p className="mt-1 text-xs text-red-500">
          {(errors[name]?.message as string) || 'This field is required'}
        </p>
      )}
    </div>
  );
};

export default Input;
