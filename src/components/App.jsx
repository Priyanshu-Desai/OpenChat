import React from 'react'
import Header from './Header'
import Post from './Post'
import InputArea from './InputArea'

function App(){
  return(
    <div>
    <Header/>
    <Post name='user123' title='hello there' content='my favourite colour is green: #00ff00'/>
    <InputArea/>
    </div>
  )
}

export default App
