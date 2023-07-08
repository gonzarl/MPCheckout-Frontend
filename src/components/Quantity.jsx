const Quantity = ({ cantidad, setCantidad }) => {
    const decrementQuantity = () => {
        if (cantidad > 1)
            setCantidad(cantidad - 1);
    };

    const incrementQuantity = () => {
        setCantidad(cantidad + 1);
    };

    return (
        <div className="my-4">
            <div className="flex items-center justify-evenly border border-gray-200 rounded">
                <button
                    type="button"
                    className="w-10 h-10 text-gray-600 transition hover:opacity-75"
                    onClick={decrementQuantity}
                >
                    -
                </button>

                <div className="h-10 w-16 flex items-center justify-center py-auto border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none">
                    {cantidad}
                </div>

                <button
                    type="button"
                    className="w-10 h-10 text-gray-600 transition hover:opacity-75"
                    onClick={incrementQuantity}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Quantity;
