import { types } from "mobx-state-tree"
import Item from "./Item"

const ItemList = types.model("ItemList", {
    items: types.array(Item)
})
.actions(self => ({
    addItem(item) {
        self.items.push({
            ...item,
            quantity: parseInt(item.quantity),
            price: parseFloat(item.price)
        })
    },
    removeItem(item) {
        self.items.splice(self.items.indexOf(item), 1)
    }
}))
.views(self => ({
    get total() {
        return self.items.reduce((sum, item) => { return sum + (item.price * item.quantity) }, 0)
    }
}))

export default ItemList