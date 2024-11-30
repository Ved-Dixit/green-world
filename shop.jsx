import React, { useState } from 'react';

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const plants = [
    { id: 1, name: 'Aloe Vera', image: 'aloe-vera.jpg', price: 200 },
    { id: 2, name: 'Snake Plant', image: 'snake-plant.jpg', price: 300 },
    { id: 3, name: 'Peace Lily', image: 'peace-lily.jpg', price: 250 },
    { id: 4, name: 'Money Plant', image: 'money-plant.jpg', price: 150 },
    { id: 5, name: 'Cactus', image: 'cactus.jpg', price: 180 },
  ];

  const handleAddToCart = (plant) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  };

  const handleQuantityChange = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#4CAF50',
      color: 'white',
    },
    cart: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      fontSize: '18px',
      cursor: 'pointer',
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      padding: '10px',
    },
    image: {
      width: '100%',
      height: '150px',
      objectFit: 'cover',
    },
    name: {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '10px 0',
    },
    price: {
      color: '#4CAF50',
      fontSize: '16px',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#ff6600',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      zIndex: 1000,
      width: '400px',
      maxHeight: '80%',
      overflowY: 'auto',
    },
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
    },
    modalItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    quantityButtons: {
      display: 'flex',
      alignItems: 'center',
      gap: '5px',
    },
    closeButton: {
      backgroundColor: '#ff6600',
      color: 'white',
      padding: '5px 10px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1>Plant Shop</h1>
        <div
          style={styles.cart}
          onClick={() => setShowCart(true)} // Open cart modal
        >
          <span className="material-icons">shopping_cart</span>
          <span>{cart.length}</span>
        </div>
      </nav>

      {/* Plants List */}
      <div style={styles.container}>
        {plants.map((plant) => (
          <div key={plant.id} style={styles.card}>
            <img
              src={`./src/assets/${plant.image}`}
              alt={plant.name}
              style={styles.image}
            />
            <div style={styles.name}>{plant.name}</div>
            <div style={styles.price}>₹{plant.price}</div>
            <button
              style={styles.button}
              onClick={() => handleAddToCart(plant)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div>
          <div style={styles.overlay} onClick={() => setShowCart(false)}></div>
          <div style={styles.modal}>
            <h2>Cart</h2>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <div>
                {cart.map((item) => (
                  <div key={item.id} style={styles.modalItem}>
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                    <div style={styles.quantityButtons}>
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
                <h3>Total: ₹{calculateTotal()}</h3>
              </div>
            )}
            <button
              style={styles.closeButton}
              onClick={() => setShowCart(false)}
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
