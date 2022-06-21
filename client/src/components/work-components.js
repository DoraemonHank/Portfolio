import React from 'react'
import WorkHoc from './workHoc-components'
import WrappedWorkComponents from './wrappedWork-components'
// import ImageService from '../services/work.service'

const WorkComponents = ({ t }) => {
  const _WorkComponents = WorkHoc(WrappedWorkComponents, t)
  return (
    <div>
        <_WorkComponents/>
    </div>
  )
}

export default WorkComponents

// const WorkComponents = WorkHoc(WrappedWorkComponents)
// export default WorkComponents
