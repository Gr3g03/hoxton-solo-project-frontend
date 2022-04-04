import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login';
import Header from './pages/header/Header';
import Home from './pages/main/home';
import NotFound from './pages/NotFound';
import Footer from './pages/footer/Footer';
import Neadrby from './pages/Nearby/Nearby';
import NearbyAppartamnet from './pages/Nearby/NearbyAppartament';
import Profile from './profile/profile';
import Details from './pages/main/details';

function App() {

  const [user, setUser] = useState(null)
  const [rooms, setRooms] = useState([])


  function signUp(e) {
    e.preventDefault()
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const photo = e.target.photo.value
    const password = e.target.password.value
    const phone_number = e.target.phone.value
    const dateCreated = Date()

    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, photo: photo, firstName: firstName, lastName: lastName, phone_number: phone_number, dateCreated: dateCreated })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert('Oops, something went wrong.')
        } else {
          // we managed to create our user!
          localStorage.setItem('token', data.token)
          setUser(data.user)
        }
      })
  }

  function login(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error)
        } else {
          localStorage.setItem('token', data.token)
          setUser(data.user)
        }
      })
  }

  function signOut() {
    localStorage.removeItem('token')
    setUser(null)
  }

  useEffect(() => {
    if (localStorage.token) {
      fetch('http://localhost:4000/validate', {
        headers: {
          Authorization: localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.error) {
            console.log('Invalid token!')
          } else {
            setUser(data)
          }
        })
    }
  }, [])

  console.log(user)
  if (user === null)

    return (
      <Login login={login} signUp={signUp} />

    )

  return (
    <div className='App'>
      <Header signOut={signOut} />
      <Routes>
        <Route index element={<Navigate replace to={'/home'} />} />
        <Route path='/home' element={<Home user={user} />} />
        <Route path='/home/:id' element={<Details user={user} rooms={rooms} setUser={setUser} />} />
        <Route path='/profile' element={<Profile user={user} setUser={setUser} />} />
        <Route path='/nearby' element={<Neadrby rooms={rooms} setRooms={setRooms} />} />
        <Route path='nearby/:id' element={<NearbyAppartamnet user={user} rooms={rooms} setUser={setUser} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
