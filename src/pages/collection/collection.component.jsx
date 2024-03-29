import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = ({ match }) => {
  const { title, items } = collection;
  return (
    <div className='category'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownprops.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
