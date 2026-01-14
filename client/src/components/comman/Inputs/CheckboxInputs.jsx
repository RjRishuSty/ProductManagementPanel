import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const CheckboxInputs = ({ field, value, onChange }) => (
  <FormControlLabel
    control={
      <Checkbox
        id={field.id}
        checked={Boolean(value)}  
        onChange={(e) =>
          onChange({
            target: {
              id: field.id,
              type: "checkbox",
              checked: e.target.checked,
            },
          })
        }
      />
    }
    label={field.label}
  />
);

export default CheckboxInputs;
