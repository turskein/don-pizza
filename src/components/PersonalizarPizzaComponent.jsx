import React, { Component } from 'react';
import {connect} from 'react-redux';

class PersonalizarPizzaComponent extends Component {

    render(){
        return (
            <div className='container-person'>
                jaj
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    estado: state.stateShow.show
});

export default connect(mapStateToProps)(PersonalizarPizzaComponent)