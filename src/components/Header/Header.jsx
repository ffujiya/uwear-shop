import React from 'react';
import Categories from '../Categories/Categories';
import HeaderWidgets from '../HeaderWidgets/HeaderWidgets';
import './Header.scss';

export default class Header extends React.Component {

    render() {
        return (
            <div className='header' >
                <div className='container header__container'>
                    <div className="header__categories">
                        <Categories />
                    </div>
                    <div className='header__logo'>
                       uwear
                    </div>
                    <HeaderWidgets />
                </div>
            </div>
        )
    }s
}