import { getStyles, setStyle} from "./database.js"

const styles = getStyles()

// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "style") {
//             window.alert(`User chose style ${event.target.value}`)
//         }
//     }
// )

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            setStyle(parseInt(event.target.value))
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    const listItems = styles.map(
    (style) => {
        return `<li>
            <input type="radio" name="style" value="${style.id}" /> ${style.style}
        </li>`
    }
)
    html += listItems.join("")
    html += "</ul>"

    console.log(listItems.join(""))
    return html
}

