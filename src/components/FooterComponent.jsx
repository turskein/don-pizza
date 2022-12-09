import React, { Component } from 'react';
import "../css/footer.css";
import { connect } from 'react-redux';
import pizzamusculosa from '../assets/images/pizzamusculosasinfondo.png';

class FooterComponent extends Component {
    render(){
        return(
            <div className='container-footer'>
                <img srcSet={pizzamusculosa} alt="" className='pizza-footer' />
                <table className='table-footer'>
                    <thead>
                        <th>
                            Don Pizza
                        </th>
                        <th>
                            Productos
                        </th>
                        <th>
                            Compañia
                        </th>
                        <th>
                            Trabaja con nosotros
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Preguntas</td>
                            <td>Pizzas</td>
                            <td>Historia</td>
                            <td>Facebook</td>
                        </tr>
                        <tr>
                            <td>Ayuda</td>
                            <td>Nutrición</td>
                            <td>Desarrollo</td>
                            <td>Instagram</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Motivación</td>
                            <td>Twitter</td>
                        </tr>
                        <tr></tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show
});

export default connect(mapStateToProps)(FooterComponent);