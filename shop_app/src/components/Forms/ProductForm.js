import React , {useEffect} from "react";
import axios from 'axios';
import "./Form.css";

export default function ProductForm() {

  const [formData, setFormData] = React.useState(
    { p_name: "", p_price: "", p_quantity: "", p_image: "", p_category: ""}
)

let name, value;
function handleChange(event) {
    console.log(event);
    name= event.target.name;
    value = event.target.value;

    setFormData(
        {...FormData, [name]: value}
    )
}

function handleSubmit(event) {
    event.preventDefault()
    // submitToApi(formData)

    let formData = new FormData(event.target);
    //const {p_name, p_price, p_category, p_image, p_quantity} = formData;

    // Posting Product Form data To MongoDB
    const apiUrl = '/reactApi/ProductData';

    fetch(apiUrl, {
        method: 'POST',
        //body: JSON.stringify({ p_name, p_price, p_category, p_image, p_quantity })
        body: new URLSearchParams(formData)
    }).then(res => res.json())
        .then(response => {
            console.log(response)
        }).catch(console.log);
}
//     console.log(formData)
// }

const [ category, setCategory] = React.useState();

// Fetching Categories through an API
 const getCategoryData = ()=> {    
     axios.get('http://localhost:8000/api/categoryFormData')
     .then(function (response){    
      setCategory(response.data);
        //console.log(response.data);
     })
     .catch(function (error){
         console.log(error);
     })
     .then(function (){
         //always run
     });      
 }   
//useffect runs once when event occurs
useEffect(() =>{      
   getCategoryData();
}, []);


  return (
  <>
    <h2>ADD PRODUCTS</h2>

  <div class= "myWrapper"> 

    <div class="container1">
      <form onSubmit={handleSubmit} method= "POST">
        <div class="col1">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="name">Product Name</label><br />
              <input onChange={handleChange} name="p_name" value={formData.p_name} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Quantity</label><br />
              <input onChange={handleChange}  name="p_quantity" value={formData.p_quantity} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="quantity">Product Image</label><br />
              <input onChange={handleChange}  name="p_image" value={formData.p_image} type="text" />
            </div>
          </div>
        </div>

        <div class="col2">
          <div class="item-details" id="col-2">
            <div class="input-box">
              <label for="price">Unit Price</label><br />
              <input onChange={handleChange}  name="p_price" value={formData.p_price} type="number" />
            </div>
          </div>

          <div class="item-details" id="col-3">
            <div class="input-box">
              <label for="price">Product Size</label><br />
              <input onChange={handleChange}  name="p_size" value={formData.p_size} type="text" />
            </div>
          </div>

          <div class="item-details">
            <div class="input-box">
              <label for="category">Product Category</label><br />

              <select onChange={handleChange} name="p_category" value={formData.p_category} id="category" >    
               {/* fetching Category data from mongoDB categoryDB table */}
                {category && category.map((data, key) => {                               
                    return (                                        
                    <> 
                      <option value= {data.name} >{data.name}</option>                    
                    </>  
                    )
                })}                 
              </select>
              {/* <!-- <input name="category" type="text" /> --> */}
            </div>          
          </div>


        </div>
        <div class="myBtn">
          <input type="submit" value="Add Product" />
        </div>
      </form>     
    </div>
  </div>  
</>
  )
}
  
