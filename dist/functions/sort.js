"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSort = void 0;
function customSort(products, sort) {
    if (sort === "weighted_score") {
        return mergeSort(products, compareByWeightedScore);
    }
    else if (sort === "created_at") {
        return mergeSort(products, compareByCreatedAt);
    }
    else {
        return products;
    }
}
exports.customSort = customSort;
function compareByWeightedScore(a, b) {
    const weightedScoreA = calculateWeightedScore(a);
    const weightedScoreB = calculateWeightedScore(b);
    if (weightedScoreA === weightedScoreB) {
        return a.ProductName.localeCompare(b.ProductName);
    }
    return weightedScoreB - weightedScoreA;
}
function calculateWeightedScore(product) {
    return (0.5 * (product.ProductRating / 5) +
        0.2 * (product.ProductQuantity / 100) +
        0.3 * (product.ProductPrice / 1000));
}
function compareByCreatedAt(a, b) {
    return a.createdAt.getTime() - b.createdAt.getTime();
}
function mergeSort(arr, compareFunction) {
    if (arr.length <= 1) {
        return arr;
    }
    const half = Math.floor(arr.length / 2);
    const first = mergeSort(arr.slice(0, half), compareFunction);
    const second = mergeSort(arr.slice(half), compareFunction);
    return merge(first, second, compareFunction);
}
function merge(a, b, compareFunction) {
    const c = [];
    while (a.length && b.length) {
        if (compareFunction(a[0], b[0]) <= 0) {
            c.push(a.shift());
        }
        else {
            c.push(b.shift());
        }
    }
    while (a.length) {
        c.push(a.shift());
    }
    while (b.length) {
        c.push(b.shift());
    }
    return c;
}
//# sourceMappingURL=sort.js.map