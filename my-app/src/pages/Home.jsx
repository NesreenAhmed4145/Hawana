import React, { useState } from 'react';
import './Home.css';

const images = [
  '/assets/slide 1.jpg',  // Ensure the path is correct
  'https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Image+2',
  'https://via.placeholder.com/800x400/5733FF/FFFFFF?text=Image+3',
];

const bestSales = [
  { title: 'Product 1', price: '$25.99', image: 'https://via.placeholder.com/200x200/FF5733/FFFFFF?text=Product+1' },
  { title: 'Product 2', price: '$19.99', image: 'https://via.placeholder.com/200x200/33FF57/FFFFFF?text=Product+2' },
  { title: 'Product 3', price: '$29.99', image: 'https://via.placeholder.com/200x200/5733FF/FFFFFF?text=Product+3' },
];

const newArrivals = [
  { title: 'New Product 1', price: '$39.99', image: 'https://via.placeholder.com/200x200/FF33FF/FFFFFF?text=New+Product+1' },
  { title: 'New Product 2', price: '$49.99', image: 'https://via.placeholder.com/200x200/33FFCC/FFFFFF?text=New+Product+2' },
  { title: 'New Product 3', price: '$59.99', image: 'https://via.placeholder.com/200x200/FF9933/FFFFFF?text=New+Product+3' },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="home-page">
      {/* Image Carousel */}
      <div className="slider">
        <div
          className="slide"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        ></div>
      </div>
      <div className="slider-controls">
        <button className="prev" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="next" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      {/* Best Sales Section */}
      <section className="section best-sales">
        <h2>Best Sales</h2>
        <div className="product-list">
          {bestSales.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="section new-arrivals">
        <h2>New Arrivals</h2>
        <div className="product-list">
          {newArrivals.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button className="btn-buy">Buy Now</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
