
import React from "react"
import {useColorMode} from '@docusaurus/theme-common'

export function Diagram(path) {
    const Diagram_Dark = <svg path={path}></svg>;
    const Diagram_Light = <svg path={path}></svg>;
    const {colorMode, _} = useColorMode()
    if (colorMode === 'dark') return <Diagram_Light/>
    else return <Diagram_Dark/>
}