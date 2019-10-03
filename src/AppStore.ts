import {observable} from 'mobx';
import {Category, Goods, Purchase} from './model';

export class AppStore {

    @observable categoryList: Array<Category> = [];
    @observable goodsList: Array<Goods> = [];
    @observable purchaseList: Array<Purchase> = [];

    @observable categoryOpened: string;

    getCategoryByName(categoryName: string): Category {
        return this.categoryList.find(item=>item.name === categoryName);
    }

    getGoodsByName(goodsName: string): Goods {
        return this.goodsList.find(item=>item.name === goodsName);
    }

	addCategory(categoryName: string): void {
		this.categoryList.push({
            name: categoryName
		});
    }
    addGoods(name: string, price: number, categoryName: string): void{
        this.goodsList.push({
            name: name,
            price: price,
            categoryName: categoryName
        });
    }  
    addPurchase(goodsName: string, count?: number): void{
        const purchase = this.purchaseList.find(item => item.goodsName === goodsName);
        if(purchase) {
            purchase.count++;
        } else {
            this.purchaseList.push({
                goodsName: goodsName,
                count: 1,
                completed: false
            });
        }
    }
    
    getGoodsList(categoryName: string): Array<Goods>{
        return this.goodsList.filter(item => item.categoryName === categoryName);
    }

    getPurchaseListSum(): number {
        return this.purchaseList.reduce((sum: number, current: Purchase) => {
            const goods = this.getGoodsByName(current.goodsName);
            return (current.count * goods.price + sum);
        }, 0);
    }

    getPurchaseListCompletedSum(): number {
        return this.purchaseList.reduce((sum: number, current: Purchase) => {
            const goods = this.getGoodsByName(current.goodsName);
            return current.completed ? (current.count * goods.price + sum) : sum;
        }, 0);
    }
}

const appStore = new AppStore();

appStore.addCategory('Продукты');
appStore.addCategory('Одежда');
appStore.addCategory('Техника');
appStore.addCategory('Цветы');

appStore.addGoods('вода', 50, 'Продукты');
appStore.addGoods('Вино', 500, 'Продукты');
appStore.addGoods('Ботинки', 2000, 'Одежда');
appStore.addGoods('Телевизор', 20000, 'Техника');
appStore.addGoods('Роза', 50, 'Цветы');
appStore.addGoods('Ромашка', 50, 'Цветы');

appStore.addPurchase('Телевизор', 2);
appStore.addPurchase('Роза', 1);
appStore.addPurchase('Ромашка', 1);

export default appStore;
