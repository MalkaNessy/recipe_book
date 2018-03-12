import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  detailsData: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe
      .subscribe((recipe: Recipe) => {
        this.detailsData = recipe;
      })
  }

  setRecipeDetails(selectedRecipe: Recipe) {
    this.detailsData = selectedRecipe;
  }

}
