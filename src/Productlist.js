import { Product } from "./Product";

export function Productlist({ displayedProducts }) {
  return (
    <div>
      {displayedProducts.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {displayedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
