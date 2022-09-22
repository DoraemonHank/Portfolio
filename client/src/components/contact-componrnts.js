import React, { useState, useEffect } from 'react'
import ContactService from '../services/contact.service'
import SweetAlert2 from 'react-sweetalert2'
import { WOW } from 'wowjs'
import '../../style/animate.scss'

const ContactComponrnts = ({ t }) => {
  useEffect(() => {
    window.scroll(0, 0)
  })

  const [swalProps, setSwalProps] = useState({})

  const [name, setName] = useState('')
  const [tel, setTel] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const [isHaveData, setIsHaveData] = useState(true)
  const [isTelVail, setIsTelVail] = useState(true)
  const [isEmailVail, setIsEmailVail] = useState(true)
  const [isSubmit, setIsSubmit] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const isEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    if (!regex.test(email)) {
      return false
    } else {
      return true
    }
  }

  useEffect(() => {
    window.scroll(0, 0)
    console.log(isSuccess, swalProps)
    // console.log(isHaveData, isTelVail, isEmailVail, isSubmit)
    if (isHaveData === true && isTelVail === true && isEmailVail === true && isSubmit === true) {
      ContactService.post(name, tel, email, msg)
        .then((data) => {
          console.log(data.data.msg)
          setIsSuccess(true)
          setName('')
          setTel('')
          setEmail('')
          setMsg('')
        })
        .catch(e => {
          console.log(e.response.data)
          setIsSuccess(false)
        })
      setIsSubmit(false)
    }
    if (isSuccess) {
      setSwalProps({
        show: true,
        title: '提交成功',
        icon: 'success'
      })
      setIsSuccess(false)
    }
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: -200,
      mobile: true,
      live: false
    })
    wow.init()
  }, [isHaveData, isTelVail, isEmailVail, isSubmit, isSuccess])

  const onHandleSubmit = (e) => {
    e.preventDefault()

    setIsHaveData(true)
    setIsTelVail(true)
    setIsEmailVail(true)

    if (name === '' || tel === '' || email === '' || msg === '') {
      setIsHaveData(false)
    }

    if (tel !== '') {
      if (isNaN(Number(tel.toString()))) {
        setIsTelVail(false)
      }
    }

    if (email !== '') {
      if (!isEmail(email)) {
        setIsEmailVail(false)
      }
    }

    setIsSubmit(true)
  }

  return (
    <div>
        <section className="portfolio"></section>
        <div className="contact">
               <div className="container">
                    <h2 className="subtitle u-text-center wow bounceInUp">{t('Contact')}</h2>
                    <form className="form wow fadeInUp">
                        {
                            isHaveData === false &&
                            <p className='text-danger'>{t('TextError')}</p>
                        }
                        <label className="text-dark" htmlFor="">{t('Name')}:</label>
                        <input value={name} onChange={(e) => { setName(e.target.value) }} style={!isHaveData && name === '' ? { border: '1px solid red' } : { }} type="text"/>
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="text-dark" htmlFor="">{t('電話')}:</label>
                                <input value={tel} onChange={(e) => { setTel(e.target.value) }} style={((!isHaveData && tel === '') || !isTelVail) ? { border: '1px solid red' } : { }} type="tel"/>
                                {
                                    !isTelVail &&
                                    <p className='text-danger fs-6'>{t('PhoneError')}</p>
                                }
                            </div>
                            <div className="col-sm-6">
                                <label className="text-dark" htmlFor="">{t('Email')}:</label>
                                <input value={email} onChange={(e) => { setEmail(e.target.value) }} style={((!isHaveData && email === '') || !isEmailVail) ? { border: '1px solid red' } : { }} type="text"/>
                                {
                                    !isEmailVail &&
                                    <p className='text-danger fs-6'>{t('EmailError')}</p>
                                }
                            </div>
                        </div>
                        <label className="text-dark" htmlFor="">{t('Message')}:</label>
                        <textarea value={msg} onChange={(e) => { setMsg(e.target.value) }} name="" id="" cols="30" rows="10" style={!isHaveData && msg === '' ? { border: '1px solid red' } : { }}></textarea>
                        <div className="btn-group btn-group--center form__btn-group">
                            <button onClick={onHandleSubmit} type="submit" className="my-btn btn--primary btn--md">{t('Submit')}</button>
                            <SweetAlert2 {...swalProps}
                            didClose={() => {
                              // run when swal is closed...
                              setSwalProps({})
                            }}
                            />
                        </div>
                    </form>

                    <div className="divide-text text-dark">or</div>
                    <div className="info wow fadeInUp">
                        <div className="info__email">
                            <a href="mailTo:tsj10226@gmail.com">tsj10226@gmail.com</a>
                        </div>
                        <div className="info__phone wow fadeInUp">
                            <a className="text-dark" target='_blank' href="http://line.me/ti/p/Ncup0cRzqG" rel="noreferrer" >
                              <p>LINE</p>
                              <img src='https://i.imgur.com/Na02g1Z.png'></img>
                            </a>
                        </div>
                        <section className="social-bar info__social-bar">
                            <a href="#" className="icon-btn wow bounceIn" data-wow-delay="0.3s">
                                <i className="icon icon-github-circled"></i>
                            </a>
                            <a href="#" className="icon-btn wow bounceIn" data-wow-delay="0.6s">
                                <i className="icon icon-linkedin"></i>
                            </a>
                            <a href="#" className="icon-btn wow bounceIn" data-wow-delay="0.9s">
                                <i className="icon icon-youtube"></i>
                            </a>
                        </section>
                    </div>
               </div>
            </div>
    </div>
  )
}

export default ContactComponrnts
