import React, { useEffect, useState } from 'react'
import WorkService from '../services/work.service'

const ArticleComponents = ({ t, article, setArticle }) => {

  const [switchLng, setSwitchLng] = useState(t('lng'))

  const formatContent = (htmlContent) => {
    return htmlContent.replace(/<img /g, '<img style="max-width:100%; height:auto;" ');
  }

  useEffect(() => {
    console.log(t('lng'), switchLng)
    window.scroll(0, 0)
    let id = ''
    if (switchLng === t('lng')) {
      id = JSON.parse(localStorage.getItem('post_id'))
    }else {
      id = JSON.parse(localStorage.getItem('post_ln_id'))
    }

    WorkService.getPostFromId(id)
      .then(data => {
        console.log(data.data)
        const dataLang = data.data[0].lang === 'tw' ? "zh-tw" : data.data[0].lang
        if (JSON.parse(localStorage.getItem('lng')) === dataLang) {
          setArticle(data.data[0])
        } else {
          WorkService.getPostFromId(data.data[0].ln_id)
          .then(data => {
              setArticle(data.data[0])
            }
          )
          .catch(err => {
            console.log(err)
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }, [t])

  return (
    <div>
      {
        article &&  article.content &&
        <div>
          <section className="portfolio"></section>
          <div className="container">
            <h4 className="text-center">{article.title}</h4>
            <div className="d-flex justify-content-center">
              <div  className="container">
                <div className="content" style={{ wordBreak: 'keep-all', wordWrap: 'break-word' }} dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}></div>
              </div>
            </div>
          </div>
        </div>
      }
      <br/>
      <br/>
    </div>

  )
}

export default ArticleComponents
