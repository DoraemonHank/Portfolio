import React from 'react'
import WorkHoc from './workHoc-components'
import WrappedWorkComponents from './wrappedWork-components'

const WorkComponents = ({ t, setArticle }) => {
  const MyWorkComponents = WorkHoc(WrappedWorkComponents, t, setArticle)
  return (
    <div>
        <MyWorkComponents/>
    </div>
  )
}

export default WorkComponents
