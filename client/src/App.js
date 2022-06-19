import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NavComponent from './components/nav-components'
import HomeComponent from './components/home-components'
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
        <div>

            <NavComponent t={t} changeLanguage={changeLanguage}/>

            <Switch>
                <Route path='/' exact>
                    <HomeComponent t={t}/>
                </Route>
            </Switch>

        </div>
  )
}

export default App
