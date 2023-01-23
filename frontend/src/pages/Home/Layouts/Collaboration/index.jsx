import React from 'react'
import { CollaborationContainer } from './style'
import collaboration from "./../../../../assets/images/collaboration.jpg"


const Collaboration = () => {
    return (
        <CollaborationContainer>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={collaboration} alt="build" />
                    </div>
                    <div className="col-6 ps-5" style={{ marginTop: "100px" }}>
                        <ul>
                            <li>02</li>
                            <li id='line'></li>
                            <li>Collaboration</li>
                        </ul>
                        <h1>Open for <br /> Collaboration</h1>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    </div>
                </div>
            </div>
        </CollaborationContainer>
    )
}

export default Collaboration