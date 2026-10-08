






const ProductCard = ({ product }) => {
  const { title, price, thumbnail, stock } = product;

  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-800 bg-[#111111] shadow-lg transition duration-300 hover:-translate-y-1 hover:border-lime-400">

      {/* Product Image */}
      <div className="flex h-64 items-center justify-center bg-[#181818] p-6">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-contain transition duration-300 hover:scale-105"
        />
      </div>

      {/* Product Information */}
      <div className="p-5">

        {/* Title */}
        <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-white">
          {title}
        </h2>

        {/* Price */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-2xl font-bold text-lime-400">
            ${price}
          </span>

          <span className="text-sm text-gray-400">
            {stock} available
          </span>
        </div>

        {/* Quantity */}
        <div className="mb-4 flex items-center justify-between rounded-xl border border-gray-700 bg-[#181818] p-2">

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#222222] text-xl text-white transition hover:bg-lime-400 hover:text-black"
          >
            −
          </button>

          <span className="font-semibold text-white">
            1
          </span>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#222222] text-xl text-white transition hover:bg-lime-400 hover:text-black"
          >
            +
          </button>

        </div>

        {/* Add To Cart */}
        <button
          className="w-full rounded-xl bg-lime-400 py-3 font-bold text-black transition duration-300 hover:bg-lime-300 active:scale-95"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;