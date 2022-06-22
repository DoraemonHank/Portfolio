import React from 'react'

const LoadingComponents = () => {
  return (
    <div>
        <div className='loading-container'>
            <div className="cube-wrapper">
                <div className="cube-folding">
                    <span className="leaf1"></span>
                    <span className="leaf2"></span>
                    <span className="leaf3"></span>
                    <span className="leaf4"></span>
                </div>
                <span className="loading" data-name="Loading">Loading</span>
            </div>
        </div>
    </div>
  )
}

export default LoadingComponents
