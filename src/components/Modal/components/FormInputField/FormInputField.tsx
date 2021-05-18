import React from "react";
import { useField } from "formik";
import styles from "../../Modal.module.scss";

interface IFormInputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
}

const FormInputField = (props: IFormInputFieldProps): React.ReactElement => {
  const { label, type, disabled, placeholder } = props;
  const [field, meta] = useField(props);
  return (
    <>
      <label className={styles.label} htmlFor={label}>
        {label}
        <input
          id={label}
          className={styles.input}
          type={type || "text"}
          disabled={disabled}
          placeholder={placeholder}
          // PATTERN: Destructuring Arguments
          {...field}
          {...props}
        />
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default FormInputField;
