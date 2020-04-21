import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 0, text: 'Title', value: 0 },
  { key: 1, text: 'Author', value: 1 },
  { key: 2, text: 'ISBN', value: 2 }
]

class DropdownFilter extends Component{
  state = { options }

  render() {
    const { currentValue } = this.state

    return (
      <Dropdown
        options={this.state.options}
        clearable
        fluid
        placeholder='Search by...'
        selection
        closeOnEscape
      />
    )
  }
}

export default DropdownFilter