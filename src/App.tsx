import { Route, Routes } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage'
import { RenderProjects } from './sections/projects'
import { RenderLab } from './sections/lab'

export default function App() {

  return (
    <Routes>
      <Route path = '/' element={<Homepage />}>
        <Route index element={<RenderProjects />} />
        <Route path = '/lab' element={<RenderLab />} />
      </Route>
    </Routes>
  )
}


