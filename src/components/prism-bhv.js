import {Prism} from "prism-react-renderer";

export default Prism.languages['prism-bhv'] = {
    'keyword': /accept|agreement|and|appoint|code|describe|disable|discard|disinv|else|enable|ensinv|following|foreach|if|import|method|modifier|name|returnvalue|statics/,
    'class-name': {
        pattern: /(\b(?:describe|describe statics)\s+)\w+/i,
        lookbehind: true
    },
    'function': /\w+\b((?:\(.+?\)))/,
    'comment': /\s*(((\/\/.*\n?)|(\/\*[\s\S]+?\*\/))\s*)|\s+/,
    'string': /"([^"\\]|\\.)*"/,
    'boolean': /true|false/,
    'operator': /->|:/

}