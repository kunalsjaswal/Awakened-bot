import { styled } from "styled-components";
const navcolor = '#3b459d'

export const ServiceDiv = styled.div`
    position: relative;
    margin-top: 5%;
    h1{
        text-align: center;
    }

    .service-1, .service-2{
        display: grid;
        width: 60%;
        margin: auto;
        margin-top: 5%;
        grid-template-columns: 50% 50%;
        align-items: center;
        img{
            width: 70%;
            filter: drop-shadow(0px 0px 10px #5babf6);
        }
        p{
            i{
                color: #3265ff;
                cursor: pointer;
                margin-left: 1%;
            }
        }
    }

    .service-2{
        img{
            margin: auto;
            filter: drop-shadow(100px -50px 30px #77777764);

        }
    }

    .section-name{
            position: absolute;
            transform: rotate(-90deg);
            left: -5%;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            padding:0.5% 2%;
            top:40%;
            background-color: ${navcolor};
            color: white;
            cursor: default;
        }
    
        @media (max-width: 900px) {
            margin-top: 10%;
            h1{
                font-size: 6vw;
            }
            .service-1, .service-2{
                width: 80%;
                
            }
            .section-name{
                display: none;
            }

        }
        @media (max-width: 520px) {
            margin-top: 20%;
            h1{
                font-size: 6vw;
            }
            .service-1, .service-2{
                margin-top:10%;
                width: 90%;
                img{
                    width:90%;
                }
                
            }
            .section-name{
                display: none;
            }

        }

`