import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './service/userSlice'
const Dashboard = () => {
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  const nav = useNavigate()
  const handleLogout = (e) => {
    dispatch(logout(null))
    nav('/login')
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{user?.auth.name}</p>
      <button onClick={handleLogout} className='btn btn-danger'>logout</button>
    </div>
  )
}

export default Dashboard