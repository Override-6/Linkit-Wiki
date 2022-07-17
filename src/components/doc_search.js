
export function doc(classname) {
    return "/scaladoc/" + classname.toString().replace(/\./g, "/")
}