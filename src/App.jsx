import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './pages/header/Header';
import NotFound from './pages/NotFound';

function App() {

  const [user, setUser] = useState(null)



  function signUp(e) {
    e.preventDefault()
    const firstName = e.target.firstName.value
    const lastName = e.target.lastName.value
    const email = e.target.email.value
    const photo = e.target.photo.value
    const password = e.target.password.value
    const phone_number = e.target.phone.value

    fetch('http://localhost:4000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, photo: photo, firstName: firstName, lastName: lastName, phone_number: phone_number })
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

  if (user === null)
    return (
      <div className='App'>
        <h1>Hello there, stranger!</h1>
        <div>
          <form onSubmit={signUp}>
            <label>
              Name
              <input
                className="firstname"
                placeholder="First name"
                name='firstName'
                type="text"
              />
            </label>
            <label>
              Last Name
              <input
                className="lastname"
                placeholder="Last name"
                name='lastName'
                type="text"
              />
            </label>
            <label>
              Profile Pic
              <input
                className="profilepic"
                placeholder="Profile pic URL (optional)"
                name='photo'
                type="text"
              />
            </label>

            <label>
              Pjone
              <input
                className="phone"
                placeholder="phone"
                name='phone'
                type="number"
              />
            </label>

            <label>
              Email
              <input
                className="email"
                placeholder="Email"
                name='email'
                type="email"
              />
            </label>
            <label>
              Password
              <input
                className="password"
                placeholder="Password"
                name='password'
                type="password"
              />
            </label>
            <input type='submit' className="submit" value={'SAVE'} />
          </form>

          <form onSubmit={login}>
            <h2>Already have an account? Sign in!</h2>
            <input type='email' required placeholder='email' name='email' />
            <input
              type='password'
              required
              placeholder='password'
              name='password'
            />
            <button>SIGN IN</button>
          </form>
        </div>
      </div>
    )

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1>Hello there, {user.name}!</h1>
      <button onClick={signOut}>SIGN OUT</button>

      <ul>
        {/* {user.photos.map(photo => ( */}
        <li>
          <h2>img</h2>
          <img src='' alt='' />
        </li>
        {/* ))} */}
      </ul>
    </div>
  )
}

export default App
