import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';

import appStore from '../src/AppStore';
import {CategoryListView} from './category/CategoryListView'
import {PurchaseListView} from './purchase-list/PurchaseListView'

export class App extends React.Component<any, any> {

    render() {
        return (
                <Provider appStore = { appStore } >
                    <div>
                        <CategoryListView />
                        <PurchaseListView />
                    </div>
                </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
