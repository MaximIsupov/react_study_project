import React from "react";

class Burger extends React.Component{
    render(){
        const {name, price, status, desc, image} = this.props.details;
        const isAvialable = status === 'avialable';

        return(
            <li className='menu-burger'>
                <div className='image-container'>
                    <img src={image} alt={name}></img>
                </div>
                <div className='burger-details'>
                    <h3 className='burger-name'>
                        {name}
                        <span className='price'>{price} ₽</span>
                    </h3>
                    <p>{desc}</p>
                    <button className='buttonOrder' disabled={isAvialable} onClick={() => this.props.addToOrder(this.props.index)}>
                        {!isAvialable ? 'Заказать' : 'Временно недоступен'}
                    </button>
                </div>
            </li>
     );
    }
}

export default Burger;