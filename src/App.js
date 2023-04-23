import Cards from './Client/components/Card/Cards';
import Nav from './Client/components/SearchBar/Nav';
import React, { useState } from 'react';
import axios from 'axios';
import { Route, useLocation } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Detail from './Client/components/Detail/Detail';
import About from './Client/components/About/About';
import Form from './Client/components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './Client/components/Favorites/Favorites'

const URL_BASE = "https://rickandmortyapi.com/api/character/";
const KEY = '75353ae1d085.e7c3ee3c2a8f1bb7951f';

function App() {
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();
   const {pathname} = useLocation();

   

 useEffect(() => {
  !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    fetch(`${URL_BASE}${id}?key=${KEY}`)
      .then(response => response.json())
      .then(data => {
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

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
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
 