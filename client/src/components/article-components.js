import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

const ArticleComponents = ({ article }) => {
  const history = useHistory()
  useEffect(() => {
    window.scroll(0, 0)
    console.log(JSON.parse(localStorage.getItem('Type')))
    if (JSON.stringify(article) === '{}') {
      history.push('/' + JSON.parse(localStorage.getItem('Type')))
    }
  }, [article])
  return (

    <div>
        <section className="portfolio"></section>
        <div className="container">
          <h4 className="text-center">{article.title}</h4>
          <div className="d-flex justify-content-center">
            <div className="" dangerouslySetInnerHTML={{ __html: article.content }}></div>
          </div>

        </div>

    </div>
  )
}

export default ArticleComponents
