import React, { Component } from 'react';
import { connect } from 'react-redux';
import "../css/pagar.css";
import { BiMoney, BiCreditCard } from "react-icons/bi";
import webpay from "../assets/images/webpay.cc3e687fae60c3427fb81568a8531164.svg"
import SummaryProductComponent from './SummaryProductComponent';




class PagarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            dom: 0,
        }
    }

    finalizarCompra = ()=>{
        window.location.href = 'http://localhost:3000';
        localStorage.removeItem("products");
    }
    render() {
        let classDom;
        if (this.state.dom === 0) {
            classDom = "datos-entrega-dom-pago dontshowdom"
        } else {
            classDom = "datos-entrega-dom-pago";
        }

        let everyProduct = this.props.products;
        let showProducts = everyProduct.map((prd) => {
            return <SummaryProductComponent cant={prd.cantidad} desc={prd.desc} ingredientes={prd.ingredientes} precio={prd.precio}/>
        })

        return (
            <div className='container-pago'>
                <div className='firt-row-pago'>
                    <div className='sect-datos-pago'>
                        <h5>Completa tu perfil</h5>
                        <p>Nombre</p>
                        <input type="text" placeholder=' Ingresa tu nombre' />
                        <p>E-mail</p>
                        <input type="text" placeholder=' Ingresa tu e-mail' />
                        <p>Teléfono</p>
                        <input type="text" placeholder=' Ingresa tu número de teléfono' />
                    </div>
                    <div className='sect-entrega-pago'>
                        <div className='met-pago'>
                            <h5>Método de pago</h5>
                            <button><BiMoney className='money-pago' /> Efectivo</button>
                            <button><BiCreditCard className='card-pago' />Tarjeta</button>
                            <button><img srcSet={webpay} alt="" className='img-pago' /> WebPay</button>
                        </div>
                        <div className='prop-pago'>
                            <h5>Propina</h5>
                            <button>Nada</button>
                            <button>5%</button>
                            <button>10%</button>
                        </div>
                        <div className='recibo-pago'>
                            <h5>Recibo</h5>
                            <button>Boleta</button>
                            <button>Factura</button>
                        </div>

                    </div>
                </div>
                <div className='firt-row-pago'>
                    <div className='datos-entrega-pago'>
                        <h5>Datos entrega</h5>
                        <button onClick={() => this.setState({ dom: 1 })}> Entrega a domicilio</button>
                        <button onClick={() => this.setState({ dom: 0 })}> Entrega en tienda</button>
                        <div className={classDom}>
                            <span className='comuna-pago'>
                                <p>Comuna</p>
                                <select name="select">
                                    <option value="Santiago" selected>Santiago</option>
                                    <option value="Nunoa" >Nunoa</option>
                                    <option value="Macul">Macul</option>
                                </select>
                            </span>
                            <span className='calle-pago'>
                                <p>Calle</p>
                                <input type="text" placeholder='Ingresa el nombre de tu calle' />
                            </span>
                            <span className='num-pago'>
                                <p>Número</p>
                                <input type="text" placeholder='Ingresa el número de tu calle' />
                            </span>
                            <span className='depto-pago'>
                                <p>Departamento</p>
                                <input type="text" placeholder='Ingresa el número de tu departamento' />
                            </span>
                        </div>
                    </div>
                    <div className='summary-pago'>
                        <h5>Resumen compra</h5>
                        {showProducts}
                        <div>
                            Total: {this.props.total}
                        </div>
                        <button className='finish-pago' onClick={this.finalizarCompra}>Finalizar Pago</button>
                    </div>
                    
                </div>



            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    products: state.stateShow.products,
    total: state.stateShow.total,
});

export default connect(mapStateToProps)(PagarComponent)