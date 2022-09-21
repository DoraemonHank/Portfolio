import React, { useEffect } from 'react'
import ReactEcharts from 'echarts-for-react'

const Aboutcomponents = ({ t }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <div>
        <section className="about">
            <div className="filter"></div>
            <div className="container border about-container">
                <div className="row">
                    <div className="offset-md-2 col-12 col-md-6">
                        <div className='image-container'>
                            <img src='https://i.imgur.com/Oluim1O.jpg' ></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='text-light text-center text-md-start'>
                            <p className='fs-5'>{t('About1')}</p>
                            <p className='fs-5'>{t('About2')}</p>
                            <p className='fs-5'>{t('About3')}</p>
                            <p className='fs-5'>{t('About4')}</p>
                            <p className='fs-5'>{t('About5')}</p>
                            <p className='fs-5'>{t('About6')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>

        <div className="container">
        <h2 className="subtitle u-text-center">{t('Skill')}</h2>
            <div className="row p-md-5">
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">{t('Frontend')}</h5>
                            </div>
                            <p className="card-text">
                                {t('SkillFE')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">{t('AI')}</h5>
                            </div>
                            <p className="card-text">
                                {t('SkillAI')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">Unity3D</h5>
                            </div>
                            <p className="card-text">
                                {t('SkillGame')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">SDK</h5>
                            </div>
                            <p className="card-text">
                                {t('SkillSdk')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">UEFI BIOS</h5>
                            </div>
                            <p className="card-text">
                                EDK II、Intel platform、AMI vendor
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br/>

        <div className="container mt-5">
            <h2 className="subtitle u-text-center">{t('Program')}</h2>
            <ReactEcharts
                key={Date.now()}
                theme="light"
                option={{
                  color: ['#3398DB'],
                  tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                      type: 'shadow'
                    }
                  },
                  title: {
                    text: 'Familiarity',
                    textStyle: {
                      color: 'rgba(0, 0, 0, .85)',
                      fontSize: '12px'
                    }
                  },
                  grid: {
                    top: 40,
                    bottom: 30,
                    right: 0,
                    left: 57
                  },
                  xAxis: [{
                    type: 'category',
                    data: ['C', 'C++', 'C#', 'Python', 'HTML', 'CSS', 'JS']
                  }],
                  yAxis: [{
                    type: 'value'
                  }],
                  series: [{
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 9, 6, 7, 8.5, 7.5, 8]
                  }]
                }}
                style={{ width: '100%', height: 400 }}
            />

        </div>
        <br/>

        <div className="container mt-5">
            <h2 className="subtitle u-text-center">{t('Project')}</h2>
            <p className='text-center'>{t('ProjectIntro')}</p>
            <div className="card mb-5">
                <div className="card-header">
                    SRanipal SDK
                </div>
                <div className="card-body">
                    <h5 className="card-title">{t('ProjectSdkTitle')}</h5>
                    <p className="card-text">
                        1. {t('ProjectSdk1')}<br/>
                        2. {t('ProjectSdk2')}
                        </p>
                    <a target="_blank" href="https://developer-express.vive.com/resources/vive-sense/eye-and-facial-tracking-sdk/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">{t('GoToView')} &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    {t('ProjectEyeTrackingHeader')}
                </div>
                <div className="card-body">
                    <h5 className="card-title">VIVE Pro Eye</h5>
                    <p className="card-text">
                        {t('ProjectEyeTracking')}
                        </p>
                    <a target="_blank" href="https://www.vive.com/tw/product/vive-pro-eye/features/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">{t('GoToView')} &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                {t('ProjectLipTrackingHeader')}
                </div>
                <div className="card-body">
                    <h5 className="card-title">VIVE {t('ProjectLipTrackingTitle')}</h5>
                    <p className="card-text">
                         {t('ProjectLipTracking')}
                        </p>
                    <a target="_blank" href="https://www.vive.com/tw/accessory/facial-tracker/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">{t('GoToView')} &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    Udemy {t('ProjectUdemyHeader')}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Udemy {t('ProjectUdemyTitle')}</h5>
                    <p className="card-text">
                         {t('UdemyInfo')}
                        </p>
                    <a target="_blank" href="https://www.udemy.com/user/ke-ai-ma-nong/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">{t('GoToView')} &gt;</a>
                </div>
            </div>
        </div>
        <br/>

        <div className="container mt-5 d-none">
            <h2 className="subtitle u-text-center">證照</h2>
            <div className="row">
                <div className="col col-md-3 ">
                    <div className="card">
                        <img src="https://i.imgur.com/GE4M4ai.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>人工智慧核心能力認證</strong></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">發照日期 : 2020/6/11</li>
                            <li className="list-group-item">證照編號 : AIF-2018000027</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <h2 className="subtitle u-text-center">{t('Certificate')}</h2>
            <p className="text-center">{t('CertificateIntro')}</p>
            <div className="row">
                <div className="col-12 col-lg-4 mb-5">
                    <div className="card">
                        <img src="https://i.imgur.com/bHsy9dF.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Convolutional Neural Networks</strong></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://i.imgur.com/Or5DB6v.jpg" className="w-25 h-25" alt="..."/>
                                    <p className='ms-5 mt-4'>Coursera</p>
                                </div>
                            </li>
                            <li className="list-group-item">{t('Issued')} : 2019/11</li>
                            <li className="list-group-item">{t('CredentialId')} : NP72CC9TBJPD</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.coursera.org/account/accomplishments/verify/NP72CC9TBJPD" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                {t('ShowCredential')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className=" bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 mb-5">
                    <div className="card">
                        <img src="https://i.imgur.com/3FPqZfv.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Neural Networks and Deep Learning</strong></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://i.imgur.com/Or5DB6v.jpg" className="w-25 h-25" alt="..."/>
                                    <p className='ms-5 mt-4'>Coursera</p>
                                </div>
                            </li>
                            <li className="list-group-item">{t('Issued')} : 2019/11</li>
                            <li className="list-group-item">{t('CredentialId')} : S2QT9ETF76C3</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.coursera.org/account/accomplishments/verify/S2QT9ETF76C3" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                {t('ShowCredential')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className=" bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 mb-5">
                    <div className="card">
                        <img src="https://i.imgur.com/UWg6epF.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>Deep Learning A-Z™ </strong></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://i.imgur.com/BodSurS.jpg" className="w-25 h-25" alt="..."/>
                                    <p className='ms-5 mt-4'>Udemy</p>
                                </div>
                            </li>
                            <li className="list-group-item">{t('Issued')} : 2019/12</li>
                            <li className="list-group-item">{t('CredentialId')} : UC-JBV844GH</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.udemy.com/certificate/UC-JBV844GH/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                {t('ShowCredential')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className=" bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-lg-4 mb-5">
                    <div className="card">
                        <img src="https://i.imgur.com/XOfRzvo.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title"><strong>深度學習實戰</strong></h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="d-flex align-items-center">
                                    <img src="https://i.imgur.com/IbOUM4b.png" className="w-25 h-25" alt="..."/>
                                    <p className='ms-5 mt-4'>艾鍗學院</p>
                                </div>
                            </li>
                            <li className="list-group-item">{t('Issued')} : 2019/7</li>
                            <li className="list-group-item">{t('CredentialId')} : ETD1080623218</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://drive.google.com/file/d/0B82xIefl-hKNdFhKRmdUbjRzMDc2R3FVSkJtTmxWSjNmNmpr/view?resourcekey=0-1mtokUCdcZR4LZiv2mdDyA" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                {t('ShowCredential')}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="currentColor" className=" bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <div className="container mt-5">
            <h2 className="subtitle u-text-center">{t('Experience')}</h2>
            <div className="timeline-group">
                <div className="timeline"></div>
                <div className="timeline-cards">
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2019/3~{t('Present')}</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2019/3~{t('Present')}</h4>
                            <h1 className='timeline-card__title'>{t('hTC')}</h1>
                            <p className="timeline-card__text">{t('hTCWork')}</p>
                        </div>
                    </div>
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2018/9~2019/3</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2018/9~2019/3</h4>
                            <h1 className='timeline-card__title'>{t('FIC')}</h1>
                            <p className="timeline-card__text">{t('FICWork')}</p>
                        </div>
                    </div>
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2014/11~2018/3</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2014/11~2018/3</h4>
                            <h1 className='timeline-card__title'>{t('Axiomtek')} </h1>
                            <p className="timeline-card__text">{t('AxiomtekWork')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <div className="container mt-5">
                <h2 className="subtitle u-text-center">{t('Education')}</h2>
                <div className="timeline-group">
                    <div className="timeline"></div>
                    <div className="timeline-cards">
                        <div className="timeline-cards__row">
                            <div className="timeline-card ">
                                <h1 className='timeline-card__long-title' >{t('NYUST')}</h1>
                                <div className="d-flex justify-content-md-end">
                                    <p className="timeline-card__text">{t('EE')}</p>
                                    <div className='ms-1 me-1' style={{ width: '1.5px', backgroundColor: 'gray' }}></div>
                                    <p className="timeline-card__text">{t('Master')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-cards__row">
                            <div className="timeline-card">
                                <h1 className='timeline-card__title'>{t('NFU')}</h1>
                                <div className="d-flex">
                                    <p className="timeline-card__text">{t('AE')}</p>
                                    <div className='ms-1 me-1' style={{ width: '1.6px', backgroundColor: 'gray' }}></div>
                                    <p className="timeline-card__text">{t('Bachelor')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
    </div>
  )
}

export default Aboutcomponents
