import { styled } from "styled-components";
const navcolor = '#3b459d'

export const WhyDiv = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
    position: relative;

    h1,h3{
        text-align: center;
    }

    .cards{
        display: flex;
        flex-wrap: nowrap;
        width: 80%;
        margin: auto;
        padding: 0%;
        gap: 5%;
        margin-top: 5%;

        .y-card{
            filter:drop-shadow(0px 0px 150px #374cea) ;

            border: 1px solid gray;
            text-align: center;
            padding: 2%;
            transition: 0.3s;
            img{
                width: 60%;
                transition: 0.3s;
            }
            h3,h5{
                margin-top: 8%;
                font-weight:normal;

            }
        }
        .y-card:hover{
            box-shadow: 0px 0px 10px #3b459d;
            img{
                scale: 1.1
            }
        }
    }
    .section-name{
            position: absolute;
            transform: rotate(-90deg);
            left: -4.5%;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            padding:0.5% 2%;
            top: 50%;
            background-color: ${navcolor};
            color: white;
            cursor: default;
    }
    
    button{
        padding: 0.5% 2%;
        margin-left: 45%;
        width: 10%;
        border: 1px solid gray;
        background-color: transparent;
        color: white;
        margin-top: 5%;
        border-radius: 40px;
        cursor: pointer;
        transition: 0.2s;
    }
    button:hover{
        background-color: #3b459d;
        scale: 0.95;
    }

    @media (max-width:900px){
        margin-top:10%;
        h1{
            font-size: 5vw;
        }
        h3{
            font-size: 3vw;
        }
        .cards{
            width: 95%;
            gap:3%;
            .y-card{
                padding:1% 2%;
                img{
                    width: 70%;
                }
                h3{
                    margin-top: 4%;
                    font-size: 2vw;
                }
            }
        }
        button{
            padding: 1% 3%;
            margin-left: 40%;
            margin-top:10%;
            width: 20%;
            font-size: 2vw;
        }
        .section-name{display:none;}
    }

    @media (max-width:520px){
        margin-top:20%;
        h3{
            font-size: 3.5vw;
        }
        .cards{
            display:block;
            width: 70%;
            .y-card{
                margin-bottom:5%;
                padding:2% 2%;
                img{
                    width: 50%;
                }
                h3{
                    font-size: 4vw;
                }
            }
        }

        button{
            padding: 2% 4%;
            margin-left: 35%;
            width: 30%;
            font-size: 2.5vw;
        }
    }
    
`