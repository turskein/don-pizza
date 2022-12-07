import React, { Component } from 'react';

import CartShopComponent from './CartShopComponent';
import CarrouselComponent from './CarrouselComponent';
import FramePizzaComponent from './FramePizzaComponent';
import campesina from '../assets/images/campesina.jpg';
import "../css/index.css";
import { connect } from 'react-redux';

class IndexComponent extends Component {

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.estado !== this.props.estado) {
            if(this.props.estado === 0){
                document.getElementById("index-container").classList.add("container-indez-post-cart");
            }else if(this.props.estado === 1){
                document.getElementById("index-container").classList.remove("container-indez-post-cart");
            }
        }
      }

    render() {
        return (
            <div>
                <div className="container-index " id='index-container'>
                    <CarrouselComponent />

                    <div className='container-frames-pizza'>
                        <h3>
                            Sugerencias
                        </h3>
                        <FramePizzaComponent image={campesina} name={"BBQ CHICKEN"} ingredients={["Salsa BBQ", "Pollo", "Cebolla"]} med="10.000" grande="20.000" />
                        <FramePizzaComponent image={campesina} name={"AMERICANA"} ingredients={["Jamón", "Carne", "Salchicha", "Pepperoni"]} med="10.000" grande="20.000" />
                        <FramePizzaComponent image={campesina} name={"CAMPESINA"} ingredients={["Pollo", "Pimiento", "Champiñón"]} med="10.000" grande="20.000" />
                        <FramePizzaComponent image={campesina} name={"HAWAIANA"} ingredients={["Pollo", "Jamón", "Piña"]} med="10.000" grande="20.000" />
                        <FramePizzaComponent image={campesina} name={"MECHADA BBQ"} ingredients={["Carne Mechada", "Tomate", "Cebolla"]} med="10.000" grande="20.000" />
                        <FramePizzaComponent image={campesina} name={"VEGAN QUEEN"} ingredients={["Champiñón", "Pimiento", "Cebolla", "Choclo", "Tomáte"]} med="10.000" grande="20.000" />
                    </div>
                </div>
                <CartShopComponent/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    estado: state.stateShow.show
});

export default connect(mapStateToProps)(IndexComponent)