import React from 'react'
import WorkHoc from './workHoc-components'
import WrappedWorkComponents from './wrappedWork-components'

const WorkComponents = ({ t }) => {
  const MyWorkComponents = WorkHoc(WrappedWorkComponents, t)
  return (
    <div>
        <MyWorkComponents/>
    </div>
  )
}

export default WorkComponents
