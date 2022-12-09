import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/agregadocatalago.css";
import {everyagregado} from '../assets/agregados/everyagregado';
import FrameAgregadoComponent from './FrameAgregadoComponent';

class AgregadosCatalogoComponent extends Component {
    render(){
        let bebidasInComponents = everyagregado.map((beb)=>{
            return <FrameAgregadoComponent id={beb.id} image={beb.image} name={beb.desc} ingredients={beb.ingredientes} precio={beb.precio}/>
        })
        return (
            <div className='container-bebidas-catalog'>
                <h3>Agregados</h3>
                {bebidasInComponents}
            </div>
        )
    }
}

export default connect()(AgregadosCatalogoComponent)