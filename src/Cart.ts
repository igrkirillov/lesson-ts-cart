import Buyable from "./Buyable";

export default class Cart {
    private items: Buyable[] = [];

    addItem(item: Buyable): void {
        this.items.push(item);
    }

    removeItemById(id: number): void {
        const foundIndex = this.items.findIndex(item => item.id === id);
        if (foundIndex >= 0) {
            this.items.splice(foundIndex, 1);
        }
    }

    getAll(): Buyable[] {
        return [...this.items];
    }

    calcTotalCost(): number {
        return this.items.reduce((total, item) => total += item.price, 0);
    }

    calcTotalCostWithDiscount(discount: number): number {
        const totalCost = this.calcTotalCost();
        return +(totalCost - totalCost * discount).toFixed(2);
    }
}