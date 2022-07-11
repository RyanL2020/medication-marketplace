import logo from './logo.svg';
import './App.css';

function App() {
  return (
        <body>  
      <ul>
      
        <li><a href="news.asp">Search</a></li>
        <li><a href="contact.asp">List of Medications</a></li>
        <li><a href="about.asp">Shopping Cart</a></li>
      </ul>
    <div class="container-1">      
    <h1> Online Pharmacy</h1>
    <p> Welcome to the online Pharmacy!</p>
    <p>Where you can browse and purchase your medications online </p>     
    <p>from the comfort of your own home</p> 
    </div>

    <div class="container-1-list" >   
    {/* <!-- <ul> --> */}
        <li>Get your medication safe and secure</li>
        <li> Order ships same day order is placed</li>
        <li> Great customer service 24/7 </li>
    
    {/* <!-- </ul> --></div> */}
    {/* <!-- <div class="image-container-1"> --> */}
        <img class="middle-container-pic" src="images/olga-delawrence-b9CaYHNfmho-unsplash.jpg" alt="pill bottles" /> 
    </div>
    </body>
  );
}

export default App;
