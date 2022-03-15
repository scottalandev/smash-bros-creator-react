import React from 'react';
import { Header, Footer } from './HeadFootComponent';
import { CharDisplay } from './CharDisplay';
import { sampleChar } from '../seedData/sampleChar';

function Main() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                <h1>Super Smash Bros. Ultimate<br/>Character Creator</h1>
                <CharDisplay char={sampleChar}/>
            </main>
            <footer><Footer /></footer>
        </>
    )
}

export default Main;