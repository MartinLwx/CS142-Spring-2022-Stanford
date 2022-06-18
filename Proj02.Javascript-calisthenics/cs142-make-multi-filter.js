'use strict';

function cs142MakeMultiFilter(originArray) {
    let currentArray = originArray;

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        } else {
            currentArray = currentArray.filter(filterCriteria);
            if (typeof callback === 'function') {
                callback.call(originArray, currentArray);
            }
        }
        return arrayFilterer;
    }
    
    return arrayFilterer;
}