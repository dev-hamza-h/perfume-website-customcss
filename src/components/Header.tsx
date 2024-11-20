"use client"

import { useState } from 'react';
import Link from 'next/link';
import '../styles/Header.css';

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            {/* LOGO CONTENT */}
            <div className="logo-content">
                <h2 className="logo-text">The Perfume</h2>
                <span className="logo-icon">🍃</span>
            </div>

            {/* Centered LINK MENU for Desktop */}
            <nav className="nav-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/product" className="nav-link">Product</Link>
                <Link href="/about" className="nav-link">About</Link>
                <Link href="/contact" className="nav-link">Contact</Link>
            </nav>

            {/* MENU BUTTON for Mobile */}
            <div className="menu-button" onClick={toggleMenu}>
                ☰
            </div>

            {/* Mobile MENU CONTENT */}
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                {/* Close button */}
                <div className="close-button" onClick={toggleMenu}>×</div>

                {/* Logo inside Mobile Menu */}
                <div className="logo-content mobile-logo">
                    <h2 className="logo-text">The Perfume</h2>
                    <span className="logo-icon">🍃</span>
                </div>

                {/* Mobile Links */}
                <Link href="/" className="mobile-link" onClick={toggleMenu}>Home</Link>
                <Link href="/product" className="mobile-link" onClick={toggleMenu}>Product</Link>
                <Link href="/about" className="mobile-link" onClick={toggleMenu}>About</Link>
                <Link href="/contact" className="mobile-link" onClick={toggleMenu}>Contact</Link>
            </div>
        </header>
    );
}