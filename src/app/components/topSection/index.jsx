import React from 'react'
//components
import Navbar from '../navbar'
//Style
import './style.css'

function TopSection() {
    return (
        <div className="px-5 pt-3">
        <div className="iframeParent">
        <Navbar/>
        <button type="button" class="btn download-btn"><img src='/download-icon.png' alt='download'/>Download</button>
        <div className="text">Seamless Integration, Superior<br />Results: <strong>Revolutionizing<br />Communication!</strong></div>
        <iframe
          width="100%"
          height="100%"
          src='/video.mp4'
          frameBorder="0"
          display="block"
          allow="accelerometer; loop; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className='mobiles'><img src='/mobiles.png' alt='mobiles'/></div>
        <div className='downloads d-flex flex-column align-items-center justify-content-center'><h1 className="mb-0">5M+</h1><p>Downloads</p></div>
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

export default TopSection
