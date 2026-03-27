import React from 'react';
import currency from '../../assets/currency.png';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return (
        <div className="container  mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <img src={logo} alt="" />
            </div>
            <div className="navbar-end flex gap-12">
                <ul className='flex justify-center items-center gap-12'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Fixture</a></li>
                    <li><a href="">Teams</a></li>
                    <li><a href="">Schedules</a></li>
                </ul>
                <button className="flex justify-between items-center gap-2 btn text-xl font-bold">
                    0 Coins
                    <img src={currency} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;