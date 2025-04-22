import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../store/cartSlice";
import { Link } from "react-router-dom";

function CartPage() {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total quantity and price
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <p className="mb-4">Your cart is empty.</p>
                <Link
                    to="/products"
                    className="px-4 py-2 rounded text-white"
                    style={{ backgroundColor: 'var(--button-primary)', display: 'inline-block' }}
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

            <div className="overflow-x-auto">
                <table className="w-full" style={{ color: 'var(--text-color)' }}>
                    <thead>
                        <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                            <th className="py-2 text-left">Product</th>
                            <th className="py-2 text-left">Price</th>
                            <th className="py-2 text-left">Quantity</th>
                            <th className="py-2 text-left">Total</th>
                            <th className="py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b"
                                style={{ borderColor: 'var(--border-color)' }}
                            >
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover mr-4"
                                        />
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td className="py-4">${item.price.toFixed(2)}</td>
                                <td className="py-4">
                                    <div className="flex items-center">
                                        <button
                                            onClick={() =>
                                                dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                                            }
                                            className="px-2 py-1 rounded border"
                                            style={{ borderColor: 'var(--border-color)' }}
                                            disabled={item.quantity <= 1}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                                            }
                                            className="px-2 py-1 rounded border"
                                            style={{ borderColor: 'var(--border-color)' }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="py-4">${(item.price * item.quantity).toFixed(2)}</td>
                                <td className="py-4">
                                    <button
                                        onClick={() => dispatch(removeItem(item.id))}
                                        className="px-3 py-1 rounded text-white"
                                        style={{ backgroundColor: 'var(--button-danger)' }}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-6 flex justify-end">
                <div
                    className="border rounded p-4 w-64"
                    style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--border-color)' }}
                >
                    <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                    <div className="flex justify-between mb-2">
                        <span>Total Items:</span>
                        <span>{totalQuantity}</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span>Total Price:</span>
                        <span className="font-bold">${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        className="w-full py-2 rounded text-white"
                        style={{ backgroundColor: 'var(--button-primary)' }}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
