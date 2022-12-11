import React, { Component } from 'react';
import "../../css/addedpizza.css";
import { BiX } from "react-icons/bi";

import {switchShowAdded} from '../../redux/slices/cartSlice';
import { connect } from 'react-redux';



class ClearCarritoModalComponent extends Component {

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.pizzaadded !== this.props.pizzaadded) {
            if (this.props.pizzaadded === 0) {
                document.getElementById("added").classList.remove("hide-persona-added");
                setTimeout(()=>{
                    this.props.switchShowAdded();
                }, 2000);
            } else if (this.props.pizzaadded === 1) {
                document.getElementById("added").classList.add("hide-persona-added");
            }
        }
    }

    render() {
        return (
            <div id="added" className='container-persona-added hide-persona-added'>
                <p>
                Tú pizza ha sido agregada :D
                </p>
                
                <BiX  className='close-person-added' onClick={()=>{document.getElementById("added").classList.add("hide-persona-added");}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    pizzaadded: state.stateShow.pizzaadded
});

const mapDispatchToProps = { switchShowAdded };

export default connect(mapStateToProps,mapDispatchToProps)(ClearCarritoModalComponent);