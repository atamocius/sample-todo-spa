import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Filters({ onChange, value }) {
  return (
    <FormControl sx={{ padding: 2 }}>
      <RadioGroup row value={value} onChange={onChange}>
        <FormControlLabel value='all' control={<Radio />} label='All' />
        <FormControlLabel value='undone' control={<Radio />} label='Undone' />
        <FormControlLabel value='done' control={<Radio />} label='Done' />
      </RadioGroup>
    </FormControl>
  );
}
