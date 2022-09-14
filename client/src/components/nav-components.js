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

  const onLinkDl = () => {
    setType('dl')
    localStorage.setItem('Type', JSON.stringify('dl'))
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
                        <ul>
                            <li>
                                <Link className="fs-5 active" to="/">
                                    {t('HomePage')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/about">
                                    {t('About')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/web" onClick={onLinkWeb}>
                                    {t('Web')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/dl" onClick={onLinkDl}>
                                    {t('AI')}
                                </Link>
                            </li>

                            <li >
                                <Link className="fs-5" to="/contact">
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
        </div>
  )
}

export default NavComponent
