import React from 'react'

const Loader = () => {
  return (
      <>
      <div className="loadingText">
          <h2>L o a d i n g</h2>
      </div>
      <div className="spinner-border  spinnerLoading" role="status">
          <span className="visually-hidden">Loading...</span>
      </div>
      </>
  )
}

export default Loader