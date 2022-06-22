import React from 'react'
import WorkService from '../services/work.service'

const WorkHoc = (WrappedComponent, t) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        postData: null
      }
    }

    componentDidMount () {
      const currentType = JSON.parse(localStorage.getItem('Type'))
      WorkService.getPost(currentType)
        .then(data => {
          this.setState({
            postData: data.data
          }
          )
          console.log(this.state.postData[0].imgUrl)
        })
        .catch(error => {
          console.log(error)
        })
    }

    render () {
      return (
        <div>
            <section className="web">
            </section>
            <br/>
            {
                this.state.postData === null &&
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

            }
            {
                this.state.postData &&
                <div className='container w-md-50 h-md-50'>
                     {
                        this.state.postData[0].category === 'web' &&
                        <div className="d-flex justify-content-center">
                            <h4 className='title text-center'>{t('Web')}</h4>
                        </div>

                     }
                    <div id="carouselExampleControls" className="carousel slide border border-5" data-bs-ride="carousel">
                        <div className="carousel-inner">

                            {
                                this.state.postData.map((data, index) => (
                                  // eslint-disable-next-line react/jsx-key
                                  index === 0 &&
                                    <div className="carousel-item active">
                                        <img src={data.imgUrl} className="d-block w-100" alt="..." />
                                    </div>
                                ))
                            }
                            {
                                this.state.postData.map((data, index) => (
                                  // eslint-disable-next-line react/jsx-key
                                  index !== 0 &&
                                    <div className="carousel-item ">
                                        <img src={data.imgUrl} className="d-block w-100" alt="..." />
                                    </div>
                                ))
                            }

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            }
            {
                this.state.postData &&
                <WrappedComponent postData={this.state.postData} t={t}/>
            }

        </div>
      )
    }
  }
}

// function WorkHoc (WrappedComponent) {
//   return class extends React.Component {
//     render () {
//       return <WrappedComponent />
//     }
//   }
// }

export default WorkHoc
