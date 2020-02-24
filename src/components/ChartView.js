import React, { Component } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import {connect} from 'react-redux';
import { fetchData } from '../actions/getData';

class ChartView extends Component {

    componentDidMount() {

        this.props.fetchData();

    }

GenerateData() {

        const originalArray = this.props.countries;
        const namesarray = [];
        const sizearray = [];
        const populationarray = [];
        for (let i = 0; i < originalArray.length; i++) {
            namesarray[i] = originalArray[i]['country'];
            sizearray[i] = originalArray[i]['size'];
            populationarray[i] = originalArray[i]['population'];
        }

        // razdvajanje originalnih podataka u više arrayeva da ih možemo učitati u victory chart

        return (
                <VictoryChart
                    theme={VictoryTheme.material}
                    domainPadding={20}
                    width={600}
                    height={300}
                >

                    <VictoryBar
                        width={100} height={300} padding={{left: 10, right: 10}}
                        barRatio={0.5}
                        alignment="middle"
                        style={{ data: { fill: "#c43a31" } }}
                        data={this.props.countries}
                        x="country"
                        y="population"
                    />

                </VictoryChart>

        )

    }

    render() {

        return (
            <div>
                <div class="text-left">
                 <p class="lead">Total population of rendered countries:</p>
            </div>
                {this.GenerateData()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    };
};

export default connect(mapStateToProps, { fetchData })(ChartView)


