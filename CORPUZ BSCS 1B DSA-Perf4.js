/*
CORPUZ CHARLES ADRIAN G.
BSCS 1B 

 3 Simple Sorting Algorithms (Easy Level)
1. Bubble Sort
(a) Description:

Repeatedly compares adjacent elements and swaps them if they are in the wrong order.

Simple but not efficient for large datasets.

(b) Sample Code:*/
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            // Swap if the current item is greater than the next
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([5, 1, 4, 2, 8]));

/*
2. Selection Sort
(a) Description:

Selects the smallest element and swaps it with the first unsorted element.

Simple but inefficient for large arrays.

(b) Sample Code:*/
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        // Find the smallest in the remaining array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum with the first element
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
console.log(selectionSort([29, 10, 14, 37, 13]));

/*
3. Insertion Sort
(a) Description:

Builds the sorted array one item at a time by inserting elements into their correct position.

Efficient for small or nearly sorted datasets.

(b) Sample Code:
*/
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j = i - 1;
        // Shift elements that are greater than current to the right
        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}
console.log(insertionSort([9, 5, 1, 4, 3]));

/*
2 Intermediate Sorting Algorithms (Medium Level)

4. Merge Sort
(a) Description:

A divide-and-conquer algorithm that splits the array in halves, sorts recursively, and merges the results.

Time complexity is O(n log n).

(b) Sample Code:*/
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    // Compare each element and merge
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));

/*
5. Quick Sort
(a) Description:

Uses a pivot element to partition the array such that elements less than the pivot go left, others go right.

Fast on average, O(n log n), but worst-case is O(n²).

(b) Sample Code:*/
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];

    // Partitioning the array
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    // Recursively sort and combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}
console.log(quickSort([10, 7, 8, 9, 1, 5]));

/*
1 Complex Sorting Algorithm (Hard Level)

6. Heap Sort
(a) Description:

Uses a binary heap structure to sort elements.

Good for memory efficiency and guarantees O(n log n) time.

(b) Sample Code:*/
function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Swap current root with end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

function heapify(arr, n, i) {
    let largest = i;        // Initialize largest as root
    let left = 2 * i + 1;   // left child
    let right = 2 * i + 2;  // right child

    // If left is larger than root
    if (left < n && arr[left] > arr[largest]) largest = left;

    // If right is larger than largest so far
    if (right < n && arr[right] > arr[largest]) largest = right;

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest); // Recursively heapify the affected subtree
    }
}
console.log(heapSort([12, 11, 13, 5, 6, 7]));