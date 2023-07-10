import { styled } from "styled-components";

const navcolor = '#3b459d'

export const NavDiv =styled.div`
    position: fixed;
    width: 100%;
    z-index: 5;

    display: grid;
    grid-template-columns: 60% 40%;
    align-items: center;
    padding: 2% 1% 1% 1%;
    h1{
        padding-left: 4%;
        cursor: pointer;
        color: #757dc6;

    }
    .sub-links{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10%;

        .links{
            text-decoration: none;
            color: white;
            transition: 0.4s;
        }
        .links:hover{
            box-shadow: 0px 3px 0px ${navcolor};
        }
        button{
            width: 20%;
            background-color: transparent;
            color: white;
            box-shadow: 0px 0px 4px ${navcolor};
            border: 2px solid ${navcolor};
            border-radius: 50px;
            cursor: pointer;
            transition: 0.3s;
            padding: 0.5% 1% ;
        }
        button:hover{
            color: white;
            background-color: ${navcolor};
        }
    }

    @media (max-width:900px) {
        grid-template-columns: 40% 60%;
        .sub-links{
            button{
                width: 25%;

            }
        }
    }
    @media (max-width:520px) {

        display: block;
        h1{
            text-align: center;
        }
        .sub-links{
            margin-top: 2%;
            padding: 2%;
            button{
                width: 30%;

            }
        }

    }
`