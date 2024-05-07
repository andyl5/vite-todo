import './App.css'
import { CurrentUserProvider } from './components/auth/CurrentUserContext'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import PrivateRoute from './components/auth/PrivateRoute'
import PublicRoute from './components/auth/PublicRoute'

function App() {
  return (
    <div>
      <CurrentUserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
            <Route path='/login' element={<PublicRoute><LoginPage/></PublicRoute>}/>
            <Route path='/home' element={<PrivateRoute><HomePage/></PrivateRoute>}/>
          </Routes>
        </BrowserRouter>
      </CurrentUserProvider>
    </div>
  )
}

export default App;