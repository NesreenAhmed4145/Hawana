import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-ui-kit/css/mdb.min.css';
import './Shop.css';
import { Input, Ripple, initMDB } from 'mdb-ui-kit';
import { pink } from '@mui/material/colors';

const categories = ['الكل', 'قسم الزيتون', 'قسم اللبنة', 'قسم الجبنة', 'الهوى هوانا'];

const products = [
  { title: 'زيتون أخضر', price: '$20.00', category: 'قسم الزيتون', img: '/assets/gouda.jpeg' },
  { title: 'زيتون أسود', price: '$22.00', category: 'قسم الزيتون', img: '/assets/labneh.jpg' },
  { title: 'لبنة ناعمة', price: '$15.00', category: 'قسم اللبنة', img: '/assets/labneh.jpg' },
  { title: 'لبنة بالزعتر', price: '$17.00', category: 'قسم اللبنة', img: '/assets/labneh.jpg' },
  { title: 'جبنة بلدية', price: '$25.00', category: 'قسم الجبنة', img: '/assets/labneh.jpg' },
  { title: 'جبنة حلوم', price: '$30.00', category: 'قسم الجبنة', img: '/assets/cheese.jpeg' },
  { title: 'منتج مميز', price: '$50.00', category: 'الهوى هوانا', img: '/assets/cheese.jpeg' },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    initMDB({ Input, Ripple });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'الكل' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="container text-center">
          <h1 className="fw-bold">Hawana Shop</h1>
          <p className="lead">With this shop homepage template</p>
        </div>
      </header>

      {/* Filter + Search Section */}
      <div className="container py-4">
        <div className="p-4 rounded-4 shadow-sm  text-center" style={{ border: '1px solid #eee'}}>
          <div className="row justify-content-center align-items-center gy-2 gx-3">
            {/* Category Filter */}
            <div className="col-md-3 filter-dropdown">
              <select
                className="form-select form-select-lg btn-pink text-white"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* MDB Search Input */}
            <div className="col-md-6"  style={{ width:'400px' }}>
              <div className="input-group">
                <div className="form-outline" data-mdb-input-init>
                  <input
                    type="search"
                    id="form1"
                    className="form-control"
                    placeholder="ابحث باسم المنتج"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form1">
                    ابحث
                  </label>
                </div>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init  style={{background:'#e52696'}}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="container py-3">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {filteredProducts.map((product, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={product.img} className="card-img-top" alt={product.title} />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.price}</p>
                </div>
                <div className="card-footer-custom p-2">
                  <button className="add-to-cart-btn">أضف إلى السلة</button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-12 text-center">
              <p className="text-muted">لا توجد منتجات مطابقة للبحث</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
