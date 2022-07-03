import { Item, TaxItem } from './Item';

export default class Order {
	public items: (TaxItem | Item)[];

	constructor() {
		this.items = [];
	}

	addItem(item: TaxItem | Item) {
		this.items.push(item);
	}

	getTotal() {
		return this.items.reduce((total, item) => total + item.price, 0);
	}

	getTaxes() {
		let totalTaxes = 0;

		for (const item of this.items) {
			if (item instanceof TaxItem) totalTaxes += item.calculateTax();
		}

		return totalTaxes;
	}
}
