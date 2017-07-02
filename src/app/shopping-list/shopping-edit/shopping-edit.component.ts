import { Ingredient } from '../../shared/ingredient.model';

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
	selector: 'app-shopping-edit',
	templateUrl: './shopping-edit.component.html',
	styleUrls: [ './shopping-edit.component.css' ]
})
export class ShoppingEditComponent implements OnInit {
	@ViewChild('nameInput') nameInputRef: ElementRef;
	@ViewChild('amountInput') amountInputRef: ElementRef;
	@Output() ingredientAdd = new EventEmitter<Ingredient>();
	constructor() {}

	ngOnInit() {}
	onAdd() {
		const ingName = this.nameInputRef.nativeElement.value;
		const ingAmount = this.amountInputRef.nativeElement.value;
		const newIngredient = new Ingredient(ingName, ingAmount);
		this.ingredientAdd.emit(newIngredient);
	}
}
