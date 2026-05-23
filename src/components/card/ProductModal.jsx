import { useEffect } from "react";

function ProductModal({ product, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="product-modal-title"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-indigo-500 uppercase tracking-widest">
              Producto #{product.id}
            </span>
            <h2
              id="product-modal-title"
              className="text-lg font-bold text-gray-800 leading-snug"
            >
              {product.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors mt-1 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-5 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-56 object-contain"
            />
          </div>

          <div className="md:col-span-2">
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-500">Categoría</span>
                <strong className="text-gray-800 capitalize">
                  {product.category}
                </strong>
              </div>

              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">
                  ${product.price}
                </div>
                <div className="text-sm text-gray-500">
                  Rating: {product.rating?.rate} ({product.rating?.count})
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
