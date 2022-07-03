export abstract class Item {
	public description: string;
	public price: number;

	constructor(description: string, price: number) {
		this.description = description;
		this.price = price;
	}
}

export abstract class TaxItem extends Item {
	constructor(description: string, price: number) {
		super(description, price);
	}

	abstract getTax(): number;

	calculateTax() {
		return this.price * this.getTax();
	}
}

export class Beer extends TaxItem {
	constructor(description: string, price: number) {
		super(description, price);
	}

	getTax() {
		return 0.2;
	}
}

export class Cigar extends TaxItem {
	constructor(description: string, price: number) {
		super(description, price);
	}

	getTax() {
		return 0.25;
	}
}

export class Eletronics extends TaxItem {
	constructor(description: string, price: number) {
		super(description, price);
	}

	getTax() {
		return 0.3;
	}
}

export class Water extends Item {
	constructor(description: string, price: number) {
		super(description, price);
	}
}
