import * as React from 'react';
import {observer, inject} from 'mobx-react';

import {GoodsListView} from '../goods/GoodsListView';

@inject('appStore')
@observer
class CategoryView extends React.Component<any, any> {
  render() {
    const store = this.props.appStore;
    const category = this.props.category;

    return (
      <li className="category-list__item" onClick={ this.onToogleGoodsList }>
        { category.name }
        {(store.categoryOpened === this.props.category.name) ?
           <GoodsListView category={category} /> : ""
        }    
      </li>
    );
  }

  onToogleGoodsList = () => {
      const store = this.props.appStore;
      const currentCategory = this.props.category;
      
      store.categoryOpened = currentCategory.name;
  }
}

export default CategoryView;