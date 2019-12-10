import { types } from "mobx-state-tree"
import ItemList from './ItemList'

const Invoice = types.model('Invoice', {
    currency: types.string,
    isPaid: false,
    itemList: types.optional(ItemList, { items: [] })
})
.actions(self => ({
    markPaid() {
        self.isPaid = true
    },
    markUnpaid() {
        self.isPaid = false
    }
}))
.views(self => ({
    get status() {
        return self.isPaid ? "Paid" : "Balance due"
    }
}))

export default Invoice