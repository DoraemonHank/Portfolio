import React from 'react'
import WorkService from '../services/work.service'
import LoadingComponents from '../components/loading-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const WorkHoc = (WrappedComponent, articleLang, t, setArticle) => {
  // eslint-disable-next-line react/display-name
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        postData: null,
        settings: {
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    }

    getPost = (currentType, articleLang) => {
      return WorkService.getPost(currentType, articleLang)
    }

    componentDidMount () {
      const currentType = JSON.parse(localStorage.getItem('Type'))
      console.log(currentType, articleLang)
      this.getPost(currentType, articleLang)
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
            <section className="portfolio">
            </section>
            <br/>
            {
                this.state.postData === null &&
                <LoadingComponents/>
            }
            {
                this.state.postData &&
                <div className='container w-md-50 h-md-50'>
                     {
                        this.state.postData[0].category === 'web' &&
                        <div className="d-flex justify-content-center">
                            <h2 className="subtitle u-text-center">{t('Web')}</h2>
                        </div>

                     }
                     {
                        this.state.postData[0].category === 'dl' &&
                        <div className="d-flex justify-content-center">
                            <h2 className="subtitle u-text-center">{t('AI')}</h2>
                        </div>

                     }
                     {
                        this.state.postData[0].category === 'game' &&
                        <div className="d-flex justify-content-center">
                            <h2 className="subtitle u-text-center">{t('Game')}</h2>
                        </div>

                     }
                     <div className="ps-4 pe-4">
                        <Slider {...this.state.settings}>
                            {
                              this.state.postData.map((data) =>
                                  // eslint-disable-next-line react/jsx-key
                                  <div >
                                    <img src={data.imgUrl} className="d-block w-100" alt="..." />
                                  </div>
                              )
                            }
                          </Slider>
                     </div>

                </div>
            }
            {
                this.state.postData &&
                <WrappedComponent postData={this.state.postData} t={t} setArticle={setArticle} />
            }

        </div>
      )
    }
  }
}

export default WorkHoc
