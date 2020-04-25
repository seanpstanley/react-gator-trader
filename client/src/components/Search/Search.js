// import React, { Component } from 'react';
// import Dropdown from './DropdownFilter';
// import SearchBar from './SearchBar';
// import { Grid } from 'semantic-ui-react';

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);

// export default class Search extends Component {
//   render() {
//     return (
//       <div>
//         <Grid>
//           <Grid.Column width = {6}>
//             <Dropdown />
//           </Grid.Column>
//           <Grid.Column width = {20}>
//             <SearchBar />
//           </Grid.Column>
//         </Grid>
//       </div>
//     );
//   }
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function Search() {
  const classes = useStyles();
  // const [age, setAge] = React.useState('');

  // const handleChange = (event) => {
  //   setAge(event.target.value);
  // };

  return (
    <Paper component="form" className={classes.root}>
      {/* <IconButton className={classes.iconButton} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      {/* <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        ></Select>
      <Divider className={classes.divider} orientation="vertical" /> */}
      <InputBase
        className={classes.input}
        placeholder="Search Gator Trader"
        inputProps={{ 'aria-label': 'search gator trader' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
