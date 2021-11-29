import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function TransferFromButton(props) {
  
  const [bank, setBank] = React.useState('');

  const handleChange = (event) => {
    setBank(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        value={bank}
        onChange={handleChange}
        displayEmpty
      >
      <MenuItem value="">
      <em>Bank account</em>
      </MenuItem>
      <MenuItem value={"checking"}>Bruin checking</MenuItem>
      </Select>
    </FormControl>
  );
}

export function TransferToButton(props) {
  
  const [account, setAccount] = React.useState('');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        value={account}
        onChange={handleChange}
        displayEmpty
      >
      <MenuItem value="">
      <em>Investing account</em>
      </MenuItem>
      <MenuItem value={"individual"}>Individual</MenuItem>
      </Select>
    </FormControl>
  );
}

export function FrequencyButton(props) {
  
  const [freq, setFreq] = React.useState('');

  const handleChange = (event) => {
    setFreq(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }}>
      <Select
        value={freq}
        onChange={handleChange}
        displayEmpty
      >
      <MenuItem value="">
        <em>Select frequency</em>
      </MenuItem>
      <MenuItem value={"once"}>Just once</MenuItem>
      <MenuItem value={"monthly"}>Monthly</MenuItem>
      </Select>
    </FormControl>
  );
}