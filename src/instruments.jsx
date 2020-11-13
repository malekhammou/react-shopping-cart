import React, { Component } from 'react';
class Instruments extends Component {
   /*  WHAT IS STATE ? It's an object that represents the parts of the app that can change.
     Each component can maintain its own state */
    state = { instruments:[{id:0,label:"Piano",quantity:1},
    {id:1,label:"Guitar",quantity:15},{id:2,label:"Cello",quantity:2},
    {id:3,label:"Drums",quantity:5},{id:4,label:"Saxophone",quantity:14}] }   
    handleIncrement=(instrumentId)=>{
    let instruments=[...this.state.instruments];
    let instrument=instruments.find(instrument=>instrument.id===instrumentId);
    const index=instruments.indexOf(instrument)
    instrument.quantity+=1;
    instruments[index]=instrument;
    this.setState({instruments}) 
    console.log(this.state)
    }
    /* This is an event handler */
    handleDecrement=(instrumentId)=>{
        /* Never mutate the state directly ! */
        let instruments=[...this.state.instruments];
        let instrument=instruments.find(instrument=>instrument.id===instrumentId);
        const index=instruments.indexOf(instrument)
        instrument.quantity-=1;
        instruments[index]=instrument;
        this.setState({instruments}) 
        }
    render() { 
        const instruments=this.state.instruments
        return (<ul className="instruments">
           { instruments.map(instrument=><li className="instrument" key={instrument.id}>
<button className="controls" onClick={()=>this.handleIncrement(instrument.id)}>+</button>
    <p  className="instrument-label">{instrument.label}: <span>{instrument.quantity}</span></p>
<button className="controls" onClick={()=>this.handleDecrement(instrument.id)}>-</button>
        </li>) }
        </ul> );
    }
}
 
export default Instruments;