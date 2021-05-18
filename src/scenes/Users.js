import React, { useEffect, useState } from 'react'
import { Button } from 'react-materialize'

function Users() {
  const [allUsers, setAllUsers] = useState()
  const [newUser, setNewUser] = useState({})

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => setAllUsers(data))
      .catch((err) => console.log('This is an error', err))
  }, [])

  function createUser() {
    fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
  }

  return (
    <div className="container">
      <ul class="collection with-header">
        <h1>Users</h1>
        {allUsers && allUsers.map((user) => {
          return (
            <li class="collection-item">
              <div>
                {user.email} / {user.firstName} {user.lastName}
                <a href="#!" class="secondary-content">
                  <i class="material-icons">send</i>
                </a>
              </div>
            </li>
          )
        })}
      </ul>
      <label>Email</label>
      <input onChange={e => setNewUser({ ...newUser, email: e.target.value })} />
      <label>Password</label>
      <input onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
      <Button onClick={() => createUser()}>Create User</Button>
    </div>
  )
}

export default Users