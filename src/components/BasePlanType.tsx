import { 
  Box, 
  Divider, 
  FormControlLabel, 
  MenuItem, 
  Select, 
  SelectChangeEvent, 
  Typography, 
  Radio, 
  RadioGroup 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

// Title Component
const Title = styled(Typography)(() => ({
  fontSize: 24,
  fontWeight: 600,
}));

// Styled Radio Button
const StyledRadio = styled(Radio)(() => ({
  color: "#1976d2",
  "&.Mui-checked": {
    color: "#1565c0",
  },
}));

// Styled Radio Group
const StyledRadioGroup = styled(RadioGroup)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
}));

// Styled Select (Dropdown) with optional Chevron icon
const StyledSelect = styled(Select)<{ hideChevron?: boolean }>(({ hideChevron }) => ({
  flexGrow: 1,
  borderRadius: "4px",
  "& .MuiSelect-icon": {
    display: hideChevron ? "none" : "block", // Hide chevron when hideChevron is true
  },
}));

// Dropdown Component
interface DropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: SelectChangeEvent<string>) => void;
  hideChevron?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, hideChevron }) => (
  <StyledSelect
    variant="outlined"
    size="small"
    value={value}
    onChange={(event) => onChange(event as SelectChangeEvent<string>)} 
    displayEmpty
    hideChevron={hideChevron}
  >
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </StyledSelect>
);

// Radio Group Component
interface RadioButtonGroupProps {
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({ options, selectedValue, onChange }) => (
  <StyledRadioGroup value={selectedValue} onChange={onChange}>
    {options.map((option) => (
      <FormControlLabel key={option.value} value={option.value} control={<StyledRadio />} label={option.label} />
    ))}
  </StyledRadioGroup>
);

const BasePlanType = () => {
  const [selectedPlan, setSelectedPlan] = useState("BP");
  const [selectedTrend, setSelectedTrend] = useState("");

  // Radio options
  const radioOptions = [
    { value: "BP", label: "BP" },
    { value: "Circana YAG", label: "Circana YAG" },
    { value: "Wisdom", label: "Wisdom" },
  ];

  // Dropdown options
  const dropdownOptions = [
    { value: "", label: "Trends" },
    { value: "1%", label: "3LM" },
    { value: "2%", label: "6LM" },
    { value: "3%", label: "12LM" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        p: 2,
        gap: 2,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Plan Selection Section */}
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4, flex: 1, minWidth: 250 }}>
        <Title>Select Base Plan Type</Title>
        <RadioButtonGroup options={radioOptions} selectedValue={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} />
      </Box>

      {/* Divider */}
      <Divider orientation="vertical" flexItem />

      {/* Trend Adjustment Section */}
      <Box sx={{ display: "flex", alignItems: "center", flexWrap: "nowrap", gap: 2, flex: 1, minWidth: 250 }}>
        <Title sx={{ fontSize: 18 }}>Trend Adjustment (1%)</Title>
        <Dropdown options={dropdownOptions} value={selectedTrend} onChange={(e) => setSelectedTrend(e.target.value)} hideChevron={true} />
      </Box>
    </Box>
  );
};

export default BasePlanType;
