'use client';

import { Drawer, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from "react";

import styles from "./Header.module.css";

const Header = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = () => setOpen(!open);
     
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 1); 
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <IconButton onClick={toggleDrawer} sx={{ zIndex: 2}}>
                <MenuIcon sx={{ fontSize: 48 }} />
            </IconButton>
            <Drawer
                open={open}
                onClose={toggleDrawer}
            >
            </Drawer>
        </header>
    );
}

export default Header;

