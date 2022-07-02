/* eslint-disable no-undef */
import WorkService from '../services/work.service'

test('test axios', () => {
  return WorkService.getPost('web').then(data => {
    expect(data).toBeTruthy()
  })
    .catch(e => {
      expect(e).toBeFalsy()
    })
})
