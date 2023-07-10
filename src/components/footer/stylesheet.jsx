import { styled } from "styled-components";

export const FooterDiv = styled.div`
    padding: 2%;
    margin-top: 2%;
    position: relative;
    .left{
        text-align: center;
        

        .blured{
            position: absolute;
            z-index: 2;

            width: 98%;
            height: 100%;
            background-color: #3b459d66;
            filter: blur(120px);
            margin: 0;

        }
        h3{
            position: relative;
            z-index: 4;
            margin-top: 1%;
            cursor: pointer;
        }
        button{
            position: relative;
            z-index: 4;
            margin-top: 2%;
            padding: 0.5% 2%;
            border: 1px solid white;
            background-color: transparent;
            color: white;
            font-weight: bold;
            border-radius: 40px;
            transition: 0.3s;
            cursor: pointer;
        }

        button:hover{
            background-color: #3b459d;
        }
    }

    @media (max-width:900px){
        .left{
            h3{
                margin-top: 2%;
                font-weight: normal;
            }
            button{
                margin-top: 3%;
                font-weight: normal;
                font-size: 2.5vw;
                width: 25%;
            }
        }
        
    }
    @media (max-width:520px){
        margin-top: 20%;
        .left{
            h3{
                margin-top: 3%;
            }
            button{
                margin-top: 4%;
                font-size: 4vw;
                width: 35%;
            }
        }
        
    }
`