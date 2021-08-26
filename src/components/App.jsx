import React from 'react'
import Header from './Header'
import Post from './Post'
import InputArea from './InputArea'

function App(){
  const [posts, setPosts] = React.useState([])

  function addPost(newPost){
      setPosts(prevPosts => {
        return [...prevPosts, newPost]
      })
      console.log(posts)
  }

  return(
    <div>
    <Header/>
    <Post name='user123' title='hello there' content='my favourite colour is green: #00ff00'/>
    <InputArea onAdd={addPost}/>
    </div>
  )
}

export default App
