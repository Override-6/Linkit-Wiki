
export function doc(classname) {
    return "pathname:///scaladoc/" + classname.toString().replace(/\./g, "/")
}