import { styled } from "styled-components";
const navcolor = '#3b459d'

export const LandingDiv = styled.div`
    padding-top: 5%;
    margin-bottom: 2%;

    display: grid;
    grid-template-columns: 50% 50%;
    .left-sec{
        padding: 15% 1% 0% 8%;
        color: white;
        .intro-1,.intro-2{
            margin-top: 4%;
            font-size: 2.5vw;
        }
        .intro-1{
            color: white;
        }

        .intro-2{
            width: 80%;
            font-size: 1vw;

        }
        button{
            margin-top:10%;
            width: 25%;
            padding: 1% 2%;
            border: 0;
            background-color: white;
            cursor: pointer;
            transition: 0.3s;
            font-weight: bold;
            color: ${navcolor};
        }
        button:hover{
            color: white;
            background-color: ${navcolor};
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

    }
    .right-sec{
        position: relative;
        img{
            width: 75%;
            margin-left: 5%;
        }
        .social-handles{
            position: fixed;
            z-index: 5;
            display: flex;
            right: -2%;
            transform: rotate(-90deg);
            top: 50%;
            gap: 10%;
            .icons{
                background-color: ${navcolor};
                border-radius: 50%;
                padding: 4%;
                color: white;
                transition: 0.3s;
                cursor: pointer;
            }
            .icons:hover{
                padding: 3%;
            }
        }

    }

    @media (max-width: 900px){
        padding-top: 10%;
        grid-template-columns: 30% 70%;

        .left-sec{
            width: 150%;
            z-index: 4;
            padding-top: 20%;
            /* border: 1px solid white; */
            .intro-1,.intro-2{

                /* border: 1px solid white; */
            }   
            .intro-1{
                font-size: 4vw;
            }
            .intro-2{
                font-size: 2vw;
            }
            button{
                width: 50%;
                padding: 2% 3%;
            }
            .section-name{
                display: none;
            }
        }
        .right-sec{
            z-index: 3;
            img{
                width: 100%;
            }
            .social-handles{
                right: -4%;
                gap: 20%;
                .icons{
                    scale: 1.3;
                }
            }
        }
    }

    @media (max-width: 520px){
        padding-top: 25%;
        display: flex;
        flex-direction: column-reverse;
        
        .left-sec{
            width: 90%;
            padding: 2%;
            margin: auto;

            .intro-1,.intro-2{
                width: 100%;
            }   
            .intro-1{
                font-size: 6vw;
            }
            .intro-2{
                font-size: 3vw;
            }
        }
        .right-sec{
            .social-handles{
                right: -10%;
            }
        }
    }
`