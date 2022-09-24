import {Component} from 'react'
import './index.css'

class LanguageFilterItem extends Component {
  sendId = () => {
    const {id, getClickedId} = this.props
    getClickedId(id)
  }

  render() {
    const {item, classNameChange} = this.props
    const classOfh1 = classNameChange ? 'active' : 'inactive'
    return (
      <li className="itemContainer">
        <button className={classOfh1} type="button" onClick={this.sendId}>
          <h1>{item.language}</h1>
        </button>
      </li>
    )
  }
}
export default LanguageFilterItem
