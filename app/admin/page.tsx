'use client'

import React from 'react'
import AdminLogin from '../../components/AdminLogin'
import AdminPanel from '../../components/AdminPanel'

const AdminPage: React.FC = () => {
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {!loggedIn ? (
        <AdminLogin onLogin={() => setLoggedIn(true)} />
      ) : (
        <AdminPanel />
      )}
    </div>
  )
}

export default AdminPage
