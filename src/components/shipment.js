import React from "react";
import Order from "./order";

class Shipment extends React.Component{
    render() {
        return(
            <div className='total'>
                    <div className='total_wrap'>
                        <div className='total_wrap-final'>
                            Итого: {this.props.total}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Shipment;