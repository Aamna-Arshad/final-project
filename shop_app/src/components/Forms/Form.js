import React , {useEffect} from "react";
import axios from 'axios';

export default function Form() {
    
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

        const apiUrl = 'http://localhost:3000/reactApi/ProductData';

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

    <form method= "POST" onSubmit={handleSubmit}>       
        <input onChange={handleChange} name="p_name" value={formData.p_name} type="text" placeholder="Product Name" />

        <input onChange={handleChange}  name="p_price" value={formData.p_price} type="number" placeholder="Unit Price" />
        <br /><br />               
        <input onChange={handleChange} name="p_quantity" value={formData.p_quantity} type="number" placeholder="Quantity" />
   
        <input onChange={handleChange}  name="p_image" value={formData.p_image} type="text" placeholder="Product Image" />
         <br /><br />        

        <label htmlFor="category" >Choose Category</label >
        <br />      
            <select onChange={handleChange} name="p_category" value={formData.p_category} id="category" >                      
            
                {/* fetching Category data from mongoDB categoryDB table */}
                {category && category.map((data, key) => {                               
                    return (                                        
                    <> 
                        <option value= {data._id} >{data.name}</option>                    
                    </>  
                    )
                })} 
                    
            </select>    

        {/* <textarea 
                value={formData.comments}
                placeholder="Description"
                onChange={handleChange}
                name="comments"
            /> */}  
                    
        <button >Submit</button>
    </form>       
    )
}
