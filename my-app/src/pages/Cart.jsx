import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      category: 'Electronics',
      price: 99.99,
      quantity: 1,
      image: '/assets/labneh.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Clothing',
      price: 49.99,
      quantity: 2,
      image: '/assets/cheese.jpeg',
    },
  ]);

  const handleIncrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const calculateSubtotal = () =>
    cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const shipping = cartItems.length > 0 ? 10.0 : 0;
  const tax = (calculateSubtotal() * 0.1).toFixed(2);
  const total = (calculateSubtotal() + shipping + parseFloat(tax)).toFixed(2);

  return (
    <div className="container py-5">
      <h1 className="mb-5">Your Shopping Cart</h1>
      <div className="row">
        <div className="col-lg-8">
          {/* Cart Items */}
          <div className="card mb-4">
            <div className="card-body">
              {cartItems.map(item => (
                <div className="row cart-item mb-3" key={item.id}>
                  <div className="col-md-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="col-md-5">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="text-muted">Category: {item.category}</p>
                  </div>
                  <div className="col-md-2">
                    <div className="input-group">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </button>
                      <input
                        style={{ maxWidth: '100px' }}
                        type="text"
                        className="form-control form-control-sm text-center"
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="col-md-2 text-end">
                    <p className="fw-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
              {cartItems.length === 0 && (
                <p className="text-center">Your cart is empty.</p>
              )}
            </div>
          </div>
          {/* Continue Shopping Button */}
          <div className="text-start mb-4">
            <a
              href="/shop"
              className="btn btn-outline-primary"
              style={{
                backgroundColor: 'rgb(229, 38, 150)',
                fontWeight: 'bold',
                color: 'white',
              }}
            >
              <i className="bi bi-arrow-left me-2"></i>Continue Shopping
            </a>
          </div>
        </div>

        <div className="col-lg-4">
          {/* Cart Summary */}
          <div className="card cart-summary">
            <div className="card-body">
              <h5 className="card-title mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-3">
                <span>Subtotal</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Tax</span>
                <span>${tax}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total</strong>
                <strong>${total}</strong>
              </div>
              <a
                href="/checkout"
                className="btn btn-outline-primary"
                style={{
                  backgroundColor: 'rgb(229, 38, 150)',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Proceed to Checkout
              </a>
            </div>
          </div>
          {/* Promo Code */}
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title mb-3">Apply Promo Code</h5>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter promo code"
                />
                <button className="btn btn-outline-secondary" type="button">
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
