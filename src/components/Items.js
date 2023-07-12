import React from 'react'
import {Link} from 'react-router-dom'
const Items =(props)=> {
    let {title,description,imgUrl,newsUrl,author,date}=props;
    return (
      <div className='my-3'>
            <div className="card">
            <img src={!imgUrl?"https://morungexpress.com/uploads/2023/07/14022946_1688815190_pexels-energepiccom-313690.jpg":imgUrl} className="card-img-top" alt=""/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
              <Link to={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</Link>
            </div>
          </div>
      </div>
    )
}

export default Items