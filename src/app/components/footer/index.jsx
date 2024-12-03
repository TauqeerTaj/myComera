import React from 'react'
import './style.css'

function Footer() {
    return (
        <footer>
            <iframe
                width="100%"
                height="100%"
                src='/footerVideo.mp4'
                frameBorder="0"
                display="block"
                allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
                <div className='footer-content'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='row'>
                                <div className='col-12 text-start'>
                                    <img src='footer-logo.png' alt='logo' />
                                    <p>Lorem Ipsum has been the industry's when an unknown printer took has cap of 1998. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took has cap of 1998.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-2 text-start text-white'>
                            <div className='footer-heading'>
                                <strong>Home</strong>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Security</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">FAQs</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Cookies Setting</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-2 text-start text-white'>
                            <div className='footer-heading'>
                                <strong>Legal</strong>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <a className="nav-link" href="#">Privacy Policy</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Terms of Use</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-3 text-start text-white'>
                            <div className='footer-heading'>
                                <strong>Address</strong>
                            </div>
                            <p>Tristar Logistic Warehouse – 01, SE45_04 Plot 29 Masdar, Khalifa City A, Abu Dhabi, UAE, P.O. Box 130666.</p>
                        </div>
                        <div className='col-12'>
                            <div className='follow'>
                            <p>Follow Us On</p>
                            <div>
                            <img src='/insta.png' alt='instagram' />
                            <img src='/fb.png' alt='facebook'/>
                            <img src='/twitter.png' alt='twitter' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
