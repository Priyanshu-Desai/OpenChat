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
    {posts.map((postItem, index) => {
      return (
        <Post key={index} id={index} name={postItem.name} title={postItem.title} content={postItem.content}/>
      )
    })}

    <InputArea onAdd={addPost}/>
    </div>
  )
}

export default App
