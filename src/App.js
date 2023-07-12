import './App.css';
import React,{useState}from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
const App=()=> {
  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
    return (
      <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
      <Navbar />
      <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='general' />}/>   
            <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='general' />}/>
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='health' />}/>
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='business' />}/>
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='technology' />}/>
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='sports' />}/>
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='science' />}/>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={6}  country='in' category='entertainment' />}/>
      </Routes>
      </Router>
    )
}

export default App;