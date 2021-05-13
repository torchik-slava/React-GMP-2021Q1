import React from "react";
import styles from "../../Modal.module.scss";
import classNames from "classnames";
import { FieldArray } from "formik";

interface ICheckboxSelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  selectedOptions: Array<string>;
	optionsList: Array<string>
  isOpen: boolean;
	toggleOptionsList: () => void;
}

const CheckboxSelect = ({
  name,
  label,
  placeholder,
  selectedOptions,
	optionsList,
  isOpen,
	toggleOptionsList,
}: ICheckboxSelectProps) => {
  return (
    <label className={classNames(styles.label, styles.selector)}>
      {label}
      <input
        className={styles.input}
        type="text"
        name={name}
        value={selectedOptions.join(", ")}
        placeholder={placeholder}
        onChange={(e) => e.preventDefault()}
        onClick={toggleOptionsList}
      />
      {isOpen && (
        <FieldArray
          name={name}
          render={(arrayHelpers) => (
            <ul className={styles.optionList}>
              {optionsList.map((option) => (
                <li key={option}>
                  <label>
                    <input
                      name={name}
                      type="checkbox"
                      value={option}
                      checked={selectedOptions.includes(option)}
                      onChange={(e) => {
                        if (e.target.checked) arrayHelpers.push(option);
                        else {
                          const idx = selectedOptions.indexOf(option);
                          arrayHelpers.remove(idx);
                        }
                      }}
                    />{" "}
                    {option}
                  </label>
                </li>
              ))}
            </ul>
          )}
        />
      )}
    </label>
  );
};

export default CheckboxSelect;
