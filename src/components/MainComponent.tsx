import React from 'react';
import { Header, Footer } from './HeadFootComponent';

function Main() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <h1>Super Smash Bros. Ultimate<br/>Character Creator</h1>
            </main>
            <footer><Footer /></footer>
        </>
    )
}

export default Main;