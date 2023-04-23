import React from "react";
import SearchBar from './SearchBar';
import styles from './SearchBar.module.css'
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <nav className={styles.nav}>
        <SearchBar onSearch={onSearch} />
        <button className={styles.about}>
          <Link to='/about' className={styles.link}> 
          ABOUT 
          </Link>
        </button>
        <button className={styles.home}>
          <Link to='/home' className={styles.link}> 
          HOME 
          </Link>
        </button>
        <button className={styles.favorites}>
          <Link to='/favorites' className={styles.link}> 
          FAVORITES 
          </Link>
        </button>
      </nav>
    </div>
  );
};

export default Nav;

