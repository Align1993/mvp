// 插入排序： 

function insertSort(arr) {
    var temp, i, j;
    for (i = 0; i < arr.length; i++) {
        j = i;
        temp = arr[i];
        while (j > 0 && arr[j - 1] >= temp) {
            arr[j] = arr[j - 1];
            --j;
        }
        arr[j] = temp;
    }
    return arr;
}

// 外层首位开始遍历，内层遍历前面元素是否大于或等于外层当前元素，大于及后置，且将下标--，赋值temp

console.log(insertSort([4, 3, 2, 5, 64]));


// 冒泡排序




function bubbleSort(arr) {
    for (var j = arr.length - 1; j > 0; j--) {
        for (var i = 0; i < j; ++i) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}


// 外层从末位开始遍历，内层则负责遍历外层第j个元素前面的所有元素，判断相邻的两个元素的大小，将大的位置像右调
console.log(bubbleSort([9, 4, 6, 7]))


// 选择排序

function selectionSort(arr) {
    var min, temp, mark;
    for (var i = 0, len = arr.length - 1; i < len; ++i) {
        min = i;
        for (var j = i + 1; j <= len; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
}


