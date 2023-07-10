import { styled } from "styled-components";
const navcolor = '#3b459d'

export const AboutDiv = styled.div`
    margin-top: 5%;
    position: relative;
    h1{
        text-align: center;
    }

    p{
        width: 80%;
        margin: auto;
        margin-top: 2%;
        text-align: justify;
    }
    .section-name{
            position: absolute;
            transform: rotate(-90deg);
            left: -5%;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            padding:0.5% 2%;
            top: 50%;
            background-color: ${navcolor};
            color: white;
            cursor: default;
    }

    @media (max-width:900px) {
        margin-top: 10%;
        h1{
            font-size: 6vw;
        }
        p{
            width: 90%;
        }
        .section-name{display:none;}
    }
    @media (max-width:520px) {
        margin-top: 20%;
    }


`