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
    <div className="group bg-white border rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col">
      <Link href={`/product/${product.id}`} className="relative w-full h-40 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
        <span className="absolute top-2 left-2 text-[10px] font-semibold bg-orange-500 text-white px-2 py-0.5 rounded-full">
          Featured
        </span>
      </Link>
      <div className="px-3 pt-3 pb-3 flex flex-col flex-1">
        <Link href={`/product/${product.id}`} className="flex-1">
          <h3 className="text-xs font-medium text-gray-900 line-clamp-2 min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm font-semibold text-orange-600">
          KES {product.price.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
