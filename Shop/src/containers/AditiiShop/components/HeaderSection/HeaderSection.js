import React from 'react';
import './HeaderSection.scss';
import SearchInputBlock from '../../../../components/SearchInputBlock/SearchInputBlock';
import Logo from '../../../../components/Logo/Logo';
import Basket from '../../../../components/Basket/Basket';

const HeaderSection = () => {
    return(
        <header className="header-section">
            <div className="content-container header-section__container">
                    <Logo />
                    <SearchInputBlock />
                    <Basket />
            </div>
        </header>
    );
}

export default HeaderSection;