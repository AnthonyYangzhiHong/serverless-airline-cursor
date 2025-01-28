/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItemInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  price?: number | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name: string,
  description?: string | null,
  price?: number | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  price?: number | null,
  category?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  category?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  category?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      description?: string | null,
      price?: number | null,
      category?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByNameQueryVariables = {
  name: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByNameQuery = {
  itemsByName?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      description?: string | null,
      price?: number | null,
      category?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ItemsByCategoryQueryVariables = {
  category: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ItemsByCategoryQuery = {
  itemsByCategory?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name: string,
      description?: string | null,
      price?: number | null,
      category?: string | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name: string,
    description?: string | null,
    price?: number | null,
    category?: string | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
