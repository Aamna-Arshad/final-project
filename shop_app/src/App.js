import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from './components/Main/Main';
import Gallery from './components/Main/ProductGallery/ProductGallery';
//import Filtersidebar from './components/Main/FilterSidebar/FilterSidebar';
import Form from './components/Forms/Form';
import ProductForm from './components/Forms/ProductForm';
import CategoryForm from './components/Forms/CategoryForm';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element = { <Main /> }>
          
          <Route path="/"   element={ <Gallery /> } />
         {/* <Route path="/"   element={ <Filtersidebar /> } /> */}
        </Route>
        <Route path="/product-form"  element= {<ProductForm />} />
        <Route path="/form"  element= {<Form />} />
        <Route path="/category-form"  element= {<CategoryForm />} />
        <Route path="/admin"  element= {<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
