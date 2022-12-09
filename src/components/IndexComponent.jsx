import React, { Component } from 'react';

import CarrouselComponent from './CarrouselComponent';
import FramePizzaComponent from './FramePizzaComponent';
import campesina from '../assets/images/campesina.jpg';
import "../css/index.css";
import { connect } from 'react-redux';

import {addProduct} from '../redux/slices/cartSlice';

class IndexComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            formal_prod: {
                id: 0,
                desc: "unasidnaskd aksd kjabkasjd sad ",
                cantidad: 8,
                ingredientes:["asdasd","asd","fgjf"],
                precio: 10000
            }
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.estado !== this.props.estado) {
            if(this.props.estado === 0){
                document.getElementById("index-container").classList.add("container-indez-post-cart");
            }else if(this.props.estado === 1){
                document.getElementById("index-container").classList.remove("container-indez-post-cart");
            }
        }
      }

    tryOneFunction(){
        /* let jaja = {
            desc: "string",
            cantidad: 12,
            ingredientes: ["string","string","string"],
            precio: 123,
        }
        let jajaxd = JSON.stringify(jaja);
        localStorage.setItem("listOfProducts",[jajaxd,jajaxd]); */
        /* let getit = "["+localStorage.getItem("listOfProducts")+"]"; */

        
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
                        <FramePizzaComponent id="1" image={campesina} name={"BBQ CHICKEN"} ingredients={["Salsa BBQ", "Pollo", "Cebolla"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="2" image={campesina} name={"AMERICANA"} ingredients={["Jamón", "Carne", "Salchicha", "Pepperoni"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="3"image={campesina} name={"CAMPESINA"} ingredients={["Pollo", "Pimiento", "Champiñón"]} med="10000" grande="20000" />
                        <FramePizzaComponent id="4" image={campesina} name={"HAWAIANA"} ingredients={["Pollo", "Jamón", "Piña"]} med="10000" grande="20000" />
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    estado: state.stateShow.show,
    products: state.stateShow.products
});

const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(IndexComponent)