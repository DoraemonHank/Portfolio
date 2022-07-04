import React from 'react'

const Aboutcomponents = () => {
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
                            <p className='fs-5'>主要負責AI的相關軟體開發</p>
                            <p className='fs-5'>目前已擁有2項專利</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br/>

        <div className="container">
        <h2 className="subtitle u-text-center">專長</h2>
            <div className="row p-5">
                <div className="col-md-6 mb-5">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex">
                                <h5 className=" title-line card-title__style ">網頁前端</h5>
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
                                <h5 className=" title-line card-title__style ">深度學習</h5>
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
                            <p className="timeline-card__text">參與桃園市政府的科技執法專案，使用Python搭配Caffe訓練YOLO模型做車流偵測，並且用C++搭配OpenCV實作電腦視覺的算法來後處理，最後用Qt製作UI介面工客戶操作</p>
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

    </div>
  )
}

export default Aboutcomponents
