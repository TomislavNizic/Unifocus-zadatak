import React, { Component } from 'react';
import {connect} from 'react-redux';

class NewRecord extends Component {
    constructor(props) {
        super(props);
        this.state = { valuepop: '', valuesize: '' };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.state.valuepop = '';
        this.state.valuesize = '';
        const country = this.getCountry.value;
        const size = this.getSize.value;
        const population = this.getPopulation.value;
        const data = {
            country,
            size,
            population
        };
        this.props.dispatch({
            type:'ADD_ROW',
            data});
        this.getCountry.value = '';
        this.getSize.value = '';
        this.getPopulation.value = '';

    };

    // dispatch novo submitanih podataka u state

    handlechangesize(evt) {
        const valuesize = (evt.target.validity.valid) ? evt.target.value : this.state.valuesize;

        this.setState({ valuesize });
    }

    handlechangepop(evt) {
        const valuepop = (evt.target.validity.valid) ? evt.target.value : this.state.valuepop;

        this.setState({ valuepop });
    }
    // Hendleri za number only polja

    render() {
    return (

        <form onSubmit={this.handleSubmit} className="ui form">
            <label>Submit new data into the table:</label>
            
            <input placeholder="Country name" name="country"
                   ref={(input)=>this.getCountry = input}  label="Country name:" />
            <input placeholder="Country size" name="size" pattern="[0-9]*" 
                   value={this.state.valuesize} onChange={this.handlechangesize.bind(this)}
                   ref={(input)=>this.getSize = input} label="Country size:" />
            <input placeholder="Country population" name="population"
                   ref={(input)=>this.getPopulation = input}
                   label="Country population:" pattern="[0-9]*" 
                   value={this.state.valuepop} onChange={this.handlechangepop.bind(this)}/>


            <button className="ui button primary">Submit</button>
        </form>
    );
}
}


export default connect()(NewRecord);