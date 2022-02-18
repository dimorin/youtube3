import React, { useRef, memo } from 'react';
import styles from './search_header.module.css'

const SearchHeader = memo(({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        onSearch(inputRef.current.value);
    }
    const onKeyUp = (event) => {
        if(event.key === 'Enter'){
            handleSearch();
        }
    }
    const onClick = (event) => {
        handleSearch();
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtubbe</h1>
            </div>
            
            <input ref={inputRef} className={styles.input} type="search" placeholder="search..." onKeyUp={onKeyUp} />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg} src="/images/search.png" alt="search" />
            </button>
            
        </header>
    )
});

export default SearchHeader;