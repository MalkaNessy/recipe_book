import { Recipe } from './../recipe.model';
import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }

  addToShoppingListHandler() {
    this.recipeService.addIngridientsToList(this.recipeDetail.ingridients);
  }

}
