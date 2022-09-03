import React, {useEffect, useRef, useState} from 'react';
import Main from '@theme-original/DocPage/Layout/Main';
import "./index.css"

import Cables from "/src/components/workers/svgs/cables.svg"
import Dig from "/src/components/workers/svgs/dig.svg"
import Souder from "/src/components/workers/svgs/souder.svg"
import Brouette from "/src/components/workers/svgs/Brouette.svg"
import Hammer from "/src/components/workers/svgs/hammer.svg"
import Bringer from "/src/components/workers/svgs/bringer.svg"
import Paint from "/src/components/workers/svgs/paint.svg"
import Perceuse from "/src/components/workers/svgs/perçeuse.svg"
import PiqueSol from "/src/components/workers/svgs/pique-sol.svg"
import Reader from "/src/components/workers/svgs/reader.svg"
import Wallmaker from "/src/components/workers/svgs/wallmaker.svg"

const NearWallSvgs = [Cables, Hammer, Paint, Perceuse, PiqueSol, Souder]
const Middle1 = [PiqueSol, Reader, Bringer, Brouette, Dig, Wallmaker]
const Middle2 = [PiqueSol, Reader, Bringer, Brouette, Dig]
const Middle3 = [Reader, Wallmaker, Bringer, Brouette]


function getWorkers() {
    return <div id={"workers"}>
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
    return workers
}

function Footer() {
    const workers = getWorkers()
    return workers
}

function Worker({svgs, reverse, ...other}) {
    const spawns = Math.random() > 1 / 3
    let reversed = reverse
    if (reversed === undefined) reversed = Math.random() > 0.5
    if (spawns) {
        const i = Math.floor(Math.random() * svgs.length)
        const Svg = svgs[i]
        if (reversed) return <Svg id="worker-reverse" {...other}/>
        return <Svg id="worker" {...other}/>
    }
    return null
}

export default function MainWrapper(props) {

    return (<>
        <div id={"content"}>
            <Header/>
            <Main {...props}/>
            <Footer/>
        </div>
    </>);
}
