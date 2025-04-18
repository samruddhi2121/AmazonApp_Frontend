import './App.css';
import Footer from './View/Footer';
import Home from './View/Home';
import Nav from './View/Nav';
import India from './View/India';
import Sign from './View/Sign';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Panel from './View/Panel';
import TodaysDeals from './View/TodaysDeals';
import Customer from './View/Customer';
import Registry from './View/Registry/Registry';
import Deals from './View/TodaysDeals/Deals';
import Product from './Phase4/Product';
import ProductById from './Phase4/ProductById';
import ProductByType from './Phase4/ProductByType';


function App() {
  return (
    <div className="App">

      <Router>
        <Nav/>
        <Panel/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Sign" element={ <Sign/>} /> 
         <Route path="/DeliverTo" element={<India/>} />
         {/* <Route path="/TodaysDeals" element={<TodaysDeals/>}  /> */}
         <Route path="/CustomerService" element={<Customer/>}/>
         <Route path="/Registry1" element={<Registry/>}/>
         <Route path='/TodaysDeals' element={<Deals/>} />

        
         <Route path='/Product' element={<Product/>} />
         <Route path='/BuyProduct/:id' element={<ProductById/>} />
         <Route path="/BuyProductByType/:type" element={<ProductByType/>} />



             
        </Routes>
        <Footer />
        
      </Router>


    </div>
  );
}

export default App;
