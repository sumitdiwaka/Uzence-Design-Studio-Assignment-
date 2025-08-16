import { useState } from "react";
import type { InputFieldProps } from "./InputField.types";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";

export const InputField: React.FC<InputFieldProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = "outlined",
  size = "md",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const clearInput = () => {
    setInternalValue("");
    onChange?.({
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  const baseStyles =
    "w-full rounded-xl focus:ring-2 transition px-3 outline-none";
  const variantStyles: Record<string, string> = {
    filled: "bg-gray-100 focus:ring-primary",
    outlined: "border border-gray-300 focus:border-primary focus:ring-primary",
    ghost: "bg-transparent border-b focus:border-primary focus:ring-primary",
  };
  const sizeStyles: Record<string, string> = {
    sm: "h-8 text-sm",
    md: "h-10 text-base",
    lg: "h-12 text-lg",
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={internalValue}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          className={`${baseStyles} ${variantStyles[variant]} ${
            sizeStyles[size]
          } ${invalid ? "border-danger" : ""} ${
            disabled ? "bg-gray-200 cursor-not-allowed" : ""
          }`}
        />
        {internalValue && !disabled && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-10 text-gray-400"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
        )}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-2 text-gray-500"
        >
          {showPassword ? (
            <EyeSlashIcon className="w-5 h-5" />
          ) : (
            <EyeIcon className="w-5 h-5" />
          )}
        </button>
      </div>
      {helperText && !invalid && (
        <p className="text-xs text-gray-500">{helperText}</p>
      )}
      {invalid && errorMessage && (
        <p className="text-xs text-danger">{errorMessage}</p>
      )}
    </div>
  );
};
