
import './App.css';
import TopPageComponent from './TopPageComponent';
import ButtonComponent from './ButtonComponent';
function App() {
  return (
    
        <body>  
      {/* <ul>
      
        <li><a href="search.asp">Search</a></li>
        <li><a href="contact.asp">List of Medications</a></li>
        <li><a href="about.asp">Shopping Cart</a></li>
      </ul> */}
    <TopPageComponent />

    <div class="container-1-list" >   
    {/* <!-- <ul> --> */}
        <li>Get your medication safe and secure</li>
        <li> Order ships same day order is placed</li>
        <li> Great customer service 24/7 </li>
    
    {/* <!-- </ul> --></div> */}
    {/* <!-- <div class="image-container-1"> --> */}
       <ButtonComponent />
    </div>

    <div>   
       
    </div>

    <hr></hr>

      <div class="container-2">      
      <h1> Who can use Online Pharmacy?</h1>
      <p> Anyone can use the Online Pharmacy.</p>
      <p> Browes our many over the counter medications or need to fill a perscriptio.</p> 
      <p> Register now and get started!</p>
      
      
      </div>

      <div class="container-3">
    <h1> How to Use Online Pharmacy</h1>
    <div class="container-image-3a">
          
       
        <p>     
        Browes our selection of medications

        </p>
        
        <div class="">
       
            
                
            <p>    
                Add it to your cart  
            </p>
          
        
        </div>
    </div>
    <div class="container-image-3b">
       
       
            
        <p>    
            Check out!  
        </p>
      
    
    </div>
   </div>
    </body>
  );
}

export default App;
