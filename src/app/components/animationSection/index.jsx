import React from 'react'
import './style.css'

function AnimationSection() {
    return (
        <div className="animation">
            <div className="row">
                <div className="col-3">
                    <div className='h-100'>
                        <div className="row h-100">
                            <div className="col-12 mb-0">
                                <div className="img-background animate-top">
                                    <img src="/top-left-img.png" alt="call-demo" />
                                </div>
                            </div>
                            <div className="col-12 mb-2">
                                <img src="/middle-left-img.png" alt="message-demo" className="animate-top h-100"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3 mb-3">
                            Text
                        </div>
                        <div className="col-9 mb-3">
                            <img src="/audio-img.png" alt="audio-demo" className="animate-top"/>
                        </div>
                        <div className="col-12">
                            <div className="mid-section animate-right">
                                <img src="/character.png" alt="character"/>
                                <div className="revolution">
                                    <strong>Revolutionizing Communication!</strong>
                                    <p>Comera is been created with so many useful and
                                        fun Features for you ...! Lorem Ipsum has been the
                                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 mb-3">
                    <div className="right-section text-align-center animate-top">
                        <div className="row">
                            <div className="col-12">
                                <img src="/animation-right.png" alt="right-im" className="animate-top"/>
                            </div>
                            <div className="col-12">
                                <h2 className="px-3">Free Audio and Video Calls</h2>
                                <p className="px-2">Share Multimedia without Compromising on Quality Group Your Friends & Chat Away</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 animate-bottom">
                    <img src='/call-record.png' alt='call'/>
                </div>
                <div className="col-6 animate-bottom">
                    <div className='contact-sharing p-3'>
                        <div className='row'>
                                <div className='col-8'>
                                    <strong>
                                        Contact Sharing
                                    </strong>
                                    <p className='m-0'>Comera is been created with so many useful and fun Features for you ...! Lorem Ipsum has been the industry's standard dummy text ever  </p>
                                </div>
                                <div className='col-4'>
                                    <img src='/sharing.png' alt='call' />
                                </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 animate-bottom">
                    <img src='/connected.png' alt='call'/>
                </div>
            </div>
        </div>
    )
}

export default AnimationSection
