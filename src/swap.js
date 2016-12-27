import React, { Component } from 'react';

import './swap.css';
class Card extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            targetBCR: null,
            startX: 0,
            currentX: 0,
            targetX: 0,
            screenX:0
        }

    }
    init(e) {
       
  e.preventDefault();
        this.setState({
            startX: e.touches[0].clientX,
            targetBCR: e.target.getBoundingClientRect(),
            currentX: this.state.startX,

        })
    }
    log(e) {
        e.preventDefault();
        this.setState({
            currentX: e.pageX || e.touches[0].pageX
        })
      
        this.setState ({screenX : this.state.currentX - this.state.startX});
         const normalizedDragDistance =
        (Math.abs(this.state.screenX) / this.state.targetBCR.width);
        console.log("normalizedDragDistancesalim ", normalizedDragDistance)
    const opacity = 1 - Math.pow(normalizedDragDistance,0.5);
         console.log("opacity", opacity)
          e.target.style.transform=`translateX(${this.state.screenX}px)`
           e.target.style.opacity= opacity
    }
    end(e) {
        const normalizedDragDistance =
        (Math.abs(this.state.screenX) / this.state.targetBCR.width);
        console.log("normalizedDragDistance", normalizedDragDistance)
        if(normalizedDragDistance>0.5){ 
                e.target.remove()
        }else{
            
              e.target.style.transform=`translateX(0px)`
               e.target.style.opacity=1
        }
        
    }
    handleChildUnmount(){
         this.setState ({screenX : 0, startX: 0,currentX:0 })
    }
    render() {
     
        return (
           
            <div onTouchStart={this.init.bind(this)} onTouchMove={this.log.bind(this)} onTouchEnd ={this.end.bind(this)} className="card">

                {this.props.name}
            </div>
           
        );
    }
}

export default Card;