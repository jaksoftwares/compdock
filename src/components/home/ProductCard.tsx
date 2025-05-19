import Link from "next/link";
import Image from "next/image";

// Define the Product type
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300">
      {/* Using next/image for optimized image rendering */}
      <Image
        src={product.image}
        alt={product.name}
        width={500} // You can adjust the width and height to your needs
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-[#1e1e2f]">{product.name}</h3>
        <p className="text-lg text-[#ff6f00] mt-2">${product.price}</p>
        <Link
          href={`/product/${product.id}`}
          className="text-[#ff6f00] mt-4 inline-block hover:text-[#ffcc00] transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
