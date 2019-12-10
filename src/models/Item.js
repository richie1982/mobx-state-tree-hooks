import { types } from 'mobx-state-tree'

const Item = types.model("Item", {
    name: types.string,
    price: types.number,
    quantity: types.number
})

export default Item