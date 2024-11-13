import './App.css'
import { NavLink , Link  , Routes , Route } from 'react-router-dom'
import EditorCompo from './pComponent/editorCompo/EditorCompo'


function App() {

  return (
    <>


    <Routes>
      <Route path='/editor' element={<EditorCompo/>} />
    </Routes>


    </>
  )
}

export default App
