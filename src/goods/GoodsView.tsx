import * as React from 'react';
import {inject} from 'mobx-react';

@inject('appStore')
export class GoodsView extends React.Component<any, any>{
    render(){
        const goods = this.props.goods; 
        return (
            <tr>
                <td>{goods.name}</td>
                <td>{goods.price}</td>
                <td><button onClick={ this.onAddPurchase }>⟶</button></td>
            </tr>
        )
    }

    onAddPurchase = () => {
        this.props.appStore.addPurchase(this.props.goods.name);
    }
}