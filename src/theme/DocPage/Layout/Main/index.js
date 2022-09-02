import React, {useEffect, useRef, useState} from 'react';
import Main from '@theme-original/DocPage/Layout/Main';

const svgsDir = "/src/components/diagrams/workers/svgs/"
const NearWallSvgs = ["cables", "dig", "hammer", "paint", "perçeuse", "pique-sol", "souder"]
const Middle1 = ["pique-sol", "reader", "Brouette", "dig", "wallmaker"]
const Middle2 = ["pique-sol", "reader", "Brouette", "dig"]
const Middle3 = ["reader", "wallmaker", "Brouette"]

function genWorkers() {
    return [new Worker(NearWallSvgs, false), new Worker(Middle1, false), new Worker(Middle2), new Worker(Middle3), new Worker(Middle2), new Worker(Middle1, true), new Worker(NearWallSvgs, true)]
}

function Header() {
    const workers = genWorkers()
    return <></>
}

function Footer() {
    const workers = genWorkers()
    return <></>
}

class Worker {

    constructor(svgs, reversed) {
        this.spawns = Math.random() > 1 / 3
        if (reversed === undefined) this.reversed = Math.random() > 0.5
        else this.reversed = reversed
        if (this.spawns) {
            this.svg = svgsDir + svgs[Math.floor(Math.random() * svgs.length) + 1] + ".svg"
        }
    }


    render() {
        if (!this.spawns) return <></>
        if (this.reversed) return <img src={this.svg} alt={svg} style={{transform: "scaleX(-1)"}}/>
        return <img src={this.svg} alt={svg}/>
    }
}

export default function MainWrapper(props) {

    return (<>
        <Header/>
        <Main {...props}/>
        <Footer/>
    </>);
}
