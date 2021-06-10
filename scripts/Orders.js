import { getOrders, getMetals, getSizes, getStyles } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

const buildOrderListItem = (order) => {
    let totalCost = 0

    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    totalCost += foundMetal.price
// ======================================================
    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )
    totalCost += foundSize.price
// ======================================================
    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )
    totalCost += foundStyle.price
// ======================================================
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })

    return `<li>
        Order #${order.id} cost ${costString} placed on ${order.timestamp}
    </li>`
    }
export const Orders = () => {

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}