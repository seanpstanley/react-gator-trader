import _ from 'lodash'
import React, { Component } from 'react'
import { Search} from 'semantic-ui-react'

const initialState = { isLoading: false, results: [], value: '' }

const source = [
    {
      "title": "Dooley Group",
      "description": "Ergonomic bandwidth-monitored moderator",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/soyjavi/128.jpg",
      "price": "$26.64"
    },
    {
      "title": "Braun - Koss",
      "description": "Exclusive 24 hour circuit",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/namankreative/128.jpg",
      "price": "$83.71"
    },
    {
      "title": "Dooley LLC",
      "description": "Assimilated tertiary open architecture",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/panchajanyag/128.jpg",
      "price": "$15.20"
    },
    {
      "title": "Herzog Group",
      "description": "Cross-platform bi-directional ability",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/diansigitp/128.jpg",
      "price": "$2.64"
    },
    {
      "title": "Grant - Smith",
      "description": "Sharable systemic productivity",
      "image": "https://s3.amazonaws.com/uifaces/faces/twitter/thierrykoblentz/128.jpg",
      "price": "$80.67"
    }
  ]

export default class SearchBar extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            {...this.props}
          />
    )
  }
}
