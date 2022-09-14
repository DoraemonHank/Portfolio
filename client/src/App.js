import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavComponent from './components/nav-components'
import HomeComponent from './components/home-components'
import WorkComponents from './components/work-components'
import Aboutcomponents from './components/about-components'
import ArticleComponents from './components/article-components'
import ContactComponrnts from './components/contact-componrnts'
import FooterComponents from './components/footer-components'
import { useTranslation } from 'react-i18next'

const App = () => {
  const [type, setType] = useState('')
  const [article, setArticle] = useState({})
  const [articleLang, setArticleLang] = useState('tw')
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setArticleLang(articleLang === 'tw' ? 'en' : 'tw')
  }
  useEffect(() => {
    setType(JSON.parse(localStorage.getItem('Type')))
  }, [])
  return (
        <div>

            <NavComponent t={t} changeLanguage={changeLanguage} setType={setType}/>

            <Switch>
                <Route path='/' exact>
                    <HomeComponent t={t} setType={setType}/>
                </Route>

                <Route path='/about' exact>
                    <Aboutcomponents t={t}/>
                </Route>

                <Route path={'/' + type} exact>
                    <WorkComponents articleLang={articleLang} t={t} setArticle={setArticle}/>
                </Route>

                <Route path='/post' exact>
                    <ArticleComponents article={article}/>
                </Route>

                <Route path='/contact' exact>
                    <ContactComponrnts t={t}/>
                </Route>

                <Route path='*' exact>
                    <section className="portfolio"></section>
                    <h1>404 Page not found!!</h1>
                </Route>
            </Switch>

            <FooterComponents t={t} setType={setType}/>
        </div>
  )
}

export default App
