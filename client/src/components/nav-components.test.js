/* eslint-disable no-empty-function */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { render, screen, fireEvent } from '@testing-library/react'
// import user from '@testing-library/user-event'
import NavComponent from './nav-components'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const mockTranslation = jest.fn().mockImplementation((str) => str)
const mockChangeLanguage = jest.fn().mockImplementation(() => new Promise(() => {}))
jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: mockTranslation,
      i18n: {
        changeLanguage: mockChangeLanguage
      }
    }
  },
  initReactI18next: {
    type: '3rdParty',
    init: jest.fn()
  }
}))

describe('Nav bar', () => {
  test('i18n test',
    () => {
      const { t, i18n } = useTranslation()
      render(
        <BrowserRouter >
           <NavComponent t={t} changeLanguage={i18n.changeLanguage}/>
        </BrowserRouter>
      )
      expect(t).toHaveBeenCalled()
      expect(t.mock.calls.length).toBe(5)

      const select = screen.getByTestId('test-select')
      expect(select).toBeInTheDocument()
      // user.type(select, 'en')
      fireEvent.change(select, { target: { value: 'en' } })
      expect(select.value).toBe('en')
      expect(i18n.changeLanguage).toHaveBeenCalled()
      expect(i18n.changeLanguage).toHaveBeenCalledTimes(1)
    })
})
