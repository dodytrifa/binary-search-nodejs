'use strict'

var testArrayGenap = [40, 18, 22, 32, 90, 10, 10, 22, 8]
var testArrayGanjil = [3, 31, 89, 53, 53, 85, 77, 21, 55]

/*
BEGIN ownSort
  PASS IN: arr parameter

  FOR i FROM 1 TO LENGTH OF arr INCREMENT BY 1
    STORE current as arr[i]
    STORE j as i MINUS BY 1

    WHILE j is MORE THAN  -1 AND current is LESS THAN arr[j]
      SET arr[j PLUS BY 1] with arr[j]
      j DECREMENT BY 1
    END WHILE
    SET arr[j PLUS 1] TO current  
  END FOR

  PASS OUT: arr
END
*/

function ownSort(arr) {
  // Your sorting code
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1
    while ((j > -1) && (current < arr[j])) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
}

/*
BEGIN binary_search
  PASS IN: two parameters search, and array
  
  STORE start as NUMBER WITH 0
  STORE end as LENGTH OF array MINUS BY 1

  WHILE start is LESS THAN EQUAL TO end
    SET mid WITH  ROUND DOWN OF start PLUS end DIVIDED BY 2
    IF array[mid] is EQUAL TO search
      PASS OUT: mid
    ELSE IF array[mid] is LESS THAN search
      SET start TO mid PLUS 1
    ELSE
    SET end TO mid MINUS BY 1  
    END IF
  END WHILE

  PASS OUT: -1
END
*/
function binary_search(search, array) {
  // Your searching code
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (array[mid] == search) {
      return mid
    } else if (array[mid] < search) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  return -1;
}

//tambahan dari gdrive
let test_array = [1, 2, 3, 4, 5]
console.log(binary_search(3, test_array) === 2);
test_array = [13, 19, 24, 29, 32, 37, 43]
console.log(binary_search(3, test_array) === -1)
test_array = [100, 120, 130, 135, 150, 170]
console.log(binary_search(3, test_array) === 3)

var arrayGenapSorted = ownSort(testArrayGenap)
var arrayGanjilSorted = ownSort(testArrayGanjil)

// Driver code
console.log(binary_search(8, arrayGenapSorted))
console.log(binary_search(10, arrayGenapSorted))
console.log(binary_search(33, arrayGenapSorted))

console.log(binary_search(53, arrayGanjilSorted))
console.log(binary_search(3, arrayGanjilSorted))
console.log(binary_search(2, arrayGanjilSorted))

module.exports = binary_search
