import * as React from 'react';
import {observer} from 'mobx-react';
import {inject} from 'mobx-react';

import CategoryView from './CategoryView';

@inject('appStore')
@observer
export class CategoryListView extends React.Component<any, any> {

  render() {
    const store = this.props.appStore;
    return (
      <div className="category">
        <h2>Категории товаров</h2>
        <ul className="category-list">
        { store.categoryList.map(
            (category, idx) => <CategoryView category={ category } key={ idx } />
            ) 
        }
        </ul>
        <button className="btn category__add-btn" onClick={ this.onNewCategory }>
          Добавить категорию
        </button>
      </div>
    );
  }

  onNewCategory = () => {
    this.props.appStore.addCategory(prompt('Введите название новой категории:',''));
  }
}
