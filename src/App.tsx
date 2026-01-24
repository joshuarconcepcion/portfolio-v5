import { type JSX } from 'react'
import { Route, Routes } from 'react-router'
import './index.css'
import Homepage from './pages/Homepage'
import { RenderProjects } from './sections/projects'

export default function App(): JSX.Element {

  return (
    <Routes>
      <Route path = '/' element={<Homepage />}>
        <Route index element={<RenderProjects />} />
      </Route>
    </Routes>
  )
}


