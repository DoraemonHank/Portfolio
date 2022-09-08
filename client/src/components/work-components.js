import React from 'react'
import WorkHoc from './workHoc-components'
import WrappedWorkComponents from './wrappedWork-components'

const WorkComponents = ({ articleLang, t, setArticle }) => {
  const MyWorkComponents = WorkHoc(WrappedWorkComponents, articleLang, t, setArticle)
  return (
    <div>
        <MyWorkComponents/>
    </div>
  )
}

export default WorkComponents
