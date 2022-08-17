'use strict'; 

export function bubbleSort(toSort) {
    const sorted = [...toSort];
    if (toSort.length > 1) {
        let done = false;
        while (!done) {
            done = true;
            for (let i = 1; i < toSort.length; i++) {
                const prev = sorted[i-1];
                const curr = sorted[i];
                if (prev > curr) {
                    done = false;
                    sorted[i-1] = curr;
                    sorted[i] = prev;
                }
            }
        }
    }
    return sorted;
}

export function insertSort(toSort) {
    const sorted = [...toSort];
    if (toSort.length > 1) {
        for (let i = 1; i < toSort.length; i++) {
            let h = i - 1;
            const curr = sorted[i];
            while ((h >= 0) && (curr < sorted[h])) {
                sorted[h+1] = sorted[h];
                h--;
            }
            sorted[h+1] = curr;
        }
    }
    return sorted;
}

function merge(left, right) {
    const sorted = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            sorted.push(left.shift());
        } else {
            sorted.push(right.shift());
        }
    }
    return [...sorted, ...left, ...right];
}

export function mergeSort(toSort) {
    const sorted = [...toSort];
    const half = sorted.length/2;
    if (sorted.length <= 1) {
        return sorted;
    }
    const left = sorted.splice(0, half);
    return merge(mergeSort(left), mergeSort(sorted));
}

function pivot(value, left, right) {
    const sorted = [value];
    while (left.length) {
        if (left[0] < value) {
            sorted.unshift(left.shift());
        } else {
            sorted.push(left.shift());
        }
    }
    while (right.length) {
        if (right[0] < value) {
            sorted.unshift(right.shift());
        } else {
            sorted.push(right.shift());
        }
    }
}

export function quickSort(toSort) {
    if (toSort.length <= 1) {
        return toSort;
    }
    const pivotIndex = Math.ceil(toSort.length/2)
    const pivot = toSort[pivotIndex];

    const left = [];
    const right = [];

    for (let i = 0; i < toSort.length; i++) {
        if (pivotIndex == i) {
            continue;
        }
        toSort[i] < pivot ? left.push(toSort[i]) : right.push(toSort[i]);
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

export function binarySearch(array, value) {
    let start = 0;
    let end = array.length - 1;

    while (start <= end) {
        const middle = Math.ceil((start + end) / 2);

        if (value == array[middle]) {
            return middle;
        } else if (array[middle] < value) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false
}
