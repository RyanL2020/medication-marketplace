import * as React from "react";

//signup 
//log in
//browes drugs



function ButtonComponent() {
    const [count, setCount] = React.useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return( 
        <div>     
    <button type= "button" onclick={handleClick}>
         Click Me !
    </button>
    {count}
        </div>
    
    );
}





export default ButtonComponent;