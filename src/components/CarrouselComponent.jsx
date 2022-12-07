import React, { Component } from 'react';
import pizzaAmericana from '../assets/images/americana-lala.png';
import pizzaHawaiana from '../assets/images/hawaiana-lala.png';
import "../css/carrousel.css";
import { BsArrowLeftSquare, BsArrowRightSquare} from 'react-icons/bs';

class CarrouselComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            opcion : 0,
            image : pizzaAmericana
        }
    }

    

    shiftImage = async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        if(this.state.opcion === 0){
            document.getElementById("image-carrousel").classList.add("hide-image");
            await delay(100);
            this.setState({
                image:pizzaHawaiana,
                opcion: 1
            })
            document.getElementById("image-carrousel").classList.remove("hide-image");
        }else if(this.state.opcion === 1){
            document.getElementById("image-carrousel").classList.add("hide-image");
            await delay(100);
            setTimeout(()=>{}, 2000);
            this.setState({
                image:pizzaAmericana,
                opcion: 0
            })
            document.getElementById("image-carrousel").classList.remove("hide-image");
        }
    }
    

    render() {
        return (
            <div className='container-carrousel'>
                <BsArrowLeftSquare className='arrow left-arrow' onClick={this.shiftImage}/>
                <BsArrowRightSquare className='arrow right-arrow' onClick={this.shiftImage}/>

                <img className="carrousel-image" srcSet={this.state.image} id="image-carrousel" alt=''/>
            </div>
        )
    }
}

export default CarrouselComponent