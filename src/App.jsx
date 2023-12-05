import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LayOut from './components/layOut'
import {Route, Routes} from 'react-router-dom'
import PostPage from './components/postPage'
import PostDetailsPage from './components/postDetailsPage'
import Home from './components/home'
import CommentDetails from './components/commentDetails'
import NavBar from './components/navbar'
import Users from './components/users'
import UserDetailsPage from './components/userDetailsPage'
import Post from './components/post'
import Album from './components/album'
import AlbumDetailsPage from './components/albumDetailsPage'
import Login from './components/login'
import LogOut from './components/loggedOut'
import Register from './components/register'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LayOut>
      <Routes>
          <Route path ='/' element = {<Home/>} />
          <Route path ='/posts' element = {<PostPage/>}/>
          <Route path ='/posts/:postId' element = {<PostDetailsPage/>}/>
          <Route path ='/posts/:postId/:commentId' element = {<CommentDetails/>}/> 
          <Route path = '/users' element = {<Users/>}/>
          <Route path = '/users/:userId' element = {<UserDetailsPage/>}/>
          <Route path = '/albums' element = {<Album/>}/>
          <Route path = '/albums/:albumId' element = {<AlbumDetailsPage/>}/>
          <Route path = '/post' element = {<Post/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/logout' element = {<LogOut/>}/>
          <Route path = '/register' element = {<Register/>}/>
       </Routes>
      </LayOut>
    </>
  )
}

export default App
