import axios from "axios"
import React from "react"
import AddUser from "./components/AddUser"
import Header from "./components/Header"
import Users from "./components/Users"

const App = () => {
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then(res => {
      setUsers(res.data.data)
    })
  }, [])

  const addUser = React.useCallback(
    user => {
      const id = users.length + 1
      setUsers([...users, { id, ...user }])
    },
    [users],
  )

  const deleteUser = React.useCallback(
    id => {
      setUsers(users.filter(el => el.id !== id))
    },
    [users],
  )

  const editUser = React.useCallback(user => {
    setUsers(prevUsers => {
      const updatedUsers = prevUsers.map(u => (u.id === user.id ? user : u))
      return updatedUsers
    })
  }, [])

  return (
    <>
      <Header title="Список пользователей" />
      <main>
        <Users users={users} onEdit={editUser} onDelete={deleteUser} />
      </main>
      <aside>
        <AddUser onAdd={addUser} />
      </aside>
    </>
  )
}

export default App
