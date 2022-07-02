import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../../style/myNav.scss'

const NavComponent = (props) => {
  const { t, changeLanguage, setType } = props
  const [isActive, setIsActive] = useState('')
  const [mainListDiv, setmainListDiv] = useState('')
  const [navSize, setnavSize] = useState('10rem')
  const [navColor, setnavColor] = useState('transparent')

  const onHandleBuger = () => {
    console.log('Clicked menu')
    setIsActive(isActive === 'active' ? '' : 'active')
    setmainListDiv(mainListDiv === 'show_list' ? '' : 'show_list')
  }

  const onHandleSelect = (e) => {
    console.log(e.target.value)
    changeLanguage(e.target.value)
  }

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor('#252734') : setnavColor('transparent')
    window.scrollY > 10 ? setnavSize('5rem') : setnavSize('10rem')
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  const onLinkWeb = () => {
    setType('web')
    localStorage.setItem('Type', JSON.stringify('web'))
  }

  return (
        <div>
            <nav style={{
              backgroundColor: navColor,
              height: navSize,
              transition: 'all 1s'
            }} className="my_nav">
                <div className="my_container">
                    <div className="my_logo">
                        <Link className="fs-4" to="#">Your Logo</Link>
                        <select onChange={onHandleSelect} data-testid="test-select"
                        className=" ms-3"
                        aria-label="Default select example">
                            <option value="zh-tw" >中文</option>
                            <option value="en">English</option>
                        </select>
                    </div>
                    <div id="mainListDiv" className={'main_list ' + mainListDiv} >
                        <ul className="navlinks">
                            <li>
                                <Link className="fs-5 active" to="/">
                                    {t('HomePage')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/">
                                    {t('About')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/web" onClick={onLinkWeb}>
                                    {t('Web')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/">
                                    {t('AI')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/">
                                    {t('Contact')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <span onClick={onHandleBuger} className={'mt-4 pt-3 navTrigger ' + isActive}>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>

            {/* <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md">
                <div className="container-md">
                    <a class="navbar-brand" href="#">Navbar w/ text</a>
                    <div className="d-none d-md-block">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">
                                    首頁
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/">
                                    關於我
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/">
                                    網頁開發
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " to="/">
                                    深度學習
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    聯絡我
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <span onClick={onHandleBuger} className={"navTrigger " + isActive}>
                        <i></i>
                        <i></i>
                        <i></i>
                     </span>
                </div>
            </nav>

            <div className={"main_list show_list" + mainListDiv}>
                <ul className="d-flex flex-column align-items-end">
                    <li >
                        <Link className="active" to="/">
                            首頁
                        </Link>
                    </li>

                    <li >
                        <Link to="/">
                            關於我
                        </Link>
                    </li>

                    <li >
                        <Link  to="/">
                            網頁開發
                        </Link>
                    </li>

                    <li >
                        <Link  to="/">
                            深度學習
                        </Link>
                    </li>

                    <li >
                        <Link  to="/">
                            聯絡我
                        </Link>
                    </li>
                </ul>
            </div> */}
        </div>
  )
}

export default NavComponent
