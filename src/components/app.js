import React from "react";
import Header from "./header";
import Order from "./order";
import MenuAdmin from "./menu_admin"
import sampleBurgers from '../sample-burgers'
import { object } from "prop-types"
import Burger from './Burger';
import base from '../base'

class App extends React.Component{

    state = {
        burgers: {},
        order: {},
    }

    addBurger = (burger) => {
        console.log(burger);
        const burgers = {...this.state.burgers};
        burgers[`burger${Date.now()}`]=burger;
        this.setState({burgers: burgers});
    }

    loadBurgers = () => {
        console.log('Load burgers...');
        this.setState({burgers: sampleBurgers});
    }

    addToOrder = (burgerKey) => {
        const order = {...this.state.order};
        order[burgerKey] = order[burgerKey] + 1 || 1;
        this.setState({order: order});
    } 

    componentDidMount() {
        this.ref = base.syncState(`${this.props.match.params.restaurantId}/burgers`, {
            context:this,
            state: 'burgers',
        })
    }

    render(){
        return(
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header title='Very Hot Burger'/>
                    <ul className="burgers">
                        {Object.keys(this.state.burgers).map(key => {
                            return <Burger key={key} index={key} details={this.state.burgers[key]} addToOrder={this.addToOrder}/>
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers} order={this.state.order}/>
                <MenuAdmin addBurger={this.addBurger} loadBurgers={this.loadBurgers} />
            </div> 
     );
    }
}

export default App;