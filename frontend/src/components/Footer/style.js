import styled from "styled-components";

export const FooterTop = styled.div`
    padding: 60px 0;
    h3{
        font-size: 12px;
        margin-bottom: 30px;
        text-transform: uppercase;
        letter-spacing: .1em;
        font-weight: bold;
        color: white;
    }
    p{
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
        font-size: 13px;
        line-height: 1.8;
    }
    .sosial-links{
        ul{
            margin-top: 50px;
            display: flex;
            column-gap: 5px;
            padding: 0;
            li{
                text-align: center;
                background-color: transparent;
                font-size: 12px;
                a{
                    padding: 5px 10px;
                    color: #e74208;
                    top: 4px;
                    position: relative;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.5);
                    &:hover{
                        color: black;
                        background-color: white;
                        transition: .3s ease;
                    }
                }
            }
        }
    }
    .info{
        ul{
            padding: 0;
            font-size: 13px;
            li{
                color: rgba(255, 255, 255, 0.5);
                line-height: 1.5;
                margin-bottom: 15px;
                span{
                    color: white;
                }
            }
        }
    }
    .link{
        ul{
            padding: 0;
            li{
                color: #e74208;
                line-height: 1.5;
                margin-bottom: 15px;
                font-size: 13px;
                cursor: pointer;
                &:hover{
                    color: white;
                    transition: .3s ease;
                }
            }
        }
    }
`

export const FooterBottom = styled.div`
    padding: 20px 0 40px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 13px;
    text-align: center;
    a{
        color: #e74208;
        &:hover{
            color: white;
            transition: .3s ease;
        }
    }
`