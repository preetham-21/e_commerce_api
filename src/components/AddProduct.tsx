import { useState } from "react";
import { addProduct } from "../services/api";

export default function AddProduct() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: ""
  });

  const handleSubmit = async () => {
    await addProduct(product);
    alert("Product Added");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input placeholder="Title" onChange={(e) => setProduct({ ...product, title: e.target.value })} />
      <input placeholder="Price" type="number" onChange={(e) => setProduct({ ...product, price: Number(e.target.value) })} />
      <input placeholder="Description" onChange={(e) => setProduct({ ...product, description: e.target.value })} />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}