import React from "react";
import Header from "./header";
import Order from "./order";
import MenuAdmin from "./menu_admin";

class App extends React.Component{
    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header />
                </div>
                <Order />
                <MenuAdmin />
            </div> 
     );
    }
}

export default App;