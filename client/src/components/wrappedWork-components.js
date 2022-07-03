import React, { useEffect } from 'react'

const WrappedWorkComponents = ({ postData, t }) => {
  useEffect(() => {
    console.log(postData)
  }, [])
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
                        <table className="table">
                            <tr>
                                <td className="pb-3">程式語言</td>
                                <td className="pb-3">
                                    HTML、CSS、JavaScript
                                </td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">使用框架</td>
                                <td className="pb-3 pt-3">React、Next.js、Node.js、Express</td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">CSS處理</td>
                                <td className="pb-3 pt-3">SCSS、Bootstrap5</td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">套件</td>
                                <td className="pb-3 pt-3">i18n、Draft.js</td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">單元測試</td>
                                <td className="pb-3 pt-3">Jest</td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">檢查工具</td>
                                <td className="pb-3 pt-3">ESLint</td>
                            </tr>
                            <tr >
                                <td className="pb-3 pt-3">打包工具</td>
                                <td className="pb-3 pt-3">Webpack</td>
                            </tr>
                            <tr>
                                <td className="pb-3 pt-3">資料庫</td>
                                <td className="pb-3 pt-3">MongoDB(Mongoose)、Firebase</td>
                            </tr>
                            <tr>
                                <td className="pb-3 pt-3">伺服器</td>
                                <td className="pb-3 pt-3">GCP、Heroku</td>
                            </tr>
                            <tr>
                                <td className="pb-3 pt-3">版本管理</td>
                                <td className="pb-3 pt-3">Github、GibLab、Gerrit</td>
                            </tr>
                        </table>
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
                                        <th scope="col">{t('Skill')}</th>
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
                                <div className='d-flex justify-content-center'>
                                    <button className="btn btn-outline-primary"
                                    data-bs-toggle="modal" data-bs-target={'#staticBackdrop' + index.toString(2)}>{t('DetailIntro')}</button>
                                    <button className="btn btn-outline-primary ms-5">Demo</button>
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
