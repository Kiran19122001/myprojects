import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const displayResults = () => {
    clickTabItem(tabId)
  }
  const addClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${addClass}`}
        onClick={displayResults}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
