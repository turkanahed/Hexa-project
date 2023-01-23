import styled from "styled-components";

export const CollaborationContainer = styled.div`
    padding: 100px 150px;
    ul{
        padding: 0;
        display: flex;
        justify-content: flex-start;
        column-gap: 10px;
        color: #6c757d;
        margin-bottom: 30px;
        text-transform: uppercase;
        font-size: 15px;
        #line{
            border-top: 2px solid  #e74208;
            width: 40px;
            height: 0;
            position: relative;
            top: 12px;
        }
    }
    h1{
        font-size: 50px;
        line-height: 1.2;
    }
    p{
        font-weight: 400;
        font-size: 20px;
        line-height: 1.8;
        color: #6c757d;
        margin-top: 30px;
        width: 400px;
    }
    img{
        width: 100%;
        height: 700px;
    }
`