import { useState } from "react";
import useProducts from "../../hooks/useProducts.js";
import Button from "../ui/Button.jsx";
import Card from "./Card.jsx";
import ProductModal from "./ProductModal.jsx";

function CardList() {
  const { products, loadMore, hasMore, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSearchTerm, setSelectedSearchTerm] = useState("");

  const filteredProducts = (products ?? []).filter((product) =>
    product.title.toLowerCase().includes(selectedSearchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="flex flex-row gap-2">
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="p-4">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="w-full mx-auto mb-6 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedSearchTerm}
          onChange={(e) => setSelectedSearchTerm(e.target.value)}
        />
      </div>

      <main className="flex-1 overflow-auto p-4">
        {filteredProducts.length === 0 ? (
          <p className="text-gray-600 text-center">
            No se encontraron productos.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center items-stretch">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </div>
        )}

        {hasMore && (
          <div className="flex justify-center my-4">
            <Button label="Cargar más" onClick={loadMore} disabled={loading} />
          </div>
        )}
      </main>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}

export default CardList;
