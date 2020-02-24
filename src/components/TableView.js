import React, { Component } from 'react';
import Country from './Country';
import {connect} from 'react-redux';
import { fetchData } from '../actions/getData';
import NewRecord from './NewRecord';

class TableView extends Component {

    componentDidMount() {

        this.props.fetchData();

    }

    renderCountries() {
        return this.props.countries.map(
            (country, index) => {
                return (
                    <Country
                        key={`countryid-${index}`}
                        country={country.country}
                        size={country.size}
                        population={country.population}
                    />
                );
            })
    }

    render() {

        return (
            <div>
                <table>
                    <thead>
                        </thead>
                            <tbody>
                            {this.renderCountries()}
                            </tbody>
                </table>
                <NewRecord onSubmit={this.onSubmit} />
                </div>      
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    };
};


export default connect(mapStateToProps, { fetchData })(TableView)

// povezivanje uvezenih podataka u tablici sa redux storeom 