const FailurePage = props => {
  const {tryAgain} = props

  const onTryAgain = () => {
    tryAgain()
  }

  return (
    <div className="failure-view">
      <img
        className="failure-img"
        alt="failure view"
        src="https://res.cloudinary.com/dps34f4by/image/upload/v1647500780/alert-triangle_yp7fwc.png"
      />
      <p className="failure-text">Something went wrong. Please try again</p>
      <button onClick={onTryAgain} className="retry-btn" type="button">
        Try Again
      </button>
    </div>
  )
}
export default FailurePage
