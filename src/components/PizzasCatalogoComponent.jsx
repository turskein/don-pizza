import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/pizzascatalogo.css";
import campesina from '../assets/images/campesina.jpg';
import FramePizzaComponent from './FramePizzaComponent';

class PizzasCatalogoComponent extends Component {
    render() {
        return (
            <div className='container-pizzas-catalogo'>
                <h3>Pizzas</h3>
                <FramePizzaComponent id="1" image={campesina} name={"BBQ CHICKEN"} ingredients={["Salsa BBQ", "Pollo", "Cebolla"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="2" image={campesina} name={"AMERICANA"} ingredients={["Jamón", "Carne", "Salchicha", "Pepperoni"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="3"image={campesina} name={"CAMPESINA"} ingredients={["Pollo", "Pimiento", "Champiñón"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="4" image={campesina} name={"HAWAIANA"} ingredients={["Pollo", "Jamón", "Piña"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="5" image={campesina} name={"MECHADA BBQ"} ingredients={["Carne Mechada", "Tomate", "Cebolla"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="6" image={campesina} name={"VEGAN QUEEN"} ingredients={["Champiñón", "Pimiento", "Cebolla", "Choclo", "Tomáte"]} med="10000" grande="20000" />
            </div>
        )
    }
}

export default connect()(PizzasCatalogoComponent)