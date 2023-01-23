import styled from "styled-components";

export const LeftSide = styled.div`
    display: flex;
    align-items: center;
    column-gap: 70px;
    text-transform: uppercase;
    h3{
        margin: 0;
        letter-spacing: .2em;
        font-weight: 400;
        font-size: 22px;
        a{
            color: white;
        }
    }
    ul{
        display: flex;
        margin: 0;
        padding: 0;
        gap: 20px;
    }
    li{
        display: flex;
        align-items: center;
        a{
            font-size: 12px;
            text-decoration: none;
            color: rgba(255, 255, 255, 0.5);
            letter-spacing: .2em;

            &.active{
                color: white;
            }
        }
    }
`

export const RightSide = styled.div`
    display: flex;
    column-gap: 20px;
    align-items: center;
    a{
        padding: 10px 16px;
        color: white;
        border-radius: 3px;
        border: 1px solid #e74208;
        background-color: #e74208;
        font-size: 13px;
        text-transform: uppercase;
        letter-spacing: .2em;
    }
`