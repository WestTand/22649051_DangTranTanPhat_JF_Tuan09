import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import { products } from "../data/products";

function ProductsPage() {
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Products</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border rounded-lg overflow-hidden shadow-md"
                        style={{
                            backgroundColor: 'var(--card-bg)',
                            borderColor: 'var(--border-color)'
                        }}
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-2" style={{ color: 'var(--text-color)' }}>
                                {product.description}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                                <button
                                    onClick={() => dispatch(addItem(product))}
                                    className="px-4 py-2 rounded text-white"
                                    style={{ backgroundColor: 'var(--button-primary)' }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
