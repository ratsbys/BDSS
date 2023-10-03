"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600&display=swap');


    :root {
    --nav-color: rgb(51, 57, 109);
    --nav-link-color: rgba(233, 242, 251, 1);
    --nav-link-hover-color: rgb(190, 217, 243);
    --title-span-color: rgb(92, 174, 190);
    --hero-background: rgb(255, 255, 255);
    --hero-background-gradient: linear-gradient(
        0deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(17, 57, 96, 1) 100%
    );

    --font-small: 0.5em;
    --font-medium: 1em;
    --font-medium-large: 1.25em;
    --font-large: 1.5rem;
    --font-x-large: 2rem;
    --font-2x-large: 3rem;
    --font-3x-large: 3.5rem;
    --font-4x-large: 4rem;
    --font-5x-large: 4.5rem;
    --font-6x-large: 5rem;
    --font-7x-large: 5.5rem;

    -text-color: rgba(7, 26, 44, 1);

    --transition-slow: 0.6s;
    --transition-medium: 0.4s;
    --transition-fast: 0.2s;
    --transition-fastest: 0.1s;
    }

    /*Large Desktop*/
    /*General CSS*/

    html {
    scroll-behavior: smooth;
    }

    body {
    font-family: "Quicksand", sans-serif;
    }

    * {
    margin: 0;
    padding: 0;
    }

    h2,
    h3 {
    color: var(--title-span-color);
    font-weight: bold;
    }

    h2,
    h3,
    p {
    font-family: "Quicksand", sans-serif;
    }

    .container {
    width: 60%;
    margin: 0 auto;
    }

    


    .hero .text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    text-align: center;
    }

    .hero .text .pre-title {
    font-size: var(--font-2x-large);
    }
    .hero .text .title {
    font-size: var(--font-5x-large);
    }
    .hero .text .title span {
    color: var(--title-span-color);
    border-bottom: 5px solid var(--title-span-color);
    }
    .hero .text .post-title {
    font-size: xx-large;
    }

    /*About*/

    .about {
    min-height: 400px;
    display: flex;
    gap: 20px;
    padding: 50px 25px;
    }

    .about-us {
    min-height: 400px;
    padding: 50px;
    }

    .about .text-one {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 400px;
    width: 50%;
    }

    .about .text-one h2 {
    font-size: var(--font-3x-large);
    width: max-content;
    }

    .about .text-one p {
    font-size: var(--font-medium-large);
    }

    .about .text-one a {
    width: max-content;
    }

    /*Numbers*/

    .numbers {
    padding-top: 50px;
    padding-bottom: 50px;
    }

    .numbers .container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
    }

    .numbers .container .text {
    text-align: center;
    color: var(--nav-link-color);
    font-size: var(--font-large);
    }

    .numbers h2 {
    font-size: var(--font-3x-large);
    color: var(--nav-link-color);
    }

    .numbers .container .text .name {
    font-size: var(--font-x-large);
    }

    /*Services*/
    .services {
    padding-top: 50px;
    padding-bottom: 50px;
    }

    .services.container,
    .careers.container {
    width: 80%;
    }

    .services h2,
    .careers h2 {
    font-size: var(--font-3x-large);
    }

    .services .cards,
    .careers .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    }

    .services .cards .card {
    max-height: 300px;
    height: 250px;
    width: 30%;
    text-align: center;
    }

    .services .cards .card h3,
    .careers .cards .card h3 {
    color: var(--title-span-color);
    font-size: var(--font-medium-large);
    }

    .services .cards .card .card-text p,
    .careers .cards .card .card-text p {
    font-size: var(--font-medium-large);
    }

    .services .cards .card .card-text p span {
    color: var(--title-span-color);
    }

    /*Careers*/
    .careers {
    padding-top: 50px;
    padding-bottom: 50px;
    }

    .careers .cards .card {
    width: 30%;
    text-align: center;
    }

    .careers .cards .card header {
    padding-top: 10px;
    padding-bottom: 10px;
    background-image: url("./card-header-image.jpg");
    }

    .careers .cards .card header h3 {
    color: #fff;
    }

    .careers .cards .card footer {
    width: 100%;
    }

    .careers .cards .card .content {
    height: 250px;
    }

    .careers .cards .card .card-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

    /*Contact*/

    .contact {
    min-height: 400px;
    display: flex;
    justify-content: flex-end;
    padding: 50px;
    }

    .contact .form .container {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    }

    .contact span {
    color: var(--title-span-color);
    transition: var(---transition-fast);
    }

    .contact span:hover {
    font-weight: bolder;
    }

    .contact .form .container form {
    width: 80%;
    }

    .contact .short-contact {
    display: flex;
    flex-direction: column;
    align-items: left;
    min-height: 400px;
    }

    .contact h2 {
    font-size: var(--font-3x-large);
    width: max-content;
    }

    .contact .form input[type="text"],
    select,
    textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
    }

    .contact .form input[type="submit"] {
    background-color: #04aa6d;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    }

    .contact .form input[type="submit"]:hover {
    background-color: #45a049;
    }

    /*FOOTER*/
    #footer p span {
    color: var(--nav-link-hover-color);
    }

    /*Utilities*/

    .show-medium {
    display: none;
    }

    @media screen and (max-width: 1200px) {
    .services.container,
    .careers.container {
        width: 100%;
    }
    .services .cards .card {
        height: 200px;
    }
    .services .cards .card .card-text p,
    .careers .cards .card .card-text p {
        font-size: var(--font-medium);
    }
    .contact.container {
        width: 80%;
    }
    }

    @media screen and (max-width: 1024px) {
    .nav-container {
        width: 80%;
    }

    .container {
        width: 80%;
    }
    .nav-container .links {
        display: none;
    }

    .mobile-button {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        align-items: center;
    }

    .mobile-button span {
        font-size: var(--font-x-large);
        color: var(--nav-link-hover-color);
    }

    .mobile-logo {
        display: flex;
    }
    .mobile-links-active {
        width: 40%;
    }

    .hero .text .pre-title {
        font-size: var(--font-x-large);
    }
    .hero .text .title {
        font-size: var(--font-2x-large);
    }
    .hero .text .post-title {
        font-size: x-large;
    }

    .about .text-one {
        width: 70%;
    }

    .about .text-one h2,
    .contact h2 {
        font-size: var(--font-2x-large);
    }

    .about .text-one p {
        font-size: var(--font-medium);
    }

    .about .text-two ul {
        font-size: var(--font-medium);
    }

    .services .cards .card,
    .careers .cards .card {
        width: 45%;
    }

    .services .cards .card .card-text p {
        font-size: var(--font-medium);
    }

    .careers .cards .card {
        height: auto;
    }
    }

    @media screen and (max-width: 768px) {
    .mobile-links-active {
        width: 70%;
    }

    .about {
        flex-direction: column;
        text-align: left;
    }

    .about .text-one {
        min-height: 0;
    }

    .about .text-one h2,
    .contact h2 {
        width: 100%;
    }

    .about .text-one a {
        margin: 0 auto;
    }

    .about .text-one {
        width: 100%;
    }
    .about .text-two {
        width: 100%;
    }

    .numbers .container {
        justify-content: center;
        flex-direction: column;
    }

    .show-medium {
        display: block;
    }

    .services .cards .card,
    .careers .cards .card {
        width: 100%;
    }

    .services .cards .card {
        height: auto;
    }

    .services .cards .card .card-text p {
        font-size: var(--font-medium);
    }

    .contact {
        flex-direction: column;
        justify-content: center;
    }

    .contact .short-contact {
        width: 100%;
        min-height: 0;
        justify-content: center;
    }

    .contact .short-contact h2 {
        width: fit-content;
    }

    .contact .container {
        width: 90%;
    }

    .contact .form .container form {
        width: 100%;
    }
    }

    @media screen and (max-width: 480px) {
    html,
    body {
    }

    .nav-container {
        width: 90% !important;
    }

    .hero {
        height: 400px;
        width: 100%;
    }

    .hero .text .pre-title {
        font-size: var(--font-large);
    }
    .hero .text .title,
    .contact h2,
    .services h2,
    .careers h2 {
        font-size: var(--font-x-large);
    }
    .hero .text .post-title {
        font-size: large;
    }

    .mobile-links-active {
        width: 100%;
    }

    .services {
        padding: 0 !important;
    }

    .services.container,
    .about.container,
    .careers.container {
        width: 100%;
    }

    .contact {
        padding: 10px;
    }

    .contact p {
        font-size: var(--font-medium-large) !important;
    }

    .contact .container {
        width: 100%;
    }
    }

    
`;

export const AlternateGlobalStyle = createGlobalStyle`
    body, html {
        background-color: ${(props) => props.theme.colours.tertiary};
    }
`;

export default GlobalStyles;
