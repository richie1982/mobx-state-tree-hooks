import React, { useState, useContext } from 'react';
import { useObserver } from 'mobx-react'
import { CTX } from './Store'


const App = () => {

  const store = useContext(CTX)

  const [name, setName] = useState("")
  const [price, setPrice] = useState("0.00")
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    const item = {
      name,
      price,
      quantity
    }
    store.itemList.addItem(item)
    setName("")
    setPrice("0.00")
    setQuantity(1)
  }



  return useObserver(() => (
    <div >
      MOBX STATE TREE
      <h2>{store.status}: £{store.itemList.total}</h2>
      <form
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            onChange={e => setName(e.target.value)}
            value={name}
            placeholder="Enter item..."
          />
        </label>
        <br/>
        <label>
          Price
          <input
            onChange={e => setPrice(e.target.value)}
            value={price}
          />
        </label>
        <br/>
        <label>
          Quantity
          <input
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
          />
        </label>
        <br/>
        <button
        >
          Submit
        </button>
      </form>
      <ul>
        {store.itemList.items.map((item, ind) => <li key={ind}>{item.name}</li>)}
      </ul>
    </div>

    )
  );
}

export default App;
