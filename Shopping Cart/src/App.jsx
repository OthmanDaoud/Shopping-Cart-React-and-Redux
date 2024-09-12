import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <Provider store={store}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Shopping Cart App</h1>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3 pr-4">
            <ProductList />
          </div>
          <div className="w-full md:w-1/3">
            <ShoppingCart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
