import { useState } from 'react';
import style from "./SearchBar.module.css"
 
function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  function handleChange(event) {
    setId(event.target.value);
  }

  return (
    <div className={style.search}>
      <input
        className={style.bar}
        type='search'
        placeholder="id.."
        value={id}
        onChange={handleChange}
      />
      <button className={style.boton} onClick={() => onSearch(id)}>Agregar</button> 
    </div>
  );
}

export default SearchBar;


