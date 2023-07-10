import { styled } from "styled-components";
const navcolor = '#3b459d'

export const BlogDiv = styled.div`
    margin: auto;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 90%;
    padding: 1%;
    position: relative;

    .header{
        display: grid;
        grid-template-columns: 90% 10%;
        
        .icons{
            opacity: 0.6;
            transform: 0.2s;
            margin-left: 5%;
        }
        .icons:hover{
            opacity: 0.8;
        }
    }
    .section-name{
        position: absolute;
        transform: rotate(-90deg);
        left: -10%;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding:0.5% 2%;
        top: 50%;
        background-color: ${navcolor};
        color: white;
        cursor: default;
    }

    .body{
        display: flex;
        overflow: auto;
        margin-top: 2%;
        scroll-behavior: smooth;
        .blog-card{
            min-width: 282px;
            max-width: 282px;
            margin-right: 5%;
            img{
                width: 100%;
                border-radius: 5px;
            }

            button{
                background-color: #40aff0;
                color: #090909;
                font-weight: bold;
                padding:1% 4%;
                border-radius: 3px;
                margin-top: 2%;
                border: 0;
            }
            span{
                font-size: 0.8vw;
                color: gray;
                margin-left: 4%;
            }
            p{
                margin-top: 5%;
                text-align: justify;
            }
        }
    }
    ::-webkit-scrollbar {
            width: 0px;
        }
    /* Track */
    ::-webkit-scrollbar-track {
        width: 0px;
        background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        width: 0px;
        background: transparent; 
    }

    @media (max-width:900px) {
        margin-top: 10%;
        width: 94%;
        padding: 0%;
        .header{
            grid-template-columns: 80% 20%;            
            .icons{
                scale: 1.2;
            }
        }
        .section-name{display:none;}
        .body{
            margin-top: 5%;
            .blog-card{
                min-width: 280px;
                max-width: 280px;

                button{
                    padding:2% 5%;
                }
                span{
                    font-size: 2vw;
                }
            }
            
        }
    }


`