import React from 'react';
import './SearchInputBlock.scss'
import SearchInput from './components/SearchInput/SearchInput';
import SearchButton from './components/SearchButton/SearchButton';

const SearchInputBlock = () => {
    return (
        <div className="search-block">
            <SearchInput />
            <SearchButton />
        </div>
    )
}

export default SearchInputBlock;