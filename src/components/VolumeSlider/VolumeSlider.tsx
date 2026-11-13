import { useId, useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

export interface VolumeSliderProps {
  label?: string;
  defaultValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function VolumeSlider({
  label = 'Volume',
  defaultValue = 0,
  min = 0,
  max = 100,
  onChange,
}: VolumeSliderProps) {
  const [value, setValue] = useState(defaultValue);
  const labelId = useId();

  const handleChange = (_event: Event, newValue: number | number[]) => {
    const nextValue = newValue as number;
    setValue(nextValue);
    if (onChange) onChange(nextValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Typography id={labelId} gutterBottom>
        {label}
      </Typography>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        aria-labelledby={labelId}
        data-testid="volume-slider"
        color="primary"
      />
    </Box>
  );
}
