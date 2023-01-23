import React from 'react'
import { InfoContainer } from './style'
import { BsBell, BsHeart } from "react-icons/bs";
import { AiOutlineThunderbolt } from "react-icons/ai";

const Info = () => {
  return (
    <InfoContainer>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <span><BsBell /></span>
            <h3>Modern Design</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className="col-4">
            <span><BsHeart /></span>
            <h3>Build With Love</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
          <div className="col-4">
            <span><AiOutlineThunderbolt /></span>
            <h3>Fast Loading</h3>
            <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>
        </div>
      </div>
    </InfoContainer>
  )
}

export default Info