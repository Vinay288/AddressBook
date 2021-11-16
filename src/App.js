import logo from './logo.svg';
import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom'  
import AddressBookForm from '../src/components/addressbook-form/addressbook-form'
import Home from '../src/components/home/home'
function App() {
  return (
    <BrowserRouter>  
    <Routes>
    <Route path="/" element={<AddressBookForm />} ></Route> 
    <Route path="/home" element={<Home />} ></Route>  
    <Route path="/form/:id" element={<AddressBookForm />} ></Route> 
    </Routes>
</BrowserRouter> 
  );
}

export default App;
