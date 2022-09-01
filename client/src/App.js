
import './App.css';
import TopPageComponent from './TopPageComponent';
import MiddlePageComponent from './MiddlePageComponent';
import ButtonComponent from './ButtonComponent';
import Divider from './Divider';
import ThirdPageComponent from './ThirdPageComponent';
import BottomPageComponent from './BottomPageComponent';
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
    <Divider/>

    <ThirdPageComponent />
    <BottomPageComponent />

   </body>

   

     

      
    
  );
}

export default App;
