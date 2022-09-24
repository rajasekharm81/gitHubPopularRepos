import {Component} from 'react'
import './index.css'

class RepositoryItem extends Component {
  render() {
    const {item} = this.props
    return (
      <li className="RepositoryItemContainer">
        <img className="avatarImage" src={item.avatar_url} alt={item.name} />
        <h1 className="itemName">{item.name}</h1>
        <div className="starContainer">
          <img
            className="starImg"
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
          />
          <p>{item.stars_count} Stars</p>
        </div>
        <div className="forksContainer">
          <img
            className="starImg"
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
          />
          <p>{item.forks_count} Forks</p>
        </div>
        <div className="openIssuesContainer">
          <img
            className="starImg"
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
          />
          <p>{item.issues_count} Open issues</p>
        </div>
      </li>
    )
  }
}
export default RepositoryItem
