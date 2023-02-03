import Header from './components/Header'
import Footer from './components/Footer';
import Restaurantlist from './components/Restaurantlist';
import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'; 
import ViewRestaurant from './components/ViewRestaurant';


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
       <Header/>
       {/* <h4>Restaurant Application</h4> */}
       <Routes>
        <Route path='/' element={ <Restaurantlist/>}/>
        <Route path='/viewrestaurant/:id' element={ <ViewRestaurant/>}/>
       </Routes>
      
       <Footer/>
      </header>
      </Router>
    </div>
  );
}

export default App;
