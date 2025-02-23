import { notFound } from "next/navigation";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { productList } from "@/constants/product";

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = productList.find((p) => {
    console.log("id: ", p.id);  
    return p.id.toString() === params.id;
  });
  if (!product) return notFound(); // Show 404 if product not found

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10"  style={{color:"black"}}>
      {/* Product src Section */}
      <div className="flex flex-col items-center">
        <img src={product.src} alt={product.name} className="w-full max-w-md rounded-lg shadow-md" />
        <div className="flex gap-2 mt-4">
          {/* Product Thumbnails */}
          {[product.src, product.src, product.src].map((img, index) => (
            <img key={index} src={img} alt="Thumbnail" className="w-16 h-16 object-cover cursor-pointer border rounded-md" />
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <Rating value={4.5} precision={0.5} readOnly className="mt-2" />
        <p className="text-gray-600 mt-2">{product.description}</p>

        <h2 className="text-2xl font-bold mt-3 text-red-500">₹{product.price}</h2>
        <p className="text-green-600 font-semibold">Inclusive of all taxes</p>

        {/* Offers & Delivery */}
        <div className="mt-4 border p-3 rounded-md bg-gray-50">
          <p><strong>Available Offers:</strong></p>
          <ul className="list-disc ml-6 text-sm text-gray-700">
            <li>Bank Offer: 10% Instant Discount on HDFC Cards</li>
            <li>Get ₹200 cashback on UPI Payments</li>
            <li>No Cost EMI Available</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-5 flex gap-4">
          <Button variant="contained" color="secondary" className="w-full py-3 text-lg font-semibold" href="/checkout">
            Buy Now
          </Button>
          <Button variant="outlined" color="primary" className="w-full py-3 text-lg font-semibold" href="/cart">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
