import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import NavComponent from './components/nav-components'
import HomeComponent from './components/home-components'
import WorkComponents from './components/work-components'
import Aboutcomponents from './components/about-components'
import ArticleComponents from './components/article-components'
import { useTranslation } from 'react-i18next'

const App = () => {
  const [type, setType] = useState('')
  const [article, setArticle] = useState({})
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  useEffect(() => {
    setType(JSON.parse(localStorage.getItem('Type')))
  }, [])
  return (
        <div>

            <NavComponent t={t} changeLanguage={changeLanguage} setType={setType}/>

            <Switch>
                <Route path='/' exact>
                    <HomeComponent t={t}/>
                </Route>

                <Route path='/about' exact>
                    <Aboutcomponents t={t}/>
                </Route>

                <Route path={'/' + type} exact>
                    <WorkComponents t={t} setArticle={setArticle}/>
                </Route>

                <Route path='/post' exact>
                    <ArticleComponents article={article}/>
                </Route>
            </Switch>

        </div>
  )
}

export default App
