import React, { useMemo } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cartItems = {},
    removeFromCart,
    updateCartQuantity,
    saveForLater,
    savedItems = [],
    addToCart,
    removeSavedItem,
  } = useAppContext();

  // Utility to sanitize and format price
  const sanitizePrice = (price) =>
    parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0;

  const formatPrice = (price) =>
    `$${sanitizePrice(price).toFixed(2)}`;

  // Memoized cart array
  const cartArray = useMemo(
    () =>
      Object.entries(cartItems).map(([id, entry]) => ({
        _id: id,
        ...entry.product,
        quantity: entry.quantity,
      })),
    [cartItems]
  );

  // Calculations
  const subtotal = cartArray.reduce(
    (acc, item) =>
      acc + sanitizePrice(item.price) * (item.quantity || 1),
    0
  );
  const discount = subtotal >= 200 ? subtotal * 0.1 : 0;
  const tax = subtotal * 0.08;
  const grandTotal = subtotal - discount + tax;

  // Handlers
  const handleRemoveAll = () => {
    Object.keys(cartItems).forEach((id) => removeFromCart(id));
  };

  const handleCheckout = () => {
    if (cartArray.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    navigate('/checkout');
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Cart Items */}
      <div className="lg:col-span-2">
        <h2 className="text-xl font-bold pb-4">My Cart</h2>

        {cartArray.length === 0 ? (
          <p className="text-gray-600">No items in cart.</p>
        ) : (
          <div className="space-y-4">
            {cartArray.map((item) => (
              <div
                key={item._id}
                className="flex items-center justify-between border border-gray-200 p-2 rounded"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image?.[0] || ''}
                    alt={item.name}
                    className="w-16 h-16 object-cover"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatPrice(item.price)}
                    </p>
                    <input
                      type="number"
                      value={item.quantity}
                      min={1}
                      onChange={(e) =>
                        updateCartQuantity(
                          item._id,
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                      className="w-16 mt-1 border p-1"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <button
                    onClick={() => saveForLater(item)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Save for Later
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartArray.length > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <button
              onClick={() => navigate('/computerandtech')}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Back to Shop
            </button>
            <button
              onClick={handleRemoveAll}
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Remove All
            </button>
          </div>
        )}
      </div>

      {/* Summary */}
      {cartArray.length > 0 && (
        <div className="bg-white mt-11 shadow rounded-lg p-4 h-fit">
          <div className="mb-4">
            <label className="text-sm text-gray-600">Have a coupon?</label>
            <div className="flex mt-1">
              <input
                type="text"
                placeholder="Coming soon"
                className="border border-gray-300 p-2 rounded-l w-full text-sm"
                readOnly
              />
              <button
                disabled
                className="bg-gray-300 text-white px-3 text-sm rounded-r cursor-not-allowed"
              >
                Coming Soon
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-700 space-y-2">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount:</span>
              <span>-{formatPrice(discount)}</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Tax:</span>
              <span>+{formatPrice(tax)}</span>
            </div>
          </div>

          <div className="flex justify-between mt-3 border-t pt-2 font-semibold text-base">
            <span>Total:</span>
            <span>{formatPrice(grandTotal)}</span>
          </div>

          <button
            onClick={handleCheckout}
            className="mt-4 bg-blue-500 hover:bg-green-600 w-full py-2 rounded text-white font-semibold"
          >
            Checkout
          </button>

          <div className="flex justify-center mt-3 space-x-2">
            <img src="https://img.icons8.com/color/24/000000/mastercard.png" alt="MasterCard" />
            <img src="https://img.icons8.com/color/24/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/24/000000/paypal.png" alt="PayPal" />
            <img src="https://img.icons8.com/ios-filled/24/000000/apple-pay.png" alt="Apple Pay" />
          </div>
        </div>
      )}

      {/* Saved for Later */}
      {savedItems.length > 0 && (
        <div className="lg:col-span-3 mt-10">
          <h2 className="text-sm font-semibold mb-4 hover:underline">Saved for Later</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedItems.map((item) => (
              <div
                key={item._id}
                className="border p-4 rounded flex flex-col items-center text-center"
              >
                <img src={item.image?.[0]} alt={item.name} className="w-24 h-24 object-contain mb-2" />
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600 mb-2">
                  {formatPrice(item.price)}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => addToCart(item, 1)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeSavedItem(item._id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

        <div className="relative w-300 h-32 border border-gray-200  mt-4 rounded overflow-hidden">
  <img
    src={assets.BannerBottom}
    alt="BannerBottom"
    className="w-full h-full object-cover"
  />
  <button
    onClick={() => navigate('/cart')}
    className="absolute bottom-4 right-4 bg-orange-400 text-white h-11 px-6 rounded shadow-md hover:bg-orange-600"
  >
    Shop Now
  </button>
</div>

    </div>
  );
};

export default Cart;
