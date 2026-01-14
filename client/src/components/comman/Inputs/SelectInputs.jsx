import React from "react";
import { FormControl, InputLabel, Select, MenuItem, Box, Chip } from "@mui/material";

const SelectInputs = ({ field, value, onChange }) => {
  const isMultiple = field.multiple;

  return (
    <FormControl fullWidth>
      <InputLabel id={`${field.id}-label`}>{field.label}</InputLabel>
      <Select
        labelId={`${field.id}-label`}
        id={field.id}
        name={field.id}          // 🔥 THIS WAS MISSING
        label={field.label}
        multiple={isMultiple}
        value={value || []}
        onChange={onChange}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {selected.map((val) => (
              <Chip key={val} label={val} size="small" />
            ))}
          </Box>
        )}
      >
        {field.options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInputs;
