import React from 'react'

function Post(props){
  return(
    <div className='post'>
      <small className='post-text post-author'>by {props.name}</small>
      <h3 className='post-text post-heading'>{props.title}</h3>
      <p className='post-text post-content'>{props.content}</p>
    </div>
  )
}

export default Post
