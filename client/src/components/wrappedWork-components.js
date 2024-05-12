import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const WrappedWorkComponents = ({ postData, t, setArticle }) => {
  useEffect(() => {
    console.log(postData)
  }, [])

  useEffect(() =>{
    window.scroll(0, 0)
  }, [])

  const onHandleDetail = (post) => {
    localStorage.setItem('post_id', JSON.stringify(post._id))
    localStorage.setItem('post_ln_id', JSON.stringify(post.ln_id))
  }
  return (

    <div>
        <div className="container mt-4">
            <br/>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                     <h2 className="subtitle u-text-center">{t('Proficiency')}</h2>
                </div>

                <div className="row">
                    <div className="col col-md-8 offset-md-2">
                        {
                            postData[0].category === 'web' &&
                            <table className="table">
                                <tr>
                                    <td className="pb-3">{t('Program')}</td>
                                    <td className="pb-3">
                                        HTML、CSS、JavaScript
                                    </td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Framework')}</td>
                                    <td className="pb-3 pt-3">React、Next.js、Node.js、Express</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">CSS</td>
                                    <td className="pb-3 pt-3">SCSS、Bootstrap5</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Package')}</td>
                                    <td className="pb-3 pt-3">i18next、Draft.js、ECharts</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('UnitTest')}</td>
                                    <td className="pb-3 pt-3">Jest、Enzyme</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('CheckTool')}</td>
                                    <td className="pb-3 pt-3">ESLint</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Bundler')}</td>
                                    <td className="pb-3 pt-3">Webpack</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-3">{t('DB')}</td>
                                    <td className="pb-3 pt-3">MongoDB(Mongoose)、Firebase</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-3">{t('Server')}</td>
                                    <td className="pb-3 pt-3">GCP、Heroku</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-3">{t('VersionControl')}</td>
                                    <td className="pb-3 pt-3">Github、GitLab、Gerrit</td>
                                </tr>
                            </table>
                        }

                        {
                            postData[0].category === 'dl' &&
                            <table className="table">
                                <tr>
                                    <td className="pb-3">{t('Program')}</td>
                                    <td className="pb-3">
                                        Python
                                    </td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Framework')}</td>
                                    <td className="pb-3 pt-3">Tensorflow、Keras、Caffe</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Package')}</td>
                                    <td className="pb-3 pt-3">numpy、matplot、pandas</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-3">{t('VersionControl')}</td>
                                    <td className="pb-3 pt-3">Github、GitLab、Gerrit</td>
                                </tr>
                            </table>
                        }

                        {
                            postData[0].category === 'game' &&
                            <table className="table">
                                <tr>
                                    <td className="pb-3">{t('Program')}</td>
                                    <td className="pb-3">
                                        C#
                                    </td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('GameEngine')}</td>
                                    <td className="pb-3 pt-3">Unity</td>
                                </tr>
                                <tr >
                                    <td className="pb-3 pt-3">{t('Package')}</td>
                                    <td className="pb-3 pt-3">SRanipal SDK</td>
                                </tr>
                                <tr>
                                    <td className="pb-3 pt-3">{t('VersionControl')}</td>
                                    <td className="pb-3 pt-3">Github、GitLab、Gerrit</td>
                                </tr>
                            </table>
                        }

                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-4">
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <h2 className="subtitle u-text-center">{t('Portfolio')}</h2>
                </div>

            {
                postData.sort((a, b) => a.order - b.order).map((data, index) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="mb-5  ps-5 pe-5 pb-5 container flex-column flex-md-row">
                        <h4 className="text-center">{data.title}</h4>

                        <div className="row">
                            <div className="col col-md-8 offset-md-2">
                                <div className="d-flex flex-column align-items-center my-5">
                                    <img src={data.imgUrl} className="w-75 h-75 "></img>
                                </div>

                                <table className="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">{t('Technique')}</th>
                                        <th scope="col">{t('Intro')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row"></th>
                                            <td>{data.tag}</td>
                                            <td>{data.intro}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className='d-flex btn-sm justify-content-center'>
                                    <Link to='/post' target='_blank' className="btn btn-outline-primary ms-sm-5 fs-sm" onClick={() => { onHandleDetail(data) } }>{t('DetailIntro')}</Link>
                                    <a target='_blank' href={data.demo} className="btn btn-outline-primary ms-sm-5 fs-sm" rel="noreferrer">Demo</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default WrappedWorkComponents
