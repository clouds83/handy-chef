import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private _recipes: Recipe[] = [
    {
      id: '1',
      name: "Grandma's Special Pizza",
      servings: 4,
      time: 75,
      image:
        'https://img.cybercook.com.br/receitas/559/pizza-de-presunto-e-mussarela-2-840x480.jpeg',
      instructions:
        'Lorem ipsum dolor sit amet gravida lorem ipsum dolor sit amet gravida lorem ipsum dolor sit amet gravida lorem ipsum dolor sit amet gravida lorem ipsum.',
      ingredients: [
        {
          amount: 1,
          unit: '',
          ingredient: 'Onion',
        },
        {
          amount: 250,
          unit: 'grams',
          ingredient: 'Cheese',
        },
        {
          amount: 0.5,
          unit: 'Kg',
          ingredient: 'Flour',
        },
        {
          amount: 100,
          unit: 'grams',
          ingredient: 'Olive',
        },
        {
          amount: 3,
          unit: '',
          ingredient: 'Tomato',
        },
        {
          amount: 50,
          unit: 'grams',
          ingredient: 'Garlic',
        },
        {
          amount: 25,
          unit: 'grams',
          ingredient: 'Basil',
        },
        {
          amount: 50,
          unit: 'grams',
          ingredient: 'Parmesan',
        },
      ],
    },
    {
      id: '2',
      name: 'Nhoque da Hora',
      servings: 4,
      time: 120,
      image:
        'https://img.cybercook.com.br/receitas/598/como-fazer-nhoque-1-840x480.jpeg',
      instructions:
        'sd asd gasdg asfa dfh aefha dfb adfbadrba df s dfv sdfb se fb sefb sdfb sefb sdf',
      ingredients: [
        {
          amount: 1,
          unit: '',
          ingredient: 'Feijolão',
        },
        {
          amount: 250,
          unit: 'grams',
          ingredient: 'Chinelo',
        },
      ],
    },
  ];
  recipesChanged = new Subject<Recipe[]>();

  constructor() {}

  recipeId() {
    this._recipes.length;
  }

  get recipes() {
    return this._recipes;
  }

  getRecipe(id: any) {
    return { ...this._recipes.find((recipe) => recipe.id === id) };
  }

  getIndex(id: any) {
    return this._recipes.findIndex((recipe) => recipe.id === id);
  }

  addRecipe(recipe: Recipe) {
    this._recipes.push(recipe);
    this.recipesChanged.next(this._recipes);
  }

  updateRecipe(id: any, newRecipe: Recipe) {
    this._recipes[this.getIndex(id)] = newRecipe;
    this.recipesChanged.next(this._recipes.slice());
  }

  deleteRecipe(id: any) {
    this._recipes.splice(this.getIndex(id), 1);
    this.recipesChanged.next(this._recipes.slice());
  }
}
