module.exports = {
    calcAllCombination
}

function calcAllCombination(length) {
    let allCombination = []
    let tempArray = generateArray(length)

    for(let i = 0; i < length; i++) {
        let combination = calcCombination(tempArray, i + 1);
        allCombination = allCombination.concat(combination)
    }

    return allCombination
}

function generateArray(length) {
    let toCombineArray = new Array(length)

    for (let i = 0; i < length; i++) toCombineArray[i] = i

    return toCombineArray
}


// 从数列array中，选取combinationCount个元素做组合，求出所有组合
function calcCombination(array, combinationCount) {
    let combinationArr = [],
        combination = []

    function doCalcCombination(array, combinationCount) {
        let length = array.length

        for (let i = 0; i < length; i++) {
            combination.push(array[i])

            let combinationLength = combination.length;
            if (combinationLength === combinationCount) {
                combinationArr.push(combination.slice())

                if (i === length - 1) {
                    combination.splice(-2, 2) // 当前循环完毕，去掉2个元素，分别是当前循环放入的元素和上个循环放入的元素，以便尝试上一个循环的下一个元素
                } else {
                    combination.pop() // 当前循环下一个，去掉当前循环上次放入的元素，尝试当前循环的下一个元素
                }
            } else {
                if (i === length - 1) {
                    combination.splice(-2, 2) // 当前循环完毕，去掉2个元素，分别是当前循环放入的元素和上个循环放入的元素，以便尝试上一个循环的下一个元素
                } else {
                    doCalcCombination(array.slice(i+1), combinationCount) // 当前循环不满足元素个数要求，从剩下的数组中，再依次选取元素
                }
            }
        }
    }
    doCalcCombination(array, combinationCount)

    return combinationArr
}

// let allCombination = calcAllCombination(6)
// let allCombination = calcCombination([1,2,3,4,5,6,7,8,9,10], 5)
// console.log(allCombination.length)
