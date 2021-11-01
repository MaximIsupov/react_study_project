import React from "react"
import MenuAdminForm  from "./MenuAdminForm";

class MenuAdmin extends React.Component{
    render(){
        return(
            <div className='menu-admin'>
                <h2>Управление меню</h2>
                <MenuAdminForm addBurger={this.props.addBurger} />
                <button onClick={this.props.loadBurgers}> Загрузить бургеры </button>
            </div>
     );
    }
}

export default MenuAdmin;