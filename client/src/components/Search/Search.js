import React, { Component } from 'react';
import Dropdown from './DropdownFilter';
import SearchBar from './SearchBar';
import { Grid } from 'semantic-ui-react';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default class Search extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width = {6}>
            <Dropdown />
          </Grid.Column>
          <Grid.Column width = {20}>
            <SearchBar />
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
