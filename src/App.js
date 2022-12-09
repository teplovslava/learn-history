import "./App.css"
import {Routes,Route} from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage";
import VideoLessons from './pages/VideoLessons/VideoLessons'
import Lections from "./pages/Lections/Lections";
import Tests from "./pages/Tests/Tests";

function App() {
  return (
    
      <div className="container">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/videolessons' element={<VideoLessons/>}/>
          <Route path='/lections' element={<Lections/>}/>
          <Route path='/tests' element={<Tests/>}/>
        </Routes>
    </div>



  );
}

export default App;
