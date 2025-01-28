/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listItems = `
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

export const getItem = `
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