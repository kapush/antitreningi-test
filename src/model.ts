export interface Category {
    name: string,
    goodsList?: Array<Goods>
}

export interface Goods {
    name: string,
    price: number,
    categoryName: string
}

export interface Purchase {
    goodsName: string,
    count: number,
    completed: boolean
}
