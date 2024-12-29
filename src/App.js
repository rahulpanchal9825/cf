import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Login from "./component/Login"
import AddProduct from "./component/AddProduct"
import { BrowserRouter as Router, Routes} from 'react-router-dom';
function App() {
  const [data, setData] = useState([])
   useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch("https://cakeback-rahuls-projects-44dfd132.vercel.app/api/list-product-all");
           if (!response.ok) {
             throw new Error(`Error: ${response.status}`);
           }
           const result = await response.json();
           setData(result);
         } catch (err) {
           // setError(err.message);
         } finally {
           // setLoading(false);
         }
       };
   
       fetchData();
     }, []);
     console.log("dfdisuhfioh",data?.allProducts)
   return (
       <>
           <Router>
           <Navbar />
               <Routes>
                   <Route path="/" element={<Home />} />
                   <Route path="/:category" element={<Home />} />
                   <Route path="/login" element={<Login />} />
                   <Route path="/add" element={<AddProduct />} />
               </Routes>
           </Router>
       </>
   );
}

export default App;
