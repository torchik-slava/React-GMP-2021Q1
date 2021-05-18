import React from "react";
import { withKnobs, text, boolean, array } from "@storybook/addon-knobs";
import CheckboxSelect from "./CheckboxSelect";
import "../../../../index.css";

export default {
  title: "Storybook Knobs",
  decorators: [withKnobs],
  argTypes: { onClick: { action: "clicked" } },
};

export const CheckboxSelectExample = (): React.ReactElement => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-end",
        padding: "90px",
        width: "768px",
        height: "500px",
        color: "#fff",
        backgroundColor: "#232323",
        borderRadius: "5px",
      }}
    >
      <CheckboxSelect
        name="genres"
        label={text("Label", "Gerne")}
        placeholder={text("Placeholder", "Select Genre")}
        selectedOptions={array("Selected Options", ["Documentary", "Comedy"])}
        optionsList={array("Options List", [
          "Documentary",
          "Comedy",
          "Action",
          "Horror",
          "Crime",
        ])}
        isOpen={boolean("Is Open", true)}
        toggleOptionsList={() => {}}
      />
    </div>
  );
};
