import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-container">
            <div className="footer-column">
                <strong>Get to Know Us</strong>
                <ul>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                </ul>
            </div>

            <div className="footer-column">
                <strong>Make Money with Us</strong>
                <ul>
                    <li>Sell products on Amazon</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                </ul>
            </div>

            <div className="footer-column">
                <strong>Amazon Payment Products</strong>
                <ul>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                </ul>
            </div>

            <div className="footer-column">
                <strong>Let Us Help You</strong>
                <ul>
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Help</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Footer
