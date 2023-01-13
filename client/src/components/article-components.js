import React, { useEffect } from 'react'
import WorkService from '../services/work.service'

const ArticleComponents = ({ article, setArticle }) => {
  useEffect(() => {
    window.scroll(0, 0)
    const id = JSON.parse(localStorage.getItem('post_id'))
    WorkService.getPostFromId(id)
      .then(data => {
        console.log(data.data)
        setArticle(data.data[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {
        article &&
        <div>
          <section className="portfolio"></section>
          <div className="container">
            <h4 className="text-center">{article.title}</h4>
            <div className="d-flex justify-content-center">
              <div className="" dangerouslySetInnerHTML={{ __html: article.content }}></div>
            </div>
          </div>
        </div>
      }
    </div>

  )
}

export default ArticleComponents
