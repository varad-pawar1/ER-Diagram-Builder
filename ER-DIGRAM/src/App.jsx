import './App.css'
import EditorCompo from './pComponent/editorCompo/EditorCompo'
import Sidebar from './vcomponents/Sidebar'
import WhiteSpace from "./vcomponents/WhiteSpace"
function App() {

  return (
    <>
    <div className='mainEditer'>
      <EditorCompo/>
      <Sidebar />
      <WhiteSpace />
    </div>

    </>

  )
}

export default App
