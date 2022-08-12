import {Prism} from "prism-react-renderer";

Prism.languages['bhv'] = {
    'comment': /\s*(((\/\/.*\n?)|(\/\*[\s\S]+?\*\/))\s*)|\s+/,
    'keyword': /accept|agreement|and|connect|mirror|appoint|code|describe|disable|discard|disinv|else|enable|ensinv|following|foreach|if|import|method|modifier|name|returnvalue|statics/,
    'class-name': {
        pattern: /(\b(?:describe|describe statics)\s+)\w+/i,
        lookbehind: true
    },
    'function': {
        pattern: /(\w+\b)(\(.+?\))/i,
    },
    'string': /"([^"\\]|\\.)*"/,
    'boolean': /true|false/,
    'operator': /->|:/

}