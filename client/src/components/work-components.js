import React, { useEffect } from 'react'
import WorkHoc from './workHoc-components'
// import ImageService from '../services/work.service'

const WrappedWorkComponents = ({ postData }) => {
  useEffect(() => {
    console.log(postData)
  }, [])
  return (

    <div>
        <div className="container">
            <br/>
            <div className="d-flex flex-column">
            {
                postData.map((data) => (
                    // eslint-disable-next-line react/jsx-key
                    <div className="d-flex flex-column align-items-center my-5">
                        <h2 className="text-center">{data.title}</h2>
                        <img src={data.imgUrl} className="w-75 h-75 w-md-50 h-md-50"></img>
                        <p className="fs-5">使用技術 : {data.tag}</p>
                        <div className='d-flex'>
                            <button className="btn btn-outline-primary ">詳細介紹</button>
                            <button className="btn btn-outline-primary ms-5">Demo</button>
                        </div>
                    </div>

                ))
            }
            </div>

        </div>
    </div>
  )
}

const WorkComponents = WorkHoc(WrappedWorkComponents)
export default WorkComponents
