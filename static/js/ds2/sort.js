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