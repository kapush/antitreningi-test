import * as React from 'react';
import {observer} from 'mobx-react';
import {inject} from 'mobx-react';

import {GoodsView} from './GoodsView';

@inject('appStore')
@observer
export class GoodsListView extends React.Component<any, any> {

  render() {
    const store = this.props.appStore;
    const goodsList = store.getGoodsList(this.props.category.name)
    return (
      <div className="goods">
        <h3>Список товаров</h3>
        <table className="goods-list">
          <thead>
            <tr><td>Название</td><td>Цена</td><td>Добавить</td></tr>
          </thead>
          <tbody>
          { goodsList.map(
              (goods, idx) => <GoodsView goods={ goods } key={ idx } />
              ) 
          }
          </tbody>
        </table>
        <button className="btn goods__add-btn" onClick={ this.onNewGoods }>Создать новый товар</button>
      </div>
    );
  }

  onNewGoods = () => {
    const name = prompt('Введите название товара:','');
    const price: number = parseFloat(prompt('Введите цену товара:',''));

    if(isNaN(price)){ 
      alert("Ошибка: цена должна быть числом."); 
      return; 
    }

    this.props.appStore.addGoods(name, price, this.props.category.name);
  }
}