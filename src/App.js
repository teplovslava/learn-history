import "./App.css"
import {Routes,Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import VideoLessons from './pages/VideoLessons/VideoLessons'

function App() {
  return (
    
      <div className="container">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/videolessons' element={<VideoLessons/>}/>
        </Routes>
    </div>



  );
}

export default App;
