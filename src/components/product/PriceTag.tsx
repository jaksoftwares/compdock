export default function PriceTag({ price }: { price: number }) {
  return <span className="text-blue-600 font-bold">KES {price.toFixed(2)}</span>;
}
