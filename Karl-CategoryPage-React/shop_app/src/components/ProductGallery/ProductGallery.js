import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
//import jsonData from '../jsonData';
//import Menu from '../ApiData/ApiData'; 
//import bg1 from 'img/bg-img/bg-1.jpg';

const Gallery = () =>{
    const [ product, getProduct] = useState();

     //useffect runs once when event occurs
     useEffect(() =>{

    const getProductData = ()=> {
         axios.get('http://localhost:8000')
         .then(function (response){    
           getProduct(response.data);
            //console.log(response.data);
         })
         .catch(function (error){
             console.log(error);
         })
         .then(function (){
             //always run
         });       
    }
       
        getProductData();
    }, []);

//     const [data ,setData] = useState(jsonData);
//     const filterCategory= (itemCateg) =>{
//     const itemValue= jsonData.filter((itemCateg) => {
//         console.log(itemValue);
//         //return currCat.category === itemCateg;
//     });   
//     // setData(itemValue);
// }

   
return (
  <>
    <section className="shop_grid_area section_padding_100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        <div className="shop_sidebar_area">
                           
                            <div className="widget catagory mb-50">
                                {/* <!--  Side Nav  --> */}
                                <div className="nav-side-menu">
                                    <h6 className="mb-0">Catagories</h6>
                                    <div className="menu-list">
                                        <ul id="menu-content2" className="menu-content collapse out">
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...women2">
                                                <Link to ="...">Woman wear</Link>
                                                <ul className="sub-menu collapse show" id="women2">
                                                    <li><Link to="...">Midi Dresses</Link></li>
                                                    <li><Link to="...">Maxi Dresses</Link></li>
                                                    <li><Link to="...">Prom Dresses</Link></li>
                                                    <li><Link to="...">Little Black Dresses</Link></li>
                                                    <li><Link to="...">Mini Dresses</Link></li>
                                                </ul>
                                            </li>
                                            
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...man2" className="collapsed">
                                                <Link to="...">Man Wear</Link>
                                                <ul className="sub-menu collapse" id="man2">
                                                    <li><Link to="...">Man Dresses</Link></li>
                                                    <li><Link to="...">Man Black Dresses</Link></li>
                                                    <li><Link to="...">Man Mini Dresses</Link></li>
                                                </ul>
                                            </li>
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...kids2" className="collapsed">
                                                <Link to="...">Children</Link>
                                                <ul className="sub-menu collapse" id="kids2">
                                                    <li><Link to="...">Children Dresses</Link></li>
                                                    <li><Link to="...">Mini Dresses</Link></li>
                                                </ul>
                                            </li>
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...bags2" className="collapsed">
                                                <Link to="...">Bags &amp; Purses</Link>
                                                <ul className="sub-menu collapse" id="bags2">
                                                    <li><Link to="...">Bags</Link></li>
                                                    <li><Link to="...">Purses</Link></li>
                                                </ul>
                                            </li>
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...eyewear2" className="collapsed">
                                                <Link to="...">Eyewear</Link>
                                                <ul className="sub-menu collapse" id="eyewear2">
                                                    <li><Link to="...">Eyewear Style 1</Link></li>
                                                    <li><Link to="...">Eyewear Style 2</Link></li>
                                                    <li><Link to="...">Eyewear Style 3</Link></li>
                                                </ul>
                                            </li>
                                            {/* <!-- Single Item --> */}
                                            <li data-toggle="collapse" data-target="...footwear2" className="collapsed">
                                                <Link to="...">Footwear</Link>
                                                <ul className="sub-menu collapse" id="footwear2">
                                                    <li><Link to="...">Footwear 1</Link></li>
                                                    <li><Link to="...">Footwear 2</Link></li>
                                                    <li><Link to="...">Footwear 3</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="widget price mb-50">
                                <h6 className="widget-title mb-30">Filter by Price</h6>
                                <div className="widget-desc">
                                    <div className="slider-range">
                                        <div data-min="0" data-max="3000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="0" data-value-max="1350" data-label-result="Price:">
                                            <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                            <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                        </div>
                                        <div className="range-price">Price: 0 - 1350</div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget color mb-70">
                                <h6 className="widget-title mb-30">Filter by Color</h6>
                                <div className="widget-desc">
                                    <ul className="d-flex justify-content-between">
                                        <li className="gray"><Link to="..."><span>(3)</span></Link></li>
                                        <li className="red"><Link to="..."><span>(25)</span></Link></li>
                                        <li className="yellow"><Link to="..."><span>(112)</span></Link></li>
                                        <li className="green"><Link to="..."><span>(72)</span></Link></li>
                                        <li className="teal"><Link to="..."><span>(9)</span></Link></li>
                                        <li className="cyan"><Link to="..."><span>(29)</span></Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="widget size mb-50">
                                <h6 className="widget-title mb-30">Filter by Size</h6>
                                <div className="widget-desc">
                                    <ul className="d-flex justify-content-between">
                                        <li><Link to="...">XS</Link></li>
                                        <li><Link to="...">S</Link></li>
                                        <li><Link to="...">M</Link></li>
                                        <li><Link to="...">L</Link></li>
                                        <li><Link to="...">XL</Link></li>
                                        <li><Link to="...">XXL</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="widget recommended">
                                <h6 className="widget-title mb-30">Recommended</h6>

                                <div className="widget-desc">
                                    {/* <!-- Single Recommended Product --> */}
                                    <div className="single-recommended-product d-flex mb-30">
                                        <div className="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-10.jpg" alt=""/>
                                        </div>
                                        <div className="single-recommended-desc">
                                            <h6>Men’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Recommended Product --> */}
                                    <div className="single-recommended-product d-flex mb-30">
                                        <div className="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-11.jpg" alt="" />
                                        </div>
                                        <div className="single-recommended-desc">
                                            <h6>Blue mini top</h6>
                                            <p>$ 19.99</p>
                                        </div>
                                    </div>
                                    {/* <!-- Single Recommended Product --> */}
                                    <div className="single-recommended-product d-flex">
                                        <div className="single-recommended-thumb mr-3">
                                            <img src="img/product-img/product-12.jpg" alt="" />
                                        </div>
                                        <div className="single-recommended-desc">
                                            <h6>Women’s T-shirt</h6>
                                            <p>$ 39.99</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8 col-lg-9">
                        <div className="shop_grid_product_area">+
                            <div className="row">

                            {product && product.map((data, key) => {                               
                                    return (                                        
                                        <>
                                {/* <!-- Single gallery Item --> */}
                                <div className="col-12 col-sm-6 col-lg-4 single_gallery_item wow fadeInUpBig" data-wow-delay="0.2s" key={key}>
                                    {/* <!-- Product Image --> */}
                                    
                                    <div className="product-img">
                                        <img src={`img/product-img/${data.image}`} alt="" />
                                        <div className="product-quicview">
                                            <Link to="..." data-toggle="modal" data-target="...quickview"><i className="ti-plus"></i></Link>
                                        </div>
                                    </div>
                                    {/* <!-- Product Description --> */}
                                    <div className="product-description">
                                        <h4 className="product-price">${data.price}</h4>
                                        <p>{data.name}</p>
                                        {/* <!-- Add to Cart --> */}
                                        <Link to="..." className="add-to-cart-btn">ADD TO CART</Link>
                                    </div>
                                </div>    
                                </>
                                )
                            })}  
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
    </section>   
  </>
  );
}
export default Gallery;