import React from "react";

class MenuAdminForm extends React.Component{

    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    addBurger = (event) => {
        event.preventDefault();
        const burger = {
            name: this.nameRef.current.value,
            price: this.priceRef.current.value,
            status: this.statusRef.current.value,
            desc: this.descRef.current.value,
            image: this.imageRef.current.value,
        }
        this.props.addBurger(burger);
        event.target.reset();
    }

    render(){
        return(
                <form className='burger-edit' onSubmit={this.addBurger}>
                    <input ref={this.nameRef} name="name" type='text' placeholder='Name' autoComplete='off'></input>
                    <input ref={this.priceRef} name="price" type='text' placeholder='Price' autoComplete='off'></input>
                    <select ref={this.statusRef} name='status' className='status'>
                        <option value='avialable'>Доступно</option>
                        <option value='unavialable'>Убрать из меню</option>
                    </select>
                    <textarea ref={this.descRef} name='desc' placeholder='Description' autoComplete='off'></textarea>
                    <input ref={this.imageRef} name="image" type='text' placeholder='Image' autoComplete='off'></input>
                    <button type='submit'>Добавить</button>
                </form>
     );
    }
}

export default MenuAdminForm;