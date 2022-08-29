import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './component/fichers/Header/Header';
import Footer from './component/fichers/Footer/Footer';
import Router from './Router/Router';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
