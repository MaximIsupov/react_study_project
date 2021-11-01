import React from "react";
import Shipment from "./shipment";

class Order extends React.Component{
    renderOrder = key =>{
        const burger = this.props.burgers[key];
        const count = this.props.order[key];
        const isAvialable = burger.status === 'avialable';
        if (isAvialable){
            return 'Извините, недоступно.';
        }
        return <li key={key}>
                <span>{count}</span>
                шт. {burger.name}
                <span>{count * burger.price} Р.</span>
                <button className='cancellItem'>&times;</button>
            </li>;
    }

    render(){
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevValue, key) => {
            const burger = this.props.burgers[key];
            const count = this.props.order[key];
            const isAvialable = burger.status === 'avialable';
            if (!isAvialable){
                return prevValue + count * burger.price;
            }
            return prevValue;
        }, 0);
        return(
            <div className='order-wrap'>
                <h2>Ваш Заказ</h2>
                <ul className='order'>
                    {orderIds.map(this.renderOrder)}
                </ul>
                {total > 0 ? <Shipment total={total}/> : 'Выберите что-нибудь для заказа!'}
            </div>
            
     );
    }
}

export default Order;