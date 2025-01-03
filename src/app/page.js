export default async function Home() {
  // Fetch products data from API
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
