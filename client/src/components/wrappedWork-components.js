import React, { useEffect } from 'react'
// import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const WrappedWorkComponents = ({ postData, t, setArticle }) => {
//   const history = useHistory()
  useEffect(() => {
    console.log(postData)
  }, [])

  const onHandleDetail = (post) => {
    localStorage.setItem('post_id', JSON.stringify(post._id))
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
                    <h2 className="subtitle u-text-center">{t('Collection')}</h2>
                </div>

            {
                postData.map((data, index) => (
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
                                    {/* <button className="btn btn-outline-primary fs-sm"
                                    data-bs-toggle="modal" data-bs-target={'#staticBackdrop' + index.toString(2)}>{t('PreviewIntro')}</button> */}
                                    <Link to='/post' target='_blank' className="btn btn-outline-primary ms-sm-5 fs-sm" onClick={() => { onHandleDetail(data) } }>{t('DetailIntro')}</Link>
                                    <a target='_blank' href={data.demo} className="btn btn-outline-primary ms-sm-5 fs-sm" rel="noreferrer">Demo</a>
                                </div>

                                {/*  Modal  */}
                                <div className="modal fade" id={'staticBackdrop' + index.toString(2)} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-scrollable">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id={'staticBackdropLabel' + index.toString(2)}>{data.title}</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body pb-5" dangerouslySetInnerHTML={{ __html: data.content }}>

                                            </div>
                                            <div className="modal-footer">
                                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Understood</button> */}
                                            </div>
                                        </div>
                                    </div>
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
