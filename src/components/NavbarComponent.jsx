import React, { Component } from 'react';
import "../css/navbar.css";
import logo from '../assets/images/logo-don-pizza.png';
import { BiCartAlt } from 'react-icons/bi';
import {connect} from 'react-redux';
import {switchShow} from '../redux/slices/cartSlice';

class NavbarComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            opcion: 0,
            opcion_scroll:0,
            amount_products:0,
            precio: 10000
        }
    }

    componentDidMount(){
        window.onscroll = () => {
            var y = window.scrollY;
            if(y > 80 && this.state.opcion_scroll === 0){
                this.setState({opcion_scroll:1})
                document.getElementById("container-nav").classList.add("container-nav-movement");
            }else if(y < 80 && this.state.opcion_scroll === 1){
                this.setState({opcion_scroll:0})
                document.getElementById("container-nav").classList.remove("container-nav-movement");
            }
        };

        var amount_products_ss = parseInt(sessionStorage.getItem("amount_products"));
        if(isNaN(amount_products_ss)){
            amount_products_ss = 0;
        }
        this.setState({
            amount_products: amount_products_ss
        })
    }

    minusCounterProducts = () => {
        let amount_products_ls = this.state.amount_products -1;
        if(this.state.amount_products >= 1){
            this.setState({
                amount_products: this.state.amount_products -1
            })
            sessionStorage.setItem("amount_products",amount_products_ls);
        }
    }

    plusCounterProducts() {
        console.log(this.state.estado);
    }

    render() {
        return (
            <div className='container-nav' id="container-nav">
                <a href="/" className='link-nav' ><img className="logo" srcSet={logo} alt="" /></a>
                <a href="/catalogo" className='link-nav'>CATÁLOGO</a>
                <a href="/personalizar" className='link-nav'>ÁRMALA</a>
                
                <BiCartAlt size='2.6rem' className='cart-nav' onClick={()=>this.props.switchShow()}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show
  });
const mapDispatchToProps = { switchShow };

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)