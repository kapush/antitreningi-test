import * as React from 'react';
import {observer} from 'mobx-react';
import {inject} from 'mobx-react';

import {PurchaseView} from './PurchaseView';

@inject('appStore')
@observer
export class PurchaseListView extends React.Component<any, any> {

  render() {
    const store = this.props.appStore;
    return (
        <div className="purchase">
            <h2>Список покупок</h2>
            <table className="purchase-list">
                <tbody>
                    { store.purchaseList.map(
                        (purchase, idx) => 
                        <PurchaseView className="purchase-List__item" 
                        purchase={ purchase } key={ idx } />
                        ) 
                    }
                </tbody>
            </table>
            <span className="purchase__sum">Сумма завершенных: {store.getPurchaseListCompletedSum()}</span>
            <span className="purchase__sum">Общая сумма: {store.getPurchaseListSum()}</span>
        </div>
    );
  }
}
