import React, { useState, useEffect, useRef } from "react";

import './Header.css';

import { useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';

const Header = () => {
    const navigate = useNavigate();

    const items = [
        {label: 'Início', command: () => { navigate('/'); }},
        {label: 'Sobre', command: () => { navigate('/sobre'); }},
        {label: 'Produtos', command: () => { navigate('/produtos'); }},
        {label: 'História', command: () => { navigate('/historia'); }},
        {label: 'Contato', command: () => { navigate('/contato'); }},
    ];

    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);
    const userMenuRef = useRef(null);

    const handleClickOutside = (event) => {
        if (userMenuRef.current && !userMenuRef.current.contains(event.target)) { setIsUserMenuVisible(false);}
    };

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            localStorage.setItem('userRole', user.role);
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => { document.removeEventListener('mousedown', handleClickOutside); };
    }, []);

    const start = (
        <div className="flex align-items-center ml-3 mr-5 logo">
            <img alt="logo" src="/images/COFANOR_Logo.png" height="53"/>
        </div>
    );

    return (
        <>
        <Menubar model={items} start={start} className="header"/>
        </>
    );
}; 

export default Header;