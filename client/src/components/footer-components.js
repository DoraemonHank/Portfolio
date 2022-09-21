import React from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

const FooterComponents = ({ t, setType }) => {
  const history = useHistory()
  const onLinkToWeb = () => {
    setType('web')
    localStorage.setItem('Type', JSON.stringify('web'))
    history.push('/web')
  }

  const onLinkToDl = () => {
    setType('dl')
    localStorage.setItem('Type', JSON.stringify('dl'))
    history.push('/dl')
  }

  const onLinkToGame = () => {
    setType('game')
    localStorage.setItem('Type', JSON.stringify('game'))
    history.push('/game')
  }
  return (
    <div>
        <footer className="cointer bg-dark">
            <div className="d-flex justify-content-center flex-column flex-sm-row">
                <ul>
                    <li className='text-center'>
                        <h4 className='text-light'>{t('About')}</h4>
                    </li>
                    <li className='text-center'>
                        <Link to='/' className="generic-anchor" >{t('HomePage')}</Link>
                    </li>
                    <li className='text-center'>
                        <Link to='/about' className="generic-anchor" >{t('About')}</Link>
                    </li>
                </ul>

                <ul>
                    <li className='text-center'>
                        <h4 className='text-light'>{t('WorkList')}</h4>
                    </li>
                    <li className='text-center'>
                        <Link className="generic-anchor" onClick={onLinkToWeb}>{t('Web')}</Link>
                    </li>
                    <li className='text-center'>
                        <Link className="generic-anchor" onClick={onLinkToDl}>{t('AI')}</Link>
                    </li>
                    <li className='text-center'>
                        <Link className="generic-anchor" onClick={onLinkToGame}>{t('Game')}</Link>
                    </li>
                </ul>

                <ul>
                    <li className='text-center'>
                        <h4 className='text-light'>{t('Contact')}</h4>
                    </li>
                    <li className='text-center'>
                        <a className="generic-anchor" href="mailTo:tsj10226@gmail.com">tsj10226@gmail.com</a>
                    </li>
                    <li className='text-center'>
                        <a className="generic-anchor" href="tel:0972216868">0972216868</a>
                    </li>
                </ul>
            </div>
            <section className="footer-social-section flex-rw">
                <span className="footer-social-overlap footer-social-connect fs-1">
                CONNECT <span className="footer-social-small">with</span> ME
                </span>
                <span className="footer-social-overlap d-flex">
                    <a target='_blank' href="https://github.com/DoraemonHank?tab=repositories" className="generic-anchor" rel="noreferrer">
                        <i className="icon icon-github-circled"></i>
                    </a>
                    <a target='_blank' href="https://www.linkedin.com/in/po-han-li-4358a1a2/" className="generic-anchor" rel="noreferrer">
                        <i className="icon icon-linkedin"></i>
                    </a>
                    <a target='_blank' href="https://www.youtube.com/watch?v=pMGbPJ9ojcA" className="generic-anchor" rel="noreferrer">
                        <i className="icon icon-youtube"></i>
                    </a>
                </span>
            </section>
            <section className="footer-bottom-section flex-rw">
                <div className="footer-bottom-wrapper">
                <p className="copyright">Hank Li © 2022 All Rights Reserved.</p>
                </div>
            </section>
        </footer>
    </div>
  )
}

export default FooterComponents
