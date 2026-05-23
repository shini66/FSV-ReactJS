import { useState } from "react";
import ProductModal from "./ProductModal";

function Card(props) {
  const { id, image, title, price, primaryParamValue, secondaryParamValue } =
    props;
  const [selected, setSelected] = useState(false);

  // Si viene un producto (image), mostramos el layout de producto con modal
  if (image || props.product) {
    const product = props.product ?? { id, image, title, price };

    return (
      <>
        <article className="w-80 h-96 bg-white rounded-lg shadow overflow-hidden m-3 flex flex-col">
          <div className="w-full h-48 flex items-center justify-center bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-44 w-auto object-contain"
            />
          </div>

          <div className="p-4 flex-1 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-gray-800 truncate">
              {product.title}
            </h2>

            <div className="mt-3 flex items-center justify-between">
              <button
                onClick={() => setSelected(true)}
                data-id={id}
                className="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded"
              >
                Ver detalles
              </button>

              <p className="text-right text-gray-900 font-bold text-lg">
                {product.price}
              </p>
            </div>
          </div>
        </article>

        {selected && (
          <ProductModal product={product} onClose={() => setSelected(false)} />
        )}
      </>
    );
  }

  // Fallback: antiguo uso con primary/secondary values
  return (
    <div className="w-80 h-96 bg-white rounded-lg shadow m-3 p-4 flex flex-col justify-center">
      <h3 className="font-semibold truncate">{primaryParamValue}</h3>
      <p className="text-sm text-gray-600">{secondaryParamValue}</p>
    </div>
  );
}

export default Card;
