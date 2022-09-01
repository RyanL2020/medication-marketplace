
import './App.css';
import TopPageComponent from './TopPageComponent';
import MiddlePageComponent from './MiddlePageComponent';
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
    <MiddlePageComponent />
    <ButtonComponent />
   

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
