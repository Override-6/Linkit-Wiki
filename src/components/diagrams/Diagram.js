
import React from "react"
import {useColorMode} from '@docusaurus/theme-common'

export function Diagram({light, dark}) {
    const Diagram_Dark = import(dark)
    const Diagram_Light = import(light)
    const {colorMode, _} = useColorMode()
    if (colorMode === 'dark') return <Diagram_Light/>
    else return <Diagram_Dark/>
}