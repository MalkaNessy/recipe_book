import { Ingredient } from './../shared/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Schnitzel',
               'A super pupper Schnitzel - just try it!',
               'http://pngimg.com/uploads/schnitzel/schnitzel_PNG9.png',
               [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
                ]),
    new Recipe('Big Ben Burger with chips',
               'What else you need?',
               'http://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4130.png',
               [
                 new Ingredient('Buns', 2),
                 new Ingredient('Meat', 1),
                 new Ingredient('Tomatoes', 1),
                 new Ingredient('Cucumber', 2)
                ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngridientsToList(ingridients: Ingredient[]) {
    this.slService.addIngredients(ingridients);
  }

}
