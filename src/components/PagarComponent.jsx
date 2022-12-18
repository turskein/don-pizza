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
            propina: 0,
            pago: 0,
            recibo: 0
        }
    }

    finalizarCompra = () => {
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
            return <SummaryProductComponent cant={prd.cantidad} desc={prd.desc} ingredientes={prd.ingredientes} precio={prd.precio} />
        })
        let classPropnada = "button-entrega-pago";
        let classPropcinco = "button-entrega-pago";
        let classPropdiez = "button-entrega-pago";
        switch (this.state.propina) {
            case 0:
                classPropnada = classPropnada + " selected";
                break;
            case 1:
                classPropcinco = classPropcinco + " selected";
                break;
            case 2:
                classPropdiez = classPropdiez + " selected";
                break;
            default:
                break;
        }

        let pagoefe = "button-entrega-pago";
        let pagotarj = "button-entrega-pago";
        let pagoweb = "button-entrega-pago";
        switch (this.state.pago) {
            case 0:
                pagoefe = pagoefe + " selected";
                break;
            case 1:
                pagotarj = pagotarj + " selected";
                break;
            case 2:
                pagoweb = pagoweb + " selected";
                break;
            default:
                break;
        }

        let boleta = "button-entrega-pago";
        let factura = "button-entrega-pago";
        switch (this.state.recibo) {
            case 0:
                boleta = boleta + " selected";
                break;
            case 1:
                factura = factura + " selected";
                break;
            default:
                break;
        }

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
                            <button className={pagoefe} onClick={()=>this.setState({pago:0})}><BiMoney className='money-pago' /> Efectivo</button>
                            <button className={pagotarj} onClick={()=>this.setState({pago:1})}><BiCreditCard className='card-pago' />Tarjeta</button>
                            <button className={pagoweb} onClick={()=>this.setState({pago:2})}><img srcSet={webpay} alt="" className='img-pago' /> WebPay</button>
                        </div>
                        <div className='prop-pago'>
                            <h5>Propina</h5>
                            <button className={classPropnada} onClick={()=>this.setState({propina:0})}>Nada</button>
                            <button className={classPropcinco} onClick={()=>this.setState({propina:1})}>5%</button>
                            <button className={classPropdiez} onClick={()=>this.setState({propina:2})}>10%</button>
                        </div>
                        <div className='recibo-pago'>
                            <h5>Recibo</h5>
                            <button className={boleta} onClick={()=>this.setState({recibo:0})}>Boleta</button>
                            <button className={factura} onClick={()=>this.setState({recibo:1})}>Factura</button>
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