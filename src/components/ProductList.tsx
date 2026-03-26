import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../services/api";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteProduct(id);
    fetchData();
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <button onClick={() => handleDelete(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}