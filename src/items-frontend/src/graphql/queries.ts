/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../../../API";
import { gql } from '@apollo/client';

type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      price
      category
      createdAt
      updatedAt
      __typename
    }
  }
`;

export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const itemsByName = /* GraphQL */ `
  query ItemsByName(
    $name: String!
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    itemsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        description
        price
        category
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

export const itemsByCategory = /* GraphQL */ `query ItemsByCategory(
  $category: String!
  $sortDirection: ModelSortDirection
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  itemsByCategory(
    category: $category
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      price
      category
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ItemsByCategoryQueryVariables,
  APITypes.ItemsByCategoryQuery
>;

export const LIST_ITEMS = gql`
  query ListItems {
    listItems {
      items {
        id
        name
        description
        price
        category
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_ITEM = gql`
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      description
      price
      category
      createdAt
      updatedAt
    }
  }
`;
