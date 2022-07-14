import { getOrders, getMetals, getSizes, getStyles} from "./database.js"
const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()

// code prior to added price code
const buildOrderListItem = (order) => {
    // return `<li>
    // Order #${order.id} was placed on ${order.timestamp}
    // </li>`

// code added to find price


const foundMetal = metals.find(
    (metal) => {
        return metal.id === order.metalId
    }
)

const foundSizes = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
)

const foundStyles = styles.find(
    (style) => {
        return style.id === order.styleId
    }
)


const totalCost = foundMetal.price + foundSizes.price + foundStyles.price

const costString = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
})

return `<li>
    Order #${order.id} cost ${costString}
</li>`

 }

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


