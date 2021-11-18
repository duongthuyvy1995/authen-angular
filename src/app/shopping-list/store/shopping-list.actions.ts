import { Action } from '@ngrx/store';

import { Ingredient } from '../../shared/ingredient.model';
import { Product } from '../shopping-edit/product.model';

export const ADD_INGREDIENT = '[Shopping List] Add Ingredient';
export const ADD_INGREDIENTS = '[Shopping List] Add Ingredients';
export const UPDATE_INGREDIENT = '[Shopping List] Update Ingredient';
export const DELETE_INGREDIENT = '[Shopping List] Delete Ingredient';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';
export const GET_PRODUCT = '[Shopping List] Get Product';
export const GET_PRODUCT_SUCCESS = '[Shopping List] Get Product Success';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;

  constructor(public payload: Ingredient) { }
}

export class AddIngredients implements Action {
  readonly type = ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) { }
}

export class UpdateIngredient implements Action {
  readonly type = UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) { }
}

export class DeleteIngredient implements Action {
  readonly type = DELETE_INGREDIENT;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) { }
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}
export class GetProduct implements Action {
  readonly type = GET_PRODUCT;
}
export class GetProductSuccess implements Action {
  readonly type = GET_PRODUCT_SUCCESS;

  constructor(
    public payload: Product[]
  ) { }
}
export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit
  | GetProduct
  | GetProductSuccess;
