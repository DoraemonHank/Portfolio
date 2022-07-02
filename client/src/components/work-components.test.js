/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */

// import { render, screen, fireEvent } from '@testing-library/react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import WorkHoc from './workHoc-components'
import WrappedWorkComponents from './wrappedWork-components'

Enzyme.configure({ adapter: new Adapter() })
const MyWorkComponents = WorkHoc(WrappedWorkComponents, jest.fn())
let wrapper
beforeEach(() => {
  wrapper = shallow(<MyWorkComponents/>)
})

describe('work', () => {
  test('test get post',
    () => {
      const instance = wrapper.instance()

      jest.spyOn(instance, 'getPost')
      instance.componentDidMount()
      expect(instance.getPost).toHaveBeenCalledTimes(1)
    })
})
