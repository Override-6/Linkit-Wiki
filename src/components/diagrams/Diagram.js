
import React from "react"
import {useColorMode} from '@docusaurus/theme-common'

export function Diagram({light, dark, style}) {
    const Light = light.default
    const Dark = dark.default
    const {colorMode, _} = useColorMode()
    if (colorMode === 'dark') return <Light style={style}/>
    else return <Dark style={style}/>
}