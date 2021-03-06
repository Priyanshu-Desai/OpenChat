import React from 'react'
import SendIcon from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';

function InputArea(props){
  const [postContent, setPostContent] = React.useState({
    name: '',
    title: '',
    content: ''
  })

  function handleChange(event){
    const {name, value} = event.target

    setPostContent(prevnote => {
      return {
        ...prevnote,
        [name]: value
      }
    } )
  }

  function addPost(event){
    props.onAdd(postContent)
    setPostContent({
      name: '',
      title: '',
      content: ''
    })
      event.preventDefault()
  }

  return(
    <div className='post-inputs'>
      <input type='text' name='name' placeholder='your name' className='input' onChange={handleChange} value={postContent.name}/>
      <input type='text' name='title' placeholder='post title' className='input' onChange={handleChange} value={postContent.title}/>
      <textarea name='content' rows='10' cols='250' placeholder='your post content' className='input' onChange={handleChange} value={postContent.content}/>
      <Button className='send' variant='contained' color='primary' disableElevation onClick={addPost}><SendIcon/></Button>
    </div>
  )
}

export default InputArea
