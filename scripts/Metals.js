import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

// // this is to give a window alert when you choose a metal
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "metal") {
//             window.alert(`User chose metal ${event.target.value}`)
//         }
//     }
// )


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value))
        }
    }
)


export const Metals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const metal of metals) {
        html += `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }

    html += "</ul>"
    return html
}
