import React from 'react';
import { Provider } from 'react-redux';
import Store from './features/Store';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductList from './assets/components/ProductList/ProductList';
import Cart from './assets/components/CartList/Cart';
import Navbar from './assets/components/Navbar';
import './App.css';
function App() {
  const products=[
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "Apple",
      "category": "smartphones",
      "images": "https://images.macrumors.com/t/e0o2RzHJ5cPlD4FgyKQ5jCdSGko=/1600x/article-new/2016/05/iphone8gold.jpg"
    
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "images": "https://m.media-amazon.com/images/I/61pp1qRRtpL.jpg"
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
         "images": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdvHMMgTFSd2avPZe4JRjhBAhzWkH_Jw4lA&s"
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "images": "https://productimages.withfloats.com/actual/619a8e3e530b4f00014200fe.jpeg"
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "images": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p30.jpg"
    }

  ]
  return (
    <div>
      <Provider store={Store}>
      <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<ProductList products={products}/>} />
          <Route path="/cart"element={<Cart/>}/>
        </Routes>
      </div>
    
      </BrowserRouter>
      </Provider>
         
    </div>
  );
}

export default App;