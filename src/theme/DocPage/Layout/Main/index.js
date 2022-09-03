import React, {useEffect, useRef, useState} from 'react';
import Main from '@theme-original/DocPage/Layout/Main';
import "./index.css"

const svgsDir = "/src/components/diagrams/workers/svgs/"
const NearWallSvgs = ["cables", "dig", "hammer", "paint", "perçeuse", "pique-sol", "souder"]
const Middle1 = ["pique-sol", "reader", "Brouette", "dig", "wallmaker"]
const Middle2 = ["pique-sol", "reader", "Brouette", "dig"]
const Middle3 = ["reader", "wallmaker", "Brouette"]

function getWorkers() {
    return <div id={"Workers"}>
        <Worker svgs={NearWallSvgs} reverse={false}/>
        <Worker svgs={Middle1} reverse={false}/>
        <Worker svgs={Middle2}/>
        <Worker svgs={Middle3}/>
        <Worker svgs={Middle2}/>
        <Worker svgs={Middle1} reverse={true}/>
        <Worker svgs={NearWallSvgs} reverse={true}/>
    </div>
}

function Header() {
    const workers = getWorkers()
    return <></>
}

function Footer() {
    const workers = getWorkers()
    return workers
}

function Worker({svgs, reverse}) {
    const spawns = Math.random() > 1 / 3
    let reversed = reverse
    if (reversed === undefined) reversed = Math.random() > 0.5
    if (spawns) {
        const i = Math.floor(Math.random() * svgs.length) + 1
        const svg = svgsDir + svgs[i] + ".svg"
        console.log("i = " + i + " svgs = " + svgs + " svg = " + svg)
        if (reversed) return <img src={require(svg).context} alt={svg} style={{transform: "scaleX(-1)"}}/>
        return <img src={require(svg).context} alt={svg}/>
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
