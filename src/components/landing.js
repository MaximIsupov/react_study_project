import React from "react";
import restourants from '../sample-restaurants'

class Landing extends React.Component {
    state = {
        display: false,
        title: '',
        url: ''
    };

    displayList = () => {
        this.setState({display: !this.state.display});
    }

    getTitle = (restourant) => {
        const { title, url } = restourant;
        this.setState({title, url, display: false});
    }

    goToTheRestaurant = (restourant) => {
        const { url } = this.state;
        console.log(url);
        this.props.history.push(`/restaurant/${url}`);
    }

    render() {
        return (
            <div className='restaurant_select'>
                <div className='restaurant_select_top'>
                    <div onClick={this.displayList} className='restaurant_select_top-header'>
                        { this.state.title ? this.state.title : 'Выбери ресторан' }
                    </div>
                    <div className='arrow_picker'>
                        <div className='arrow_picker-up'></div>
                        <div className='arrow_picker-down'></div>
                    </div>
                </div>

                {this.state.display ? <div className='restaurant_select_bottom'>
                    <ul>
                        {restourants.map(
                            restourant =>{
                                return <li onClick={()=> this.getTitle(restourant)} key={restourant.id}>{restourant.title}</li>;
                            }
                        )}
                    </ul>
                </div> : null}

                {!this.state.display && this.state.title ? <button onClick={this.goToTheRestaurant}>
                    Перейти в ресторан
                </button>: null}

            </div>
        );
    }
}

export default Landing;