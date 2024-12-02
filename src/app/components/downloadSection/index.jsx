import React from 'react'
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
                <div className='col-3 animate-left'>
                    <div className='mb-3'>
                        Lorem Ipsum has been the industry's when an unknown printer took has cap of 1998.
                    </div>
                    <div className='mb-4 text-end'>
                        <img src='/top-indicator.png' alt='indicator'/>
                    </div>
                    <div className='text-center'>
                        <img src='/layer.png' alt='layer'/>
                    </div>
                </div>
                <div className='col-6 animate-top'>
                    <div className='parent'>
                        <div className='shape-section'>
                        </div>
                    </div>
                </div>
                <div className='col-3 mt-auto animate-right'>
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
                        Lorem Ipsum has been the industry's when an unknown printer took has cap of 1998.
                    </div>
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
                <filter id="goo">
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
