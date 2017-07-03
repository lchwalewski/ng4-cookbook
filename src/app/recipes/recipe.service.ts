import { Recipe } from 'app/recipes/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();
	recipes: Recipe[] = [
		new Recipe('Test', 'Simple test', 'http://www.fitbrains.com/blog/wp-content/uploads/2013/09/2ahi2c3.gif'),
		new Recipe('Test 1', 'Simple test 1', 'http://www.fitbrains.com/blog/wp-content/uploads/2013/09/2ahi2c3.gif')
	];

	getRecipes() {
		return this.recipes.slice();
	}
}
