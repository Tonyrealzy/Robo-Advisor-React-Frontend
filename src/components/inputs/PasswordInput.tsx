import React from "react";
import EyeIcon from "../../assets/icons/EyeIcon";
import EyeSlashIcon from "../../assets/icons/EyeSlashIcon";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  placeholder: string;
  visible: boolean;
  setVisible: (v: boolean) => void;
};

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ visible, setVisible, placeholder, ...inputProps }, ref) => {
    return (
      <div className="w-full h-10 relative cursor-pointer">
        <input
          type={visible ? "text" : "password"}
          name="password"
          required
          placeholder={placeholder}
          className="border border-primary outline-none h-10 w-full rounded-md text-xs"
          style={{ padding: "12px" }}
          ref={ref}
          {...inputProps}
        />
        <span
          className="absolute top-[30%] right-4"
          onClick={() => setVisible(!visible)}
        >
          {visible ? <EyeIcon /> : <EyeSlashIcon />}
        </span>
      </div>
    );
  }
);

export default PasswordInput;
