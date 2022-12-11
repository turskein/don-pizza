import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/person.css";
import logo from '../assets/images/pizzamusculosasinfondo.png';
import ListaIngredieentesComponent from './ListaIngredieentesComponent';

class PersonalizarPizzaComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tamanio: 0,
            quesoCant: 0,
            quesoTipo: 0,
            carne: 0,
            mcarne: 0,
            pep: 0,
            salch: 0,
            jam: 0,
            pollo: 0,
            tocino: 0,
            aceit: 0,
            choclo: 0,
            pina: 0,
            cebolla: 0,
            pimi: 0,
            champ: 0
        }
    }


    render() {
        let classFam = "button-person";
        let classPers = "button-person";
        let classMed = "button-person";
        if (this.state.tamanio === 0) {
            classMed ="button-person selected";
            classFam = "button-person";
            classPers ="button-person";

        } else if (this.state.tamanio === 1) {
            classMed ="button-person";
            classFam = "button-person selected";
            classPers ="button-person";
        } else {
            classMed ="button-person";
            classFam = "button-person";
            classPers ="button-person selected";
        }

        let normQueso = "button-person";
        let extQueso = "button-person";
        let dobleQueso = "button-person";

        if (this.state.quesoCant === 0) {
            normQueso ="button-person selected";
            extQueso = "button-person";
            dobleQueso ="button-person";

        } else if (this.state.quesoCant === 1) {
            normQueso ="button-person";
            extQueso = "button-person selected";
            dobleQueso ="button-person";
        } else {
            normQueso ="button-person";
            extQueso = "button-person";
            dobleQueso ="button-person selected";
        }

        let goudaQueso = "button-person";
        let mozzQueso = "button-person";

        if (this.state.quesoTipo === 0) {
            goudaQueso ="button-person selected";
            mozzQueso = "button-person";

        } else if (this.state.quesoTipo === 1) {
            goudaQueso ="button-person";
            mozzQueso = "button-person selected";
        }

        let carne = "button-person";
        if(this.state.carne === 1){
            carne = "button-person selected";
        }
        let mcarne = "button-person";
        if(this.state.mcarne === 1){
            mcarne = "button-person selected";
        }
        let pep = "button-person";
        if(this.state.pep === 1){
            pep = "button-person selected";
        }
        let salch = "button-person";
        if(this.state.salch === 1){
            salch = "button-person selected";
        }
        let jam = "button-person";
        if(this.state.jam === 1){
            jam = "button-person selected";
        }
        let pollo = "button-person";
        if(this.state.pollo === 1){
            pollo = "button-person selected";
        }
        let tocino = "button-person";
        if(this.state.tocino === 1){
            tocino = "button-person selected";
        }
        let aceit = "button-person";
        if(this.state.aceit === 1){
            aceit = "button-person selected";
        }
        let choclo = "button-person";
        if(this.state.choclo === 1){
            choclo = "button-person selected";
        }
        let pina = "button-person";
        if(this.state.pina === 1){
            pina = "button-person selected";
        }
        let cebolla = "button-person";
        if(this.state.cebolla === 1){
            cebolla = "button-person selected";
        }
        let pimi = "button-person";
        if(this.state.pimi === 1){
            pimi = "button-person selected";
        }
        let champ = "button-person";
        if(this.state.champ === 1){
            champ = "button-person selected";
        }
        return (
            <div className='container-person'>
                <div className='header-person'>
                    <img srcSet={logo} alt="" />
                    <h5>Ármala Tu mismo</h5>
                </div>
                <div className='sect-person'>
                    <h3>
                        Tamaño
                    </h3>
                    <div className='subdiv-sect-person div-tamanio-person'>
                        <button className={classMed} onClick={()=>{this.setState({tamanio:0})}} id="med">Mediana</button>
                        <button className={classFam} onClick={()=>{this.setState({tamanio:1})}} id="fam">Familiar</button>
                        <button className={classPers} onClick={()=>{this.setState({tamanio:2})}} id="pers">Personal</button>
                    </div>
                    <h3>
                        Queso
                    </h3>
                    <div className='subdiv-sect-person div-queso-person'>
                        <h4>Cantidad</h4>
                        <div className='div-queso-cant-person'>
                            <button className={normQueso} onClick={()=>{this.setState({quesoCant:0})}}>Normal</button>
                            <button className={extQueso} onClick={()=>{this.setState({quesoCant:1})}}>Extra</button>
                            <button className={dobleQueso} onClick={()=>{this.setState({quesoCant:2})}}>Doble</button>
                        </div>
                        <h4>Tipo</h4>
                        <div className='div-queso-tipo-person'>
                            <button className={goudaQueso} onClick={()=>{this.setState({quesoTipo:0})}}>Gouda</button>
                            <button className={mozzQueso} onClick={()=>{this.setState({quesoTipo:1})}}>Mozzarella</button>
                        </div>
                    </div>
                    <h3>
                        Carnes
                    </h3>
                    <div className='subdiv-sect-person div-carnes-person'>
                        <button className={carne} onClick={()=>{this.setState({carne:Math.abs(this.state.carne-1)})}} >Carne</button>
                        <button className={mcarne} onClick={()=>{this.setState({mcarne:Math.abs(this.state.mcarne-1)})}}>Carne Mechada</button>
                        <button className={pep} onClick={()=>{this.setState({pep:Math.abs(this.state.pep-1)})}}>Pepperoni</button>
                        <button className={salch} onClick={()=>{this.setState({salch:Math.abs(this.state.salch-1)})}}>Salchicha</button>
                        <button className={jam} onClick={()=>{this.setState({jam:Math.abs(this.state.jam-1)})}}>Jamón</button>
                        <button className={pollo} onClick={()=>{this.setState({pollo:Math.abs(this.state.pollo-1)})}}>Pollo</button>
                        <button className={tocino} onClick={()=>{this.setState({tocino:Math.abs(this.state.tocino-1)})}}>Tocino</button>
                    </div>
                    <h3>
                        Vegetales
                    </h3>
                    <div className='subdiv-sect-person div-vegetales-person'>
                        <button className={aceit} onClick={()=>{this.setState({aceit:Math.abs(this.state.aceit-1)})}}>Aceitunas</button>
                        <button className={choclo} onClick={()=>{this.setState({choclo:Math.abs(this.state.choclo-1)})}}>Choclo</button>
                        <button className={pina} onClick={()=>{this.setState({pina:Math.abs(this.state.pina-1)})}}>Piña</button>
                        <button className={cebolla} onClick={()=>{this.setState({cebolla:Math.abs(this.state.cebolla-1)})}}>Cebolla</button>
                        <button className={pimi} onClick={()=>{this.setState({pimi:Math.abs(this.state.pimi-1)})}}>Pimientos</button>
                        <button className={champ} onClick={()=>{this.setState({champ:Math.abs(this.state.champ-1)})}}>Champiñones</button>
                    </div>
                </div>
                <ListaIngredieentesComponent ingred={this.state}/>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show
});



export default connect(mapStateToProps)(PersonalizarPizzaComponent)