import styled from "styled-components";

export const HeroContainer = styled.div`
    height: 70vh;
    .swiper-slide{
        img{
            filter: brightness(80%);
        }
        .title-content{
            position: absolute;
            h1{
                color: #fff;
                line-height: 1.2;
                font-weight: 300 !important;
                text-transform: uppercase;
                margin-bottom: 30px;
            }
            p{
                line-height: 2;
                max-height: 800px;
                font-size: 18px;
                line-height: 1.5;
                font-weight: 300;
                color: white;
                margin: 0 auto;
                width: 700px;
            }
            button{
                background-color: transparent;
                border: none;
                margin-right: 10px;
                padding-top: 80px;
                font-size:10px;
                    line-height: 1.5;
                    font-weight: 500;
                    letter-spacing: .1rem;
                    text-transform: uppercase;
                a{
                    color: white;
                    border-width: 2px;
                    border: 2px solid #fff;
                    padding: 15px 20px;
                    border-radius: 5px;
                   &:hover{
                    background-color: white;
                    color: black;
                    transition: .3s ease;
                   }
                }
            }
        }
    }
`