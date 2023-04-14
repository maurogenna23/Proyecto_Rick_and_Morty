import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Detail from './components/Detail';
import About from './components/About';
import Form from './components/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites'

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = '75353ae1d085.e7c3ee3c2a8f1bb7951f';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const email = 'gennamauro@gmail.com';
   const password = 'hola2mau';
   const navigate = useNavigate();
   const {pathname} = useLocation();

   

 useEffect(() => {
  !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
      .then(({ data }) => {
        if (data.name) {
          
          const isDuplicate = characters.some((character) => character.id === data.id);
          if (!isDuplicate) {
            setCharacters([...characters, data]); 
          } else {
            window.alert('¡Este personaje ya está en la lista!');
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
  }
  
  
 
   function onClose(id) {
    const newCharacters = characters.filter((character) => character.id !== id);
    setCharacters(newCharacters);
  }

  const login = (userData) => {
    if (userData.password === password && userData.email === email) {
       setAccess(true);
       navigate("/home");
    }else{
      alert("Credenciales Incorrectas")
    }
 }
  
  
 
   return (
     <div className='App'>
       {pathname !== "/" && <Nav onSearch={onSearch} />}
       <Routes>
         <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
         <Route path="/about" element={<About/>} />
         <Route path='/favorites' element={<Favorites/>}/>
         <Route path="/detail/:id" element={<Detail />} />
         <Route path="/" element={<Form login={login} />} />
      </Routes>
     </div>
   );
 }
 
 export default App;
 