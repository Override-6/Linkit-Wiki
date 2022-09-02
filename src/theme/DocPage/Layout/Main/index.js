import React, {useEffect, useRef, useState} from 'react';
import Main from '@theme-original/DocPage/Layout/Main';
import "index.css"

const svgsDir = "/src/components/diagrams/workers/svgs/"
const NearWallSvgs = ["cables", "dig", "hammer", "paint", "perçeuse", "pique-sol", "souder"]
const Middle1 = ["pique-sol", "reader", "Brouette", "dig", "wallmaker"]
const Middle2 = ["pique-sol", "reader", "Brouette", "dig"]
const Middle3 = ["reader", "wallmaker", "Brouette"]

function getWorkers() {
    return <div id={"Workers"}>

    </div>
}

function Header() {
    const workers = genWorkers()
    return <></>
}

function Footer() {
    const workers = genWorkers()
    return <></>
}

function Worker({svgs, reverse}) {
    const spawns = Math.random() > 1 / 3
    let reversed = reverse
    if (reversed === undefined) reversed = Math.random() > 0.5
    if (spawns) {
        const svg = svgsDir + svgs[Math.floor(Math.random() * svgs.length) + 1] + ".svg"
        if (reversed) return <img src={svg} alt={svg} style={{transform: "scaleX(-1)"}}/>
        return <img src={svg} alt={svg}/>
    }
    return <></>
}

export default function MainWrapper(props) {

    return (<>
        <Header/>
        <Main {...props}/>
        <Footer/>
    </>);
}
