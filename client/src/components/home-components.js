import React, { useState, useEffect, useRef } from 'react'
import '../../style/opening_animation.scss'
import '../../style/index.scss'

const HomeComponents = ({ t }) => {
  const lastWord = useRef()

  const [animation, setAnimation] = useState({})

  useEffect(() => {
    if (lastWord && lastWord.current) {
      lastWord.current.addEventListener('animationend', () => {
        setAnimation(
          {
            transition: 'all 1s ease',
            opacity: '0',
            pointerEvents: 'none'
          }
        )
      })
    }

    return () => {
      lastWord.current &&
      lastWord.current.removeEventListener('animationend', () => {
        setAnimation(
          {
            transition: 'all 1s ease',
            opacity: '0',
            pointerEvents: 'none'
          }
        )
      })
    }
  }, [])

  return (
    <main>
        <div className="bg"></div>
        <div className="hero">
            <div className="container">
              <div className='row'>
                <div className="col-10 offset-md-1">
                  <h1 className="hero__heading">HELLO <br/>I'M HANK</h1>
                </div>
                <div className="col">
                  <div className="hero__bg"></div>
                </div>
              </div>
            </div>
        </div>
        <div className="animation" style={animation}>
          <div className="logo">
              <svg width="80" height="99" viewBox="0 0 80 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M74.0576 96.5H76.5576V94V5.13281V2.63281H74.0576H62.2778H59.7778V5.13281V40.8408H19.978V5.13281V2.63281H17.478H5.75928H3.25928V5.13281V94V96.5H5.75928H17.478H19.978V94V55.4233H59.7778V94V96.5H62.2778H74.0576Z" stroke="white" strokeWidth="2" id="first" className="thePaths"/>
              </svg>
              <svg width="65" height="80" viewBox="0 0 65 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M45.5838 74.118L46.2747 75.5H47.8198H59.6606H62.1606V73V72.0234V71.5067L61.9558 71.0323C60.5986 67.8894 59.8413 63.4492 59.8413 57.5581V27.1626V27.1321L59.8406 27.1016C59.6639 19.8576 57.2032 13.9227 52.2813 9.60179C47.3815 5.2592 40.7626 3.23926 32.7441 3.23926C27.6244 3.23926 22.8597 4.19558 18.4842 6.14028L18.4842 6.14026L18.4755 6.14413C14.1559 8.08358 10.6331 10.7698 7.99065 14.2323L7.98762 14.2363C5.39373 17.6493 3.99902 21.3423 3.99902 25.2705V27.7705H6.49902H17.8516H20.3516V25.2705C20.3516 23.3166 21.2152 21.5462 23.4361 19.8888C25.655 18.2329 28.4809 17.3335 32.0728 17.3335C36.2633 17.3335 39.005 18.4043 40.742 20.1413L40.7497 20.149L40.7574 20.1566C42.5484 21.9167 43.5498 24.3576 43.5498 27.7729V30.4609H35.0635C25.2874 30.4609 17.3308 32.4271 11.4982 36.6765C5.59319 40.9673 2.65625 47.0769 2.65625 54.6895C2.65625 61.0441 5.02529 66.4068 9.71752 70.593L9.72715 70.6016L9.73687 70.6101C14.4591 74.7364 20.4273 76.7207 27.4341 76.7207C33.8497 76.7207 39.5666 74.7719 44.5207 70.9406C44.8152 72.2063 45.164 73.2785 45.5838 74.118ZM37.9035 59.482C35.0957 61.1019 32.1677 61.894 29.082 61.894C25.8474 61.894 23.4245 61.034 21.6012 59.4936C19.8889 58.0471 18.9478 56.0264 18.9478 53.1025C18.9478 49.9305 20.2159 47.7208 22.8986 46.1506C25.788 44.4595 30.4444 43.4565 37.1997 43.4565H43.5498V53.904C42.3562 56.1137 40.5099 57.9783 37.9035 59.482Z" stroke="white" strokeWidth="2" id="second" className="thePaths"/>
              </svg>
              <svg width="62" height="78" viewBox="0 0 62 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.2388 6.84977L18.1333 4.45996H15.7412H5.06006H2.56006V6.95996V73V75.5H5.06006H16.3516H18.8516V73V26.5362C20.1974 23.9588 21.9997 21.8915 24.263 20.2939C26.5734 18.663 29.2748 17.8218 32.4648 17.8218C36.6048 17.8218 39.1189 18.8657 40.5816 20.4409L40.5897 20.4496L40.5978 20.4582C42.1409 22.0886 43.1699 24.8687 43.2095 29.3097V73V75.5H45.7095H57.001H59.501V73V29.3599V29.3502L59.5009 29.3405C59.4374 21.1492 57.5774 14.5459 53.4936 9.97813C49.3596 5.35421 43.3314 3.23926 35.8828 3.23926C29.0824 3.23926 23.207 5.29518 18.3498 9.3663L18.2388 6.84977Z" stroke="white" strokeWidth="2" id="third" className="thePaths"/>
              </svg>
              <svg width="71" height="104" viewBox="0 0 71 104" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '2rem' }}>
                  <path d="M19.7202 55.0376V5.25V2.75H17.2202H5.92871H3.42871V5.25V99V101.5H5.92871H17.2202H19.7202V99V76.8114L24.0704 72.2737L45.3129 100.503L46.063 101.5H47.3105H60.5552H65.5393L62.559 97.5051L35.12 60.7251L59.3938 34.6639L63.3094 30.46H57.5645H43.8315H42.7556L42.016 31.2413L21.4471 52.9698L21.3921 53.028L21.3408 53.0896L19.7202 55.0376Z" stroke="white" strokeWidth="2" id="fourth" className="thePaths"/>
              </svg>
              <svg width="65" height="99" viewBox="0 0 65 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M62.0786 84.4175V81.9175H59.5786H19.9644V5.13281V2.63281H17.4644H5.68457H3.18457V5.13281V94V96.5H5.68457H59.5786H62.0786V94V84.4175Z" stroke="white" strokeWidth="2" id="fifth" className="thePaths"/>
              </svg>
              <svg width="22" height="99" viewBox="0 0 22 99" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.8594 96.5H19.3594V94V5.13281V2.63281H16.8594H5.14062H2.64062V5.13281V94V96.5H5.14062H16.8594Z" stroke="white" strokeWidth="2" id="sixth" className="thePaths"/>
              </svg>
              <br/>
              <svg width="129" height="128" viewBox="0 0 129 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M94.375 59V40.25H104.732C103.227 48.04 101.484 55.8524 99.8554 61.2816L99.1259 63.7133L101.568 64.4053L109.068 66.5303L111.346 67.1756L112.115 64.9367C115.05 56.3846 118.08 42.5993 120.448 31.1306L120.918 28.8586L118.687 28.2212L112.562 26.4712L111.941 26.294L111.313 26.439L109.965 26.75H80.013C81.3512 20.7311 82.5037 14.4711 83.4714 8.12699L83.8491 5.65109L81.3725 5.27791L72.2475 3.90291L69.708 3.52025L69.3938 6.0691C67.6857 19.9236 64.8354 33.1439 60.375 43.8096V37.375V34.875H57.875H40.25V30.375H59.875H62.375V27.875V19.875V17.375H59.875H40.25V6.375V3.875H37.75H29H26.5V6.375V17.375H6.875H4.375V19.875V27.875V30.375H6.875H26.5V34.875H9.375H6.875V37.375V80.75V83.25H9.375H26.5V87.875H5H2.5V90.375V98.75V101.25H5H26.5V120.375V122.875H29H37.75H40.25V120.375V101.25H61.625H62.662C59.0758 104.8 54.7947 108.061 49.6933 110.797L46.9247 112.282L48.9936 114.646C50.5997 116.482 53.0108 120.085 54.1063 121.911L55.3583 123.998L57.4781 122.803C74.3177 113.306 83.1847 98.2422 87.2115 86.7843C90.9119 98.242 98.766 113.721 113.705 122.764L115.781 124.02L117.099 121.983C118.482 119.846 121.02 116.112 122.514 114.387L124.473 112.128L121.902 110.601C110.195 103.648 103.278 93.1322 99.2928 83.0787C95.2978 73.0003 94.3162 63.546 94.3748 59.0325L94.375 59.0162V59ZM61.625 87.875H40.25V83.25H57.875H60.375V80.75V63.8249C60.9221 64.2445 61.4147 64.6333 61.8133 64.9522L63.9607 66.6701L65.4668 64.3691C69.862 57.6542 73.4032 49.416 76.3358 40.25H80.375V59V59.0156L80.3752 59.0312C80.4684 66.4895 77.7642 85.1783 64.125 99.7458V98.75V90.375V87.875H61.625ZM47.625 53.125H39.5V46.875H47.625V53.125ZM47.625 71.25H39.5V64.75H47.625V71.25ZM19.25 64.75H27.25V71.25H19.25V64.75ZM19.25 46.875H27.25V53.125H19.25V46.875Z" stroke="white" strokeWidth="2" id="seventh" className="thePaths"/>
              </svg>
              <svg width="123" height="125" viewBox="0 0 123 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0.625" y="0.5" width="122" height="124" fill="black">
                      <rect fill="white" x="0.625" y="0.5" width="122" height="124"/>
                      <path d="M104.875 31.875H95.625V23.375H104.875V31.875ZM104.875 46.625H95.625V38H104.875V46.625ZM66.375 38H75.125V46.625H66.375V38ZM66.375 23.375H75.125V31.875H66.375V23.375ZM89.875 38V46.625H81V38H89.875ZM81 31.875V23.375H89.875V31.875H81ZM112.125 16.875H96.875V5.5H89.875V16.875H81V5.5H74V16.875H59.25V53.125H112.125V16.875ZM116.5 59.25H55.5V66.125H116.5V59.25ZM69.25 78.25H101.875V89H69.25V78.25ZM109.875 95.125V72.125H61.625V95.125H109.875ZM19.875 16.875H40.25V25H26.375V44.375H19.875V16.875ZM40.25 44.375H32.25V30.875H40.25V44.375ZM39.375 66.125V75H20.625V66.125H39.375ZM20.625 90.875V81.5H39.375V90.875H20.625ZM55 62.25V44.375H47.625V9.75H12.75V44.375H5.625V62.25H12.75V119.5H20.625V97.625H39.375V110.75C39.375 112 39 112.25 37.875 112.25C36.625 112.375 32.75 112.375 28.25 112.25C29.375 114.25 30.5 117.375 30.75 119.5C37.375 119.5 41.375 119.375 44.125 118.125C46.75 116.875 47.5 114.75 47.5 110.875V59.375H12.75V51H47.625V62.25H55ZM97.625 110.25C99.625 106.625 101.875 101.875 104.125 97.5L96.375 95.25C95.125 99.5 92.625 105.875 90.5 109.875L91.625 110.25H78L79.75 109.625C79 105.75 76.75 99.875 74.25 95.375L67.5 97.625C69.625 101.5 71.375 106.5 72.25 110.25H53.25V117.25H117.375V110.25H97.625Z"/>
                  </mask>
                  <path d="M104.875 31.875H95.625V23.375H104.875V31.875ZM104.875 46.625H95.625V38H104.875V46.625ZM66.375 38H75.125V46.625H66.375V38ZM66.375 23.375H75.125V31.875H66.375V23.375ZM89.875 38V46.625H81V38H89.875ZM81 31.875V23.375H89.875V31.875H81ZM112.125 16.875H96.875V5.5H89.875V16.875H81V5.5H74V16.875H59.25V53.125H112.125V16.875ZM116.5 59.25H55.5V66.125H116.5V59.25ZM69.25 78.25H101.875V89H69.25V78.25ZM109.875 95.125V72.125H61.625V95.125H109.875ZM19.875 16.875H40.25V25H26.375V44.375H19.875V16.875ZM40.25 44.375H32.25V30.875H40.25V44.375ZM39.375 66.125V75H20.625V66.125H39.375ZM20.625 90.875V81.5H39.375V90.875H20.625ZM55 62.25V44.375H47.625V9.75H12.75V44.375H5.625V62.25H12.75V119.5H20.625V97.625H39.375V110.75C39.375 112 39 112.25 37.875 112.25C36.625 112.375 32.75 112.375 28.25 112.25C29.375 114.25 30.5 117.375 30.75 119.5C37.375 119.5 41.375 119.375 44.125 118.125C46.75 116.875 47.5 114.75 47.5 110.875V59.375H12.75V51H47.625V62.25H55ZM97.625 110.25C99.625 106.625 101.875 101.875 104.125 97.5L96.375 95.25C95.125 99.5 92.625 105.875 90.5 109.875L91.625 110.25H78L79.75 109.625C79 105.75 76.75 99.875 74.25 95.375L67.5 97.625C69.625 101.5 71.375 106.5 72.25 110.25H53.25V117.25H117.375V110.25H97.625Z" stroke="white" strokeWidth="4" id="eighth" className="thePaths" mask="url(#path-1-outside-1)"/>
              </svg>
              <svg width="122" height="101" viewBox="0 0 122 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M116.875 84.25H68.25V17.5H110.625H113.125V15V5.5V3H110.625H11.875H9.375V5.5V15V17.5H11.875H53.125V84.25H5.375H2.875V86.75V96V98.5H5.375H116.875H119.375V96V86.75V84.25H116.875Z" stroke="white" strokeWidth="2" id="ninth" className="thePaths"/>
              </svg>
              <svg width="128" height="124" viewBox="0 0 128 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M118 9.625V7.125H115.5H60.375H57.875V9.625V13.4798L56.082 11.5489L49.582 4.54887L48.3586 3.23133L46.7202 3.97195C37.9265 7.94716 21.8446 11.5331 7.85331 13.7817L4.40768 14.3354L6.04053 17.4197C7.10619 19.4326 8.25686 22.2255 8.69146 24.0726L9.21995 26.3187L11.5011 25.9715C16.328 25.237 21.6333 24.4089 26.875 23.4145V36.875H9H6.5V39.375V48.125V50.625H9H24.545C19.5094 63.7869 11.7534 77.8147 4.76676 85.5776L3.4677 87.021L4.54487 88.6367C6.06107 90.911 8.12358 94.2764 8.87829 96.5406L10.2948 100.79L13.168 97.3536C17.8788 91.719 22.6523 83.6216 26.875 74.8336V118.25V120.75H29.375H38.375H40.875V118.25V71.9077C43.7228 75.6266 46.3324 79.3081 47.5794 81.4903L49.4506 84.7649L51.7378 81.7661L57.3628 74.3911L58.5981 72.7716L57.2615 71.2346C57.0311 70.9696 56.7336 70.6375 56.38 70.25H80.375V80.125H58.625H56.125V82.625V90.75V93.25H58.625H80.375V104.375H50.125H47.625V106.875V115.25V117.75H50.125H122.5H125V115.25V106.875V104.375H122.5H94.625V93.25H117H119.5V90.75V82.625V80.125H117H94.625V70.25H119.75H122.25V67.75V59.5V57H119.75H55.75H53.25V59.5V66.9105C49.3763 62.8496 43.9657 57.3746 40.875 54.6114V50.625H54H56.5V48.125V39.375V36.875H54H40.875V20.216C46.1393 18.894 51.0682 17.2841 55.2115 15.5577L57.875 14.4479V48.625V51.125H60.375H115.5H118V48.625V9.625ZM103.875 38.125H71.375V20.25H103.875V38.125Z" stroke="white" strokeWidth="2" id="tenth" className="thePaths"/>
              </svg>
              <svg width="120" height="126" viewBox="0 0 120 126" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.875 116.75V110.875H44.5H47V108.375V71V68.5H44.5H16.875V61.875H43.25H45.75V59.375V25.125V23.875H48.25H74.25V34.25H52.875H50.375V36.75V101.875V104.375H52.875H61.375H63.875V101.875V47.75H74.25V120.375V122.875H76.75H85.5H88V120.375V93.593L88.4655 94.6404C89.4394 96.8318 90.5561 100.039 90.7637 102.012L90.9994 104.25H93.25C96.6137 104.25 99.4708 104.22 101.864 104.006C104.253 103.791 106.375 103.38 108.204 102.505C110.203 101.549 111.55 100.081 112.331 98.1611C113.063 96.3625 113.25 94.2839 113.25 92.125V36.75V34.25H110.75H88V23.875H114.5H117V21.375V13V10.5H114.5H48.25H45.75V13V21.375V22.625H43.25H28.6708C30.5441 18.1799 32.5173 13.1793 34.1055 8.71252L35.1223 5.85287L32.1209 5.40265L22.1209 3.90266L19.7759 3.55092L19.3007 5.87401C18.3049 10.7425 16.4961 17.2552 14.6171 22.625H5.875H3.375V25.125V116.75V119.25H5.875H14.375H16.875V116.75ZM90.8194 91.126L88 91.0476V47.75H99.625V91.2495C97.9347 91.2471 94.5982 91.2309 90.8194 91.126ZM33.625 81.5V97.875H16.875V81.5H33.625ZM32.5 35.625V49H16.875V35.625H32.5Z" stroke="white" strokeWidth="2" id="eleventh" className="thePaths" ref={lastWord}/>
              </svg>
          </div>

        </div>

        <div className="quote bg-color-white lean-bg--top lean-bg--no-margin mt-5">
            <div className="container">
                <div className="row">
                    <div className="offset-sm-3 mt-md-3 col-sm-6 col-sm-push-3">
                        <div className="quote__content">
                            <div className="quote__icon">
                                <i className="icon-quote-right"></i>
                            </div>
                            <p className="quote__text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quia voluptas atque illo et vel cum? Mollitia quo quos iusto!
                            </p>
                            <div className="quote__name">
                                <span>Somebody</span>
                                    - from  somewhere
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <div className="skill bg-color-white  lean-bg--bottom">
         <div className="container">
                <h2 className="subtitle u-text-center ">{t('Skill')}</h2>
                <div className="skill-group">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="skill-card position-relative">
                                <div className="skill-card__inner">
                                      <h4 className="skill-card__title">{t('Web')}</h4>
                                      <p className="skill-card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad numquam aliquid, reiciendis hic impedit iure nesciunt dolorum ex atque dolorem.</p>
                                </div>
                                <div className="skill-card__icon">
                                    <img src="https://i.imgur.com/XgdEeuu.png" alt="html" title="html"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="skill-card position-relative" data-wow-delay="0.5s">
                                <div className="skill-card__inner">
                                      <h4 className="skill-card__title">{t('AI')}</h4>
                                      <p className="skill-card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad numquam aliquid, reiciendis hic impedit iure nesciunt dolorum ex atque dolorem.</p>
                                </div>
                                <div className="skill-card__icon">
                                    <img src="https://i.imgur.com/t8s6d1R.png" alt="html" title="html"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="skill-card position-relative" data-wow-delay="1s">
                                <div className="skill-card__inner">
                                      <h4 className="skill-card__title">{t('Game')}</h4>
                                      <p className="skill-card__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad numquam aliquid, reiciendis hic impedit iure nesciunt dolorum ex atque dolorem.</p>
                                </div>
                                <div className="skill-card__icon">
                                    <img src="https://i.imgur.com/NkddNlL.jpg" alt="html" title="html"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
         </div>

        <br/>

    </main>
  )
}

export default HomeComponents
