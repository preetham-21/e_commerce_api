import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/products">View Products</Link>
      <br />
      <Link to="/add-product">Add Product</Link>
    </div>
  );
}