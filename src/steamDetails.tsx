import styled from "styled-components";

const SteamDetails = styled.div`
    .background {
        width: 100%;
        height: 100vh;
        /* background: url(background-cuttie.gif); */
        background: url(gamedev.gif);
        position: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        content: '';
        z-index: -1;
    }

    .content {
        height: 16rem;
        width: 61rem;
        margin: 0 auto;
        display: flex;
        content: '';
        background: var(--transparent);
        color: var(--white);
        font-family: "Motiva Sans", sans-serif;
        padding: 2rem;

        .header {
            display: flex;

            .avatar {
                width: 11rem;
                height: 11rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .border {
                    width: 13rem;
                    height: 13rem;
                    position: absolute;
                    margin-left: -12rem;
                    margin-top: -1rem;
                }
            }

            .nickname {
                line-height: 40px;
                color: var(--white);
                padding: 0 2rem;
                width: 25rem;

                h2 {
                    font-weight: 100;
                    font-family: "Motiva Sans", sans-serif;
                    margin-top: -0.3rem;
                    max-width: 23.125rem;
                }

                .subnick {
                    display: flex;
                    color: var(--gray);
                    font-size: 14px;
                    margin-top: -0.5rem;
                    align-items: center;
                    text-align: center;

                    .city {
                        margin-left: 0.7rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }

                .info {
                    display: flex;
                    flex-direction: column;
                    max-width: 300px;

                    p, i {
                        line-height: 23px;
                    }

                    p {
                        color: var(--theme);
                        font-size: 18px;
                    }

                    i {
                        color: var(--gray);
                        font-size: 15px;
                    }

                    a {
                        color: var(--white);
                        font-size: 14px;
                        text-decoration: none;

                        &:hover {
                            color: var(--theme);
                        }
                    }
                }
            }

            .level {
                margin: 0.5rem 0 0 1.5rem;
                width: 17rem;

                h2 {
                    font-weight: 100;

                    span {
                        border: 2px solid var(--theme);
                        border-radius: 50px;
                        padding: 0.3rem;
                        font-size: 18px;
                    }
                }

                .badge {
                    margin: 1.1rem 0 1.1rem 0;
                    padding: 0.5rem;
                    display: flex;
                    align-items: center;
                    background: var(--transparent-light);
                    backdrop-filter: blur(20px);
                    width: 99%;

                    .leftContent {
                        img {
                            width: 3rem;
                        }
                    }

                    .rightContent {
                        display: flex;
                        flex-direction: column;
                        margin-left: 1rem;

                        h4 {
                            font-weight: 100;
                            font-size: 14px;
                        }

                        p {
                            font-size: 14px;
                        }
                    }
                }

                .buttons {
                    margin-top: 0.5rem;
                    display: flex;
                    align-items: center;

                    a {
                        background: var(--transparent);
                        color: var(--gray);
                        padding: 0.5rem 0.6rem;
                        border: none;
                        margin-top: -4px;
                        margin-right: 0.3rem;
                        font-size: 15px;
                        cursor: pointer;
                        transition: 0.5s;

                        &:hover {
                            background: var(--transparent-hard);
                            color: var(--white);
                        }
                    }

                    .award, .avatar {
                        padding: 0.3rem;
                        margin-right: 0.3rem;
                        background: var(--transparent);
                    }

                    .award {
                        width: 1.5rem;
                        height: 2rem;
                    }

                    .avatar {
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }
    }

    .body {
        width: 61rem;
        height: 50rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        content: '';
        background: var(--transparent);
        color: var(--white);
        font-family: "Motiva Sans", sans-serif;
        padding: 0rem 1rem;
        margin-bottom: 1rem;

        .subgroups {
            display: flex;
            flex-direction: column;
            max-width: 65%;
            padding-right: 1rem;
            margin-top: -1rem;

            .group {
                padding: 1rem 0;

                h3, p, .groupDetails {
                    padding: 1rem;
                    width: 100%;
                    backdrop-filter: blur(20px);
                    font-weight: 100;
                }

                h3 {
                    background: var(--transparent-light);

                    border-radius: 7px 7px 0 0;
                }

                p {
                    background: var(--transparent);
                    border-radius: 0 0 7px 7px;
                    margin-bottom: 1rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 11;
                    -webkit-box-orient: vertical;
                }

                .groupDetails {
                    display: flex;
                    flex-direction: column;
                    background: var(--transparent);
                    margin-bottom: 1rem;

                    span {
                        margin: 0.65rem 0;

                        a {
                            color: var(--white);
                            text-decoration: none;
                            font-size: 1rem;

                            &:hover {
                                color: var(--theme);
                                text-decoration: underline;
                            }
                        }
                    }

                    .experienceLink,
                    .experienceLink:visited,
                    .experienceLink:hover,
                    .experienceLink:active {
                        text-decoration: none;
                        color: inherit;
                        display: block;   /* o link engloba o card inteiro */
                    }
                    .experience {
                        margin-top: 1rem;
                        font-size: 14px;
                        color: #c7d5e0;
                        
                        

                        .task {
                            display: flex;
                            align-items: center;
                            eight: 7rem;
                            justify-content: space-between;
                            background: #0b1016;
                            padding: 0.6rem;
                            border-radius: 2px;
                            min-width: 400px; /* largura mínima */

                            a {
                                text-decoration: none;
                                color: inherit;
                            }

                            .left {
                                display: flex;
                                
                                gap: 0.6rem;

                                    img {
                                        width: 184px;
                                        height: 69px;
                                        object-fit: fit;
                                    }

                                    .title {
                                        font-size: 15px;
                                        font-weight: 500;
                                        color: #ffffff;
                                        top: 0;
                                    }
                                }

                            .right {
                                text-align: right;
                                font-size: 12px;
                                color: #8f98a0;
                                line-height: 1.4;
                                }
                            }

                            .bottom {
                            background: #0b1016;
                            display: flex;
                            align-items: center;
                            justify-content: flex-end;
                            gap: 0.4rem;

                            img {
                                width: 32px;
                                height: 32px;
                                object-fit: cover;
                                margin-right: 0.3rem;
                                margin-bottom: 1.2rem;  
                            }
                            }
                        }
                        }  
                    

                    .badges {
                        padding: 1rem 0rem;
                        background: var(--transparent-hard);
                        border-radius: 7px;
                        display: flex;

                        img {
                            width: 4rem;
                            margin: 0.2rem 0.5rem;
                            border: 1px solid var(--gray);
                            transition: 1s;
                            object-fit: cover;

                            &:hover {
                                cursor: pointer;
                                filter: brightness(50%);
                            }
                        }

                        button {
                            width: 4rem;
                            height: 4rem;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            margin-top: 0.2rem;
                            transition: 1s;
                            background: var(--transparent);
                            backdrop-filter: blur(20px);
                            color: var(--white);
                            font-size: 1.2rem;
                            font-family: "Motiva Sans", sans-serif;
                            border: 1px solid var(--gray);

                            &:hover {
                                cursor: pointer;
                                filter: brightness(50%);
                            }
                        }
                    }
                }
            }
        }

        .sidebar {
            width: 40%;
            height: 43rem;
            background-color: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(20px);
            padding: 1rem;

            h2 {
                font-weight: 100;
                font-family: "Motiva Sans", sans-serif;
                color: #90ba3c;
            }

            .title {
                margin: 1rem 0;
            }

            .links {
                display: flex;
                flex-direction: column;

                .link {
                    &:hover {
                        color: var(--gray);
                    }
                }

                a {
                    padding: 0.7rem 0;
                    text-decoration: none;
                    color: var(--white);
                    font-size: 18px;
                    font-weight: 100;

                    span {
                        margin-left: 5px;
                        font-family: "Motiva Sans", sans-serif;
                        font-weight: 100;
                        color: var(--gray);
                        font-size: 30px;
                    }
                }

                .badges {
                    img {
                        width: 3.5rem;
                        height: 3.5rem;
                        object-fit: cover;
                        margin-right: 1rem;
                        cursor: pointer;
                    }

                    .level {
                        width: 4rem;
                        height: 4rem;
                    }
                }
            }
        }
    }

    .copyright {
        display: flex;
        justify-content: center;

        a {
            text-decoration: none;
            color: var(--white);
            font-family: "Motiva Sans", sans-serif;
            font-weight: 100;
            font-size: 1rem;
            margin-bottom: 1rem;
        }
    }
`;

export default SteamDetails;
