import { gql } from "@apollo/client";

export const GET_ALL_PRODUCTS = gql`query{
  categories{
    name
    products{
      id
      name
      gallery
      inStock
      attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
      prices{
        currency
        amount
      }
    }
  } 
}`;

export const GET_CATEGORIES = gql`query {
  categories{
    name
  }
}`;

export const GET_PRODUCTS_BY_CATEGORY = gql`query CategoryQuery($categoryName: CategoryInput) {
  category(input: $categoryName) {
    name
    products {
      id
      name
      gallery
      inStock
      attributes {
        id
        name
        type
        items {
          displayValue
          id
          value
        }
      }
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
  }
}`;

export const PRODUCT_DETAILS = gql`
query ProductQuery($productId: String!) {
  product(id: $productId) {
    id
    name
    gallery
    description
    inStock
    attributes {
      id
      name
      type
      items {
        displayValue
        id
        value
      }
    }
    prices {
      currency{
        label
        symbol
      }
      amount
    }
    brand
  }
}
`;

export const GET_CURRENCIES = gql`query{
  currencies{
    label
    symbol
  }
}`;

export const GET_PRICES = gql`query {
  category(input: {title: "all"}){
    name
    products {
      id
      prices {
        currency{
          symbol
          label
        }
        amount
      }
    }
  }
}`;



