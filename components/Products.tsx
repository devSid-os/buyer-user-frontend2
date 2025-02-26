'use client'; // Client component
import { useRouter } from 'next/navigation';
import styles from '../app/products/styles.module.css';
import Rating from '@mui/material/Rating';
const Products = ({ products }: { products: any }) => {
  const router = useRouter();
  console.log('Products Data:', products);

  return (
    <div className={styles.grid}>
      {products.map((product: any) => (
        <div
          key={product.id}
          className={styles.card}
          onClick={() => router.push(`/product/${product.id}`)} // Navigate to details page
        >
          <img src={product.image} alt={product.title} width={150} />
          <h3>{product.title}</h3>
          <Rating value={product.rating.rate} precision={0.5} readOnly className="mt-2" />

          <p>₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
