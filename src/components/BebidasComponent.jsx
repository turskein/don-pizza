import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/bebidascatalago.css";
import {everybebida} from '../assets/bebidas/everybebida';
import FrameBebidaComponent from './FrameBebidaComponent';

class BebidasComponent extends Component {
    render(){
        let bebidasInComponents = everybebida.map((beb)=>{
            return <FrameBebidaComponent id={beb.id} image={beb.image} name={beb.desc} ingredients={beb.ingredientes} precio={beb.precio}/>
        })
        return (
            <div className='container-bebidas-catalog'>
                <h3>Bebidas</h3>
                {bebidasInComponents}
            </div>
        )
    }
}

export default connect()(BebidasComponent)