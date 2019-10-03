import * as React from 'react';
import {inject} from 'mobx-react';
import {observer} from 'mobx-react';

@inject('appStore')
@observer
export class PurchaseView extends React.Component<any, any>{
    render(){
        const purchase = this.props.purchase; 
        const goods = this.props.appStore.getGoodsByName(purchase.goodsName);
        const classLineThrough = purchase.completed ? 'line-through' : '';
        return (
            <tr className={classLineThrough}>
                <td>{purchase.goodsName}</td>
                <td>{purchase.count}</td>
                <td>{goods.price}</td>
                <td><input
                    type='checkbox'
                    checked={ purchase.completed }
                    onChange={ this.onToggleCompleted }
                    />
                </td>
                <td><button onClick={ this.onDeletePurchase }>⤫</button></td>
            </tr>
        )
    }

    onDeletePurchase = () => {
        this.props.appStore.purchaseList = this.props.appStore.purchaseList.filter(item => 
            item !== this.props.purchase);
    }

    onToggleCompleted = () => {
        this.props.purchase.completed = !this.props.purchase.completed;
    }
}