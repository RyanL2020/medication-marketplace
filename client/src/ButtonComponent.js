import * as React from "react"


function ButtonComponent() {
    const [count, setCount] = React.useState(0)
    const handleClick = () => {
        setCount(count + 1)
    }
    return( 
        <div>     
        <button type= "button" onClick={handleClick}>
            Click Me !
        </button>
            {count}
        </div>
    
    );
}





export default ButtonComponent;