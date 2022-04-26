import React, { Component } from 'react'
import AuthorList from './author/AuthorList'
import Signup from './user/Signup'
import Signin from './user/Signin'
import HomeLoggedIn from './landingPage/HomeLoggedIn'
import HomeLoggedOut from './landingPage/HomeLoggedOut'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import Axios from "axios"
import jwt_decode from "jwt-decode"
import { Alert, Nav, NavItem } from "react-bootstrap" 
import HobbyList from './hobby/HobbyList'
import EventCreateForm from './event/EventCreateForm' 
import HobbyDetail from './hobby/HobbyDetail'



export default class App extends Component {
  
  state = {
    isAuth: false,
    user: [],
    message: null,
    hobbies: [], 
    event:[]
  }

  componentDidMount(){
    let token = localStorage.getItem("token")

    Axios.get('/hobbyindex')
    .then(response => {
      console.log(response.data.hobbiesList)
      // console.log("myhobbies",hobbies)
      this.setState({
        hobbies: response.data.hobbiesList.slice()
      })

    })
    .catch(error => console.log(error))

    if(token !== null){
      let user = jwt_decode(token)
      if(user){
        this.setState({
          isAuth: true,
          user: user
        })
      }
      else{
        localStorage.removeItem("token")
        this.setState({
          isAuth: false
        })
      }
    }
  }

  // showHobbyDetail = (id) => { 
  //   Axios.get('/hobbydetail') 
  //   .then(response => {
  //     console.log(response.data.hobbyDetail)
  //     // console.log("myhobbies",hobbies)
  //     this.setState({
  //       hobbies: response.data.hobbyDetail.slice()
  //     })
  //   }
  //   )}
  // }


  registerHandler = (user) => {
    Axios.post("auth/signup", user)
    .then(response =>{
      console.log('Signup response',response.data.token)
      
      if(response.data.token !== null){
        localStorage.setItem("token", response.data.token)
        let user = jwt_decode(response.data.token)

        this.setState({
          isAuth: true,
          user: user,
          message: "User logged in successfully"
        })
      }
    })
    .catch(error => {
      console.log(error)
      this.setState({
        isAuth: false,
      })
    })

  }

  loginHandler = (cred) => {
    Axios.post("auth/signin", cred)
    .then(response => {
      console.log("logged in",response.data.token)

      if(response.data.token !== null){
        localStorage.setItem("token", response.data.token)
        let user = jwt_decode(response.data.token)

        this.setState({
          isAuth: true,
          user: user,
          message: "User logged in successfully"
        })
      }
    })
    .catch(error =>{
       console.log(error)

       this.setState({
         isAuth: false,
       })
      
    })
  }

  logoutHandler = (e) => {
    e.preventDefault()
    localStorage.removeItem("token")
    this.setState({
      isAuth: false,
      user: null,
      message: "User logged out successfully"
    })
  }
  
  createEventHandler = (e)=>{
    let userId =this.state.user.user.id
    Axios.post(`/eventcreateform/${userId}`, e)
    .then(response=>{
      console.log(response)
      this.setState({event:response.data})

    })
  .catch(error =>{
    console.log(error)
  })
}

  render() {
    console.log("Main app",this.state.hobbies)
    const message = this.state.message ? (
      <Alert variant='danger'>{this.state.message}</Alert>
    ) : null
    const {isAuth} = this.state
    console.log("the user is", this.state.user)
    return (
      <div>
      {/* {message} */}
            { isAuth ? (
              <Nav  as="ul" className="justify-content-center nav">
              
              <Nav.Item as="li">
                <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link className='text-white'>{this.state.user ? this.state.user.user.name : null}</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/logout" onClick={this.logoutHandler} className='text-white'>Logout</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
              <Nav.Link href="/hobbylist" className='text-white'>Hobbies</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link href="/eventcreateform" className='text-white'>New Event</Nav.Link>
            </Nav.Item>
              
              </Nav>
            ):
            (
              <Nav  as="ul" className="justify-content-center nav">
              <Nav.Item as="li">
                <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/signin" className='text-white'>Signin</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link href="/signup" className='text-white'>Signup</Nav.Link>
              </Nav.Item>
              </Nav>
            )}
          

          <Router>
          <div>
            <Routes>
              <Route path='/' element={ isAuth ? <HomeLoggedIn /> : <HomeLoggedOut />}></Route>
              <Route path='/signup' element={<Signup register={this.registerHandler} hobbies={this.state.hobbies} />}></Route>
              <Route path='/signin' element={<Signin login={this.loginHandler} />}></Route>

              <Route path='/hobbylist' element={<HobbyList hobbies={this.state.hobbies} />}> </Route> 

              <Route path='/hobbydetail/:id' element={<HobbyDetail/>}> </Route> 

              {/* {this.state.hobbies.map(hobby => <Route path="/hobby/:_id" element={<HobbyDetail />} /> ) }  */}
             
              <Route path='/eventcreateform' element={<EventCreateForm hobbies={this.state.hobbies} user={this.state.user.user} eventy={this.createEventHandler} />}></Route>
  
              

            
            </Routes>
          </div>
        </Router>
      </div>
    )
  }
}