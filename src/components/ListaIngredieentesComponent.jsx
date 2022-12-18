import React, { Component } from 'react';
import "../css/listingred.css";

class ListaIngredieentesComponent extends Component {
    render() {
        let listIngred = [];
        let lsitIngredShow = [];
        let ingred = this.props.ingred;
        switch (ingred.tamanio) {
            case 0:
                listIngred.push("Mediana")
                break;
            case 1:
                listIngred.push("Familiar")
                break;
            case 2:
                listIngred.push("Personal")
                break;
            default:
                break;
        }

        switch (ingred.quesoCant) {
            case 0:
                listIngred.push("Normal")
                break;
            case 1:
                listIngred.push("Extra")
                break;
            case 2:
                listIngred.push("Doble")
                break;
            default:
                break;
        }
        switch (ingred.quesoTipo) {
            case 0:
                listIngred.push("Gouda")
                break;
            case 1:
                listIngred.push("Mozzarella")
                break;
            default:
                break;
        }

        switch (ingred.carne) {
            case 1:
                listIngred.push("Carne");
                lsitIngredShow.push("Carne")
                break;
            default:
                break;

        }

        switch (ingred.mcarne) {
            case 1:
                listIngred.push("Carne Mechada");
                lsitIngredShow.push("Carne Mechada")
                break;
            default:
                break;
        }
        switch (ingred.pep) {
            case 1:
                listIngred.push("Pepperoni");
                lsitIngredShow.push("Pepperoni");
                break;
            default:
                break;
        }
        switch (ingred.salch) {
            case 1:
                listIngred.push("Salchicha");
                lsitIngredShow.push("Salchicha");
                break;
            default:
                break;
        }
        switch (ingred.jam) {
            case 1:
                listIngred.push("Jamón");
                lsitIngredShow.push("Jamón");
                break;
            default:
                break;
        }
        switch (ingred.pollo) {
            case 1:
                listIngred.push("Pollo");
                lsitIngredShow.push("Pollo");
                break;
            default:
                break;
        }
        switch (ingred.tocino) {
            case 1:
                listIngred.push("Tocino");
                lsitIngredShow.push("Tocino");
                break;
            default:
                break;
        }
        switch (ingred.aceit) {
            case 1:
                listIngred.push("Aceitunas");
                lsitIngredShow.push("Aceitunas");
                break;
            default:
                break;
        }
        switch (ingred.choclo) {
            case 1:
                listIngred.push("Choclo");
                lsitIngredShow.push("Choclo");
                break;
            default:
                break;
        }
        switch (ingred.pina) {
            case 1:
                listIngred.push("Piña");
                lsitIngredShow.push("Piña");
                break;
            default:
                break;
        }
        switch (ingred.cebolla) {
            case 1:
                listIngred.push("Cebolla");
                lsitIngredShow.push("Cebolla");
                break;
            default:
                break;
        }
        switch (ingred.pimi) {
            case 1:
                listIngred.push("Pimientos");
                lsitIngredShow.push("Pimientos");
                break;
            default:
                break;
        }
        switch (ingred.champ) {
            case 1:
                listIngred.push("Champiñones");
                lsitIngredShow.push("Champiñones");
                break;
            default:
                break;
        }
        let precio = 2000 + 1500 + 600 +600*(lsitIngredShow.length)

        let jaja = lsitIngredShow.map((ingr) => {
            return <div className='ingred-list-ingred'>{ingr}</div>
        })

        return (
            <div className='list-ingred-container'>
                <h5 className='title-list-ingred'>Lista ingredientes de tu pizza</h5 >
                <div className='ingredients-list-ingred'>
                    <div className='caracs-list-ingred'>
                        <h6>Tamaño: {listIngred[0]}</h6>
                    </div>
                    <div className='caracs-list-ingred'>
                        <h6>Cantidad Queso: {listIngred[1]}</h6>
                    </div>
                    <div className='caracs-list-ingred'>
                        <h6>Tipo de Queso: {listIngred[2]}</h6>
                    </div>
                    <div className='extras-list-ingred'>
                        <h5>Extras</h5>
                        {
                            jaja
                        }
                    </div>
                </div>
                <button className='add-list-ingred' onClick={() => {this.props.addPersonalizedPizza({precio:precio,ingredientes:listIngred});this.props.switchShowAdded();}}><span>Agregar al Carrito</span> ${precio}</button>
            </div>
        )
    }
}


export default ListaIngredieentesComponent