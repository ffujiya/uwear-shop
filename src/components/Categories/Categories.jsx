import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { graphql } from '@apollo/client/react/hoc';
import { GET_CATEGORIES } from '../../queries/queries';
import { setActiveCategory } from '../../redux/actions';
import "./Categories.scss"

class Categories extends React.Component {

    onCategorySelect = (e) => {
        const activeCategory = e.target.innerHTML;
        this.props.setActiveCategory(activeCategory);
    }

    render() {
        const { data: { loading, error, categories },
            activeCategory
        } = this.props;

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error!</p>;

        let categoryNames = categories.map(itm => itm.name);

        return (
            <ul className="categories">
                {categoryNames.map((itm, index) => {
                    return (
                        <li className={`categories__item ${activeCategory === itm  ? 'active' : ''}`}
                            onClick={this.onCategorySelect}
                            key={`${index}_${itm}`}>
                            <Link to='/'>
                                {itm}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        activeCategory: state.activeCategory
    }
}

export default compose(
    connect(mapStateToProps, { setActiveCategory }),
    graphql(GET_CATEGORIES)
)(Categories);
