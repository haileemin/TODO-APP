import { Routes, Route, Link, Navigate } from 'react-router-dom';
import TodoApp from './components/Create/TodoApp'
import LoginSignup from './components/LoginSignup/LoginSignup';
import React, { useState } from 'react'

const App = () => {
  const [userLogin, setUserLogin] = useState(null);

  return (
    <div className='TodoApp'>
      <Routes>
        <Route path='/' element={<LoginSignup setUserLogin={setUserLogin} />} />
        <Route
          path='/TodoApp'
          element={userLogin ? <TodoApp /> : <Navigate to="/" />}
        />
        {/* <Route path='/LoginSigup' element={<LoginSignup />} /> */}
      </Routes>
    </div>
  )
}

export default App