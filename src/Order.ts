import Item from './Item';

export default class Order {
	public items: Item[];

	constructor() {
		this.items = [];
	}

	addItem(item: Item) {
		this.items.push(item);
	}

	getTotal() {
		return this.items.reduce((total, current) => current.price + total, 0);
	}

	getTaxes() {
		let totalTaxes = 0;

		for (const item of this.items) {
			let tax = 0;
			if (item.category === 'Beer') tax = 0.2;
			if (item.category === 'Cigar') tax = 0.25;
			if (item.category === 'Eletronics') tax = 0.3;

			totalTaxes += item.price * tax;
		}

		return totalTaxes;
	}
}
