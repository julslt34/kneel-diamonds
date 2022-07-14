import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

// this is to give a window alert when you choose a size
// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "size") {
//             window.alert(``)
//         }
//     }
// )


document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)



export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

