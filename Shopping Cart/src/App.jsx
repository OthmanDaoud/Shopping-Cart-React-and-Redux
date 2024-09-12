import React, { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  return (
    <Provider store={store}>
      <div
        className={`min-h-screen"
        }`}
      >
        <div className="container mx-auto p-4">
          <main>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Products</h2>
              <ProductList />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
              <ShoppingCart />
            </section>
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default App;
