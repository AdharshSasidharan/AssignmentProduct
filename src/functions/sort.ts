/*
 * This module provides custom sorting functions for the ProductsController.
 */
import { Products } from "../entities/Products.entity";

/**
 * Sorts an array of Products based on the given query parameter 'sort'.
 * @param products Array of Products to be sorted.
 * @param sort The query parameter to sort by.
 * @returns The sorted array of Products.
 */
export function customSort(products: Products[], sort: string | undefined): Products[] {
  if (sort === "weighted_score") {
    return mergeSort(products, compareByWeightedScore);
  } else if (sort === "created_at") {
    return mergeSort(products, compareByCreatedAt);
  } else {
    return products;
  }
}


/**
 * Compares two Products based on their weighted score.
 * @param a The first Product.
 * @param b The second Product.
 * @returns A number indicating the order of the two Products in the sorted array.
 */
function compareByWeightedScore(a: Products, b: Products): number {
  const weightedScoreA = calculateWeightedScore(a);
  const weightedScoreB = calculateWeightedScore(b);

  if (weightedScoreA === weightedScoreB) {
    return a.ProductName.localeCompare(b.ProductName);
  }

  return weightedScoreB - weightedScoreA;
}

/**
 * Calculates the weighted score for a Product.
 * @param product The Product to calculate the weighted score for.
 * @returns The weighted score of the Product.
 */
function calculateWeightedScore(product: Products): number {
  return (
    0.5 * (product.ProductRating / 5) +
    0.2 * (product.ProductQuantity / 100) +
    0.3 * (product.ProductPrice / 1000)
  );
}

/**
 * Compares two Products based on their creation date.
 * @param a The first Product.
 * @param b The second Product.
 * @returns A number indicating the order of the two Products in the sorted array.
 */
function compareByCreatedAt(a: Products, b: Products): number {
  return a.createdAt.getTime() - b.createdAt.getTime();
}

/**
 * Compares two Products based on their creation date.
 * @param a The first Product.
 * @param b The second Product.
 * @returns A number indicating the order of the two Products in the sorted array.
 */
function mergeSort(arr: Products[], compareFunction: (a: Products, b: Products) => number): Products[] {
  if (arr.length <= 1) {
    return arr;
  }

  const half: number = Math.floor(arr.length / 2);
  const first: Products[] = mergeSort(arr.slice(0, half), compareFunction);
  const second: Products[] = mergeSort(arr.slice(half), compareFunction);

  return merge(first, second, compareFunction);
}


/**
 * Merges two sorted arrays of Products.
 * @param a The first sorted array of Products.
 * @param b The second sorted array of Products.
 * @param compareFunction The function used to compare two Products.
 * @returns The merged and sorted array of Products.
 */
function merge(
  a: Products[],
  b: Products[],
  compareFunction: (a: Products, b: Products) => number
): Products[] {
  const c: Products[] = [];

  while (a.length && b.length) {
    if (compareFunction(a[0], b[0]) <= 0) {
      c.push(a.shift()!);
    } else {
      c.push(b.shift()!);
    }
  }

  while (a.length) {
    c.push(a.shift()!);
  }

  while (b.length) {
    c.push(b.shift()!);
  }

  return c;
}
