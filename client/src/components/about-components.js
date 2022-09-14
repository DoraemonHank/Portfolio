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
                            <p className='fs-5'>嗨!我是李柏漢</p>
                            <p className='fs-5'>擁有8年軟體開發的經驗</p>
                            <p className='fs-5'>現在任職於hTC VIVE，擔任資深軟體工程師</p>
                            <p className='fs-5'>主要負責網頁前端和AI的相關軟體開發</p>
                            <p className='fs-5'>目前已為公司爭取2項專利</p>
                            <p className='fs-5'>同時也是Udemy C語言課程講師</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>

        <div className="container">
        <h2 className="subtitle u-text-center">{t('Skill')}</h2>
            <div className="row p-5">
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">{t('Frontend')}</h5>
                            </div>
                            <p className="card-text">
                                使用Figma畫出網頁架構，用HTML/CSS/Javascript/React/Next，實作工作上會用到的Web Tool以及其他自己的Side project。
                                Web Tool 功能是用來幫Training Data做Label，使用React框架來做出網頁架構，並且和後端Web API串接。
                                另外也實作自己的個人網頁，網頁除了學經歷外，也Demo和介紹Side project，一樣使用React框架來架構網頁，再透過Jest+Enzyme來做測試；Scss搭配bootstrap做外觀上的美化並且具有RWD的功能。後端使用Node.js/Express創建routes，Database使用MongoDB/Mongoose做資料管理。
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
                                使用Caffe和Tensorflow，從創建模型、訓練分析到後處理，應用在車流追蹤，VR表情辨識，VR臉部重建，以及一些Side project。
                                並且撰寫分析Model的Tool，針對Precision，Recall，F1-score，Loss value，Accuracy等指標做分析，看Model收斂的狀況，從checkpoint中挑選表現最好的Model，
                                還有分析Training Data的品質，數量分布，類型等，針對Model的弱點從Data層面來做補強。
                                最後使用影像處理和電腦視覺技巧對Predict結果做後處理。
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
                                實作 VR Content，實作收集DL Training data的Tool和產生SLAM軌跡的虛擬Data。
                                另外還實作了一些Side Project。
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
                                VIVE VR頭盔專用的SDK，提供給VR的開發者使用，讓開發者可以使用眼球追蹤和唇形追蹤的API來應用。
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
            <h2 className="subtitle u-text-center">程式語言</h2>
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
                    text: '熟悉度',
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
            <h2 className="subtitle u-text-center">專案產品</h2>
            <p className='text-center'>以下為負責之專案量產後的產品</p>
            <div className="card mb-5">
                <div className="card-header">
                    SRanipal SDK
                </div>
                <div className="card-body">
                    <h5 className="card-title">專為VR遊戲開發者設計的SDK</h5>
                    <p className="card-text">
                        1. 眼球追蹤技術，眼球移動與眨眼皆能真實反映在您虛擬世界中的化身<br/>
                        2. 唇形追蹤技術，更能體現虛擬世界中的自己的臉部表情變化
                        </p>
                    <a target="_blank" href="https://developer-express.vive.com/resources/vive-sense/eye-and-facial-tracking-sdk/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">前往查看 &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    眼球追蹤
                </div>
                <div className="card-body">
                    <h5 className="card-title">VIVE Pro Eye</h5>
                    <p className="card-text">
                        利用VIVE Pro Eye頭盔內建的相機之影像來訓練AI辨識眼睛的動作
                        </p>
                    <a target="_blank" href="https://www.vive.com/tw/product/vive-pro-eye/features/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">前往查看 &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    唇形追蹤
                </div>
                <div className="card-body">
                    <h5 className="card-title">VIVE 表情偵測套件</h5>
                    <p className="card-text">
                         使用此套件的影像訓練出來的AI模型能辨識38種表情動作
                        </p>
                    <a target="_blank" href="https://www.vive.com/tw/accessory/facial-tracker/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">前往查看 &gt;</a>
                </div>
            </div>
            <div className="card mb-5">
                <div className="card-header">
                    Udemy課程講師
                </div>
                <div className="card-body">
                    <h5 className="card-title">Udemy線上授課</h5>
                    <p className="card-text">
                         目前上架了C語言的教學課程
                        </p>
                    <a target="_blank" href="https://www.udemy.com/user/ke-ai-ma-nong/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">前往查看 &gt;</a>
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
            <h2 className="subtitle u-text-center">資格認證</h2>
            <p className="text-center">在職期間，利用下班時間，學習不間段</p>
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
                            <li className="list-group-item">發照日期 : 2019/11</li>
                            <li className="list-group-item">證照編號 : NP72CC9TBJPD</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.coursera.org/account/accomplishments/verify/NP72CC9TBJPD" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                顯示證照
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
                            <li className="list-group-item">發照日期 : 2019/11</li>
                            <li className="list-group-item">證照編號 : S2QT9ETF76C3</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.coursera.org/account/accomplishments/verify/S2QT9ETF76C3" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                顯示證照
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
                            <li className="list-group-item">發照日期 : 2019/12</li>
                            <li className="list-group-item">證照編號 : UC-JBV844GH</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://www.udemy.com/certificate/UC-JBV844GH/" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                顯示證照
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
                            <li className="list-group-item">發照日期 : 2019/7</li>
                            <li className="list-group-item">證書編號 : ETD1080623218</li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            <a target="_blank" href="https://drive.google.com/file/d/0B82xIefl-hKNdFhKRmdUbjRzMDc2R3FVSkJtTmxWSjNmNmpr/view?resourcekey=0-1mtokUCdcZR4LZiv2mdDyA" className="btn btn-outline-secondary rounded-pill" rel="noreferrer">
                                顯示證照
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
            <h2 className="subtitle u-text-center">經歷</h2>
            <div className="timeline-group">
                <div className="timeline"></div>
                <div className="timeline-cards">
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2019/3~仍在職</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2019/3~</h4>
                            <h1 className='timeline-card__title'>宏達電</h1>
                            <p className="timeline-card__text">負責過的專案包跨用C++開發SDK，用Python來處理訓練用的資料，再搭配Tensorflow辨識臉部表情，然後C#搭配Unity實作VR遊戲和產生虛擬資料以及用React製作網頁AI輔助工具</p>
                        </div>
                    </div>
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2018/9~2019/3</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2018/9~2019/3</h4>
                            <h1 className='timeline-card__title'>大眾電腦股份有限公司</h1>
                            <p className="timeline-card__text">參與桃園市政府的科技執法專案，使用Python搭配Caffe訓練YOLO模型做車流偵測，並且用C++搭配OpenCV實作電腦視覺的算法來後處理，最後用Qt製作UI介面供客戶操作</p>
                        </div>
                    </div>
                    <div className="timeline-cards__content">
                        <h3 className="timeline-card__time">2014/11~2018/3</h3>
                        <div className="timeline-card">
                            <h4 className="d-md-none">2014/11~2018/3</h4>
                            <h1 className='timeline-card__title'>艾訊股份有限公司 </h1>
                            <p className="timeline-card__text">工業電腦的韌體開發，主要是UEFI BIOS和EC，使用的是C語言</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <div className="container mt-5">
                <h2 className="subtitle u-text-center">學歷</h2>
                <div className="timeline-group">
                    <div className="timeline"></div>
                    <div className="timeline-cards">
                        <div className="timeline-cards__row">
                            <div className="timeline-card ">
                                <h1 className='timeline-card__long-title' >雲林科技大學</h1>
                                <div className="d-flex justify-content-md-end">
                                    <p className="timeline-card__text">電機系</p>
                                    <div className='ms-1 me-1' style={{ width: '1.5px', backgroundColor: 'gray' }}></div>
                                    <p className="timeline-card__text">碩士畢業</p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-cards__row">
                            <div className="timeline-card">
                                <h1 className='timeline-card__title'>虎尾科技大學</h1>
                                <div className="d-flex">
                                    <p className="timeline-card__text">飛機系</p>
                                    <div className='ms-1 me-1' style={{ width: '1.6px', backgroundColor: 'gray' }}></div>
                                    <p className="timeline-card__text">學士畢業</p>
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
