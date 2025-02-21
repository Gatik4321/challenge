import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [formData, setFormData] = useState({
    user_id: "",
    email: "",
    roll_number: "",
    numbers: "",
    alphabets: "",
  });
  const [response, setResponse] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from backend
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/products");
        setProducts(res.data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        numbers: formData.numbers ? formData.numbers.split(",").map((num) => num.trim()).filter(Boolean) : [],
        alphabets: formData.alphabets ? formData.alphabets.split(",").map((char) => char.trim()).filter(Boolean) : [],
      };
      const res = await axios.post("http://localhost:5000/api/v1/product/new", payload);
      setResponse(res.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">College User Data Submission</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_id"
          placeholder="User ID"
          value={formData.user_id}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="College Email ID"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="roll_number"
          placeholder="College Roll Number"
          value={formData.roll_number}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="numbers"
          placeholder="Numbers (comma-separated)"
          value={formData.numbers}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="alphabets"
          placeholder="Alphabets (comma-separated)"
          value={formData.alphabets}
          onChange={handleChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Submit</button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded">
          <h3 className="font-bold">Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-xl font-bold">All Products</h2>
        <ul className="list-disc pl-5">
          {products.map((product, index) => (
            <li key={index} className="border p-2 rounded my-2">{JSON.stringify(product)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
