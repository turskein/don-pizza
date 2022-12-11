import React, { Component } from 'react';
import "../css/summaryproduct.css";

class SummaryProductComponent extends Component {
    render(){
        let ingredientes = this.props.ingredientes;
        let cells = ingredientes.map((ingr) =>{
            return <tr><td className='table-ingr-summary-product'>{ingr}</td></tr>
        })
        return(
            <div className='container-summary-product'>
                <div>
                <span className='cant-summary-product'>{this.props.cant} x </span>
                <span className='desc-summary-product'>{this.props.desc}</span>
                <span className='precio-summary-product'>{this.props.precio*this.props.cant}</span>
                </div>
                <div className='ingredients-summary-product'>
                    <table>
                        <tbody>{cells}</tbody>
                    </table>
                    
                </div>
                
                
                
            </div>
        )
    }

}

export default SummaryProductComponent