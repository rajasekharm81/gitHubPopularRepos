import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    searchQuery: languageFiltersData[0].id,
    isLoading: true,
    recievedInfo: [],
    loadingFailed: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  changeSearchQuery = id => {
    this.setState({searchQuery: id, isLoading: true}, this.getDetails)
  }

  getDetails = async () => {
    const {searchQuery} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${searchQuery}`
    const data = await fetch(apiUrl)
    const response = await data.json()
    if (data.ok) {
      this.setState({
        loadingFailed: false,
        isLoading: false,
        recievedInfo: response.popular_repos,
      })
    } else {
      this.setState({loadingFailed: true})
    }
  }

  LoadingFailedView = () => (
    <div className="failedViewContainer">
      <img
        className="FailedImage"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Something went Wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div id="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  contentDisplayView = () => {
    const {recievedInfo} = this.state
    return (
      <div>
        <ul className="repositoryItemContainer">
          {recievedInfo.map(each => (
            <RepositoryItem key={each.id} item={each} />
          ))}
        </ul>
      </div>
    )
  }

  renderView = () => {
    const {isLoading} = this.state
    if (isLoading) {
      return this.renderLoadingView()
    }
    return this.contentDisplayView()
  }

  render() {
    const {loadingFailed, searchQuery} = this.state
    const view = loadingFailed ? this.LoadingFailedView() : this.renderView()
    return (
      <div className="maincontainer">
        <h1>Popular</h1>
        <ul className="seachByContainer">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              classNameChange={each.id === searchQuery}
              getClickedId={this.changeSearchQuery}
              id={each.id}
              key={each.id}
              item={each}
            />
          ))}
        </ul>
        {view}
      </div>
    )
  }
}
export default GithubPopularRepos
