import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from './components/Main/Main';
import Gallery from './components/Main/ProductGallery/ProductGallery';
//import Filtersidebar from './components/Main/FilterSidebar/FilterSidebar';
// import Table from './components/AdminPanel/Table';
// import Form from './components/Forms/Form';
import AddProductForm from './components/Forms/AddProductForm';
import EditProductForm from './components/Forms/EditProductForm';
import CategoryForm from './components/Forms/CategoryForm';
import SingleProductTable from './components/AdminPanel/SingleProductTable' 
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element = { <Main /> }>
          
          <Route path="/"   element={ <Gallery /> } />
         {/* <Route path="/"   element={ <Filtersidebar /> } /> */}
        </Route>
        <Route exact path="/product-form"  element= {<AddProductForm />} />
        <Route exact path="/view/:id"  element= {<SingleProductTable />} />
        <Route exact path="/edit/:id"  element= {<EditProductForm />} />
        {/* <Route path="/table"  element= {<Table />} /> */}
        {/* <Route path="/form"  element= {<Form />} /> */}
        <Route path="/category-form"  element= {<CategoryForm />} />
        <Route path="/admin"  element= {<AdminPanel />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
