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

const FormInputField = (props: IFormInputFieldProps) => {
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <label className={styles.label}>
        {props.label}
        <input
          className={styles.input}
          type={props.type || "text"}
          disabled={props.disabled}
          placeholder={props.placeholder}
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
