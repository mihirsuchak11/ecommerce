import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import { selectCollection } from '../../redux/shop/shopSelector';

import './Collection.scss';

const Collection = ({ match, collection: { title, items } }) => {

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <p className="items">
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </p>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection);
