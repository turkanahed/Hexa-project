import React from 'react'
import { BuildContainer } from './style'
import build from "./../../../../assets/images/build.jpg"
const Build = () => {
  return (
    <BuildContainer>
      <div className="container">
        <div className="row">
          <div className="col-6" style={{marginTop:"100px"}}>
            <ul>
              <li>01</li>
              <li id='line'></li>
              <li>INFRASTRUCTURE</li>
            </ul>
            <h1>Let's Build <br /> Together</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
          </div>
          <div className="col-6">
            <img src={build} alt="build" />
          </div>
        </div>
      </div>
    </BuildContainer>
  )
}

export default Build