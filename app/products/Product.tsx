import { useRouter } from "next/navigation";

export default function Products({ products }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 border rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
          onClick={() => router.push(`/product/${product.id}`)} // Navigate to Product Detail
        >
          <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p className="text-red-500 font-bold text-xl">₹{product.price}</p>
          <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
}
