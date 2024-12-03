import React from 'react'
import Links from './links'
import './style.css'

function DownloadSection() {
    return (
        <div className='downSection'>
            <div className='row'>
                <div className='col-12 text-center animate-top'>
                        <span>
                            Join a fun family of
                        </span>
                        <h2 className='fw-bold'>COMERA</h2>
                </div>
                <div className='col-4 animate-left'>
                    <div className='mb-3 text-end'>
                        Lorem Ipsum has been the<br/>industry's when an unknown<br/>printer took has cap of 1998.
                    </div>
                    <div className='mb-4 text-end'>
                        <img src='/top-indicator.png' alt='indicator'/>
                    </div>
                    <div className='text-end'>
                        <img src='/layer.png' alt='layer'/>
                    </div>
                </div>
                <div className='col-4 animate-top'>
                    <div className='parent'>
                        <div className='shape-section'>
                        <iframe
                            width="100%"
                            height="100%"
                            src='/globeVideo.mp4'
                            frameBorder="0"
                            display="block"
                            allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            ></iframe>
                        </div>
                        <img src='/iphone.png' alt='iphone'/>
                    </div>
                </div>
                <div className='col-4 mt-auto animate-right'>
                    <ul className="navbar-nav list-group-horizontal mb-4">
                        <li className="nav-item">
                            <img src='/avatar.png' alt='avatar' />
                        </li>
                        <li className="nav-item">
                            <img src='/avatar.png' alt='avatar' />
                        </li>
                    </ul>
                    <div className='my-1'>
                        <img src='down-indicator.png' alt='indicator' />
                    </div>
                    <div >
                    Lorem Ipsum has been the industry's<br/>standard dummy text ever since the<br/>1500s, when an unknown printer took<br/>has cap of 1998.
                    </div>
                </div>
                <div className='col-12'>
                    <Links/>
                </div>
            </div>
            <svg
                style={{ visibility: "hidden", position: "absolute" }}
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
            >
                <defs>
                <filter id="go">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                    <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="goo"
                    />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                </filter>
                </defs>
            </svg>
        </div>
    )
}

export default DownloadSection
