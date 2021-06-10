import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

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

    const listItems = metals.map(
    (metal) => {
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }
)
    html += listItems.join("")
    html += "</ul>"

    console.log(listItems.join(""))
    return html
}

// const joined = listItems.join("")


//     html += joined
//     html += "</ul>"

//     console.log(joined)
//     return html