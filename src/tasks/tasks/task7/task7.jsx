import axios from 'axios'
import React from 'react'
import Preloader from '../../../common/preloader'
import ImageGallery from './ImageGallery'
import Searchbar from './searchbar'

class Task7 extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
      key: '25241309-fd1c1373472a8add471a06673',
      per_page: 12,
      loading: false,
      inputValue: '',
      searchQuery: '',
      page: 1,
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery
    const nextQuery = this.state.searchQuery

    if (prevQuery !== nextQuery) {
      this.setState({
        articles: [],
        loading: true,
      })
      this.newRequest()
    }
  }

  handleChange = (e) => this.setState({ inputValue: e.target.value })

  handleSearchFormSubmit = (query) => {
    query.preventDefault()
    this.setState({
      searchQuery: this.state.inputValue,
      inputValue: '',
    })
  }

  newRequest = () =>
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
      )
      .then(
        this.setState((prevState) => ({
          page: prevState.page + 1,
          articles: [],
        }))
      )
      .then((response) => {
        this.setState({ articles: response.data.hits })
      })

  newRequestMore = () =>
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.searchQuery}&page=${this.state.page}&key=${this.state.key}&image_type=photo&orientation=horizontal&per_page=${this.state.per_page}`
      )
      .then((response) => {
        this.setState({ articles: response.data.hits })
      })
      .then(
        this.setState((prevState) => ({
          page: prevState.page + 1,
          articles: [...prevState.articles, ...this.state.articles],
        }))
      )

  render() {
    return this.state.loading ? (
      <>
        <Searchbar
          submit={this.handleSearchFormSubmit}
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <br />

        <ImageGallery
          articles={this.state.articles}
          value={'download more'}
          onclick={this.newRequestMore}
        />
      </>
    ) : (
      <Preloader />
    )
  }
}

export default Task7
