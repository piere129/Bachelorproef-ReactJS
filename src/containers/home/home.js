import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductsByCategory} from '../../actions/actions';
import Products from "../Products/Products";
import './Home.css';

export class HomeComponent extends Component {

    getItemsByCategory(category) {
        this.props.fetchProductsByCategory(category);
    }
    componentWillMount() {
        this.props.fetchProductsByCategory('all');
    }

    render() {
        const {items} = this.props;

        return (
            <div className="wrapper">
                <div className="block">
                    <h1>Products:</h1>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <p> Filter by category: </p>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('game')}>Game</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('household')}>Household</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('gadget')}>Gadget</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('movie')}>Movie</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('laptop')}>Laptops</button>
                        <button type="button" className="btn btn-secondary" onClick={() => this.getItemsByCategory('all')}>All</button>
                    </div>
                </div>
                <Products items={items}/>
                <hr/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        items: state.fetchProductsByCategoryReducer.items
    };
}

function mapDispatchToProps() {
    return {
        fetchProductsByCategory
    };
}

const Home = connect(
    mapStateToProps,
    mapDispatchToProps()
)(HomeComponent);

export default Home;
