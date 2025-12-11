import { type JSX } from 'react'
import { Route, Routes } from 'react-router'
import './index.css'
import Homepage from './pages/Homepage'

export default function App(): JSX.Element {

  return (
    <Routes>
      <Route path = '/' element={<Homepage />}>
      </Route>
    </Routes>
  )
}


