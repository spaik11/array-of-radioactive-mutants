function changeLast(arr, val) {
  arr[arr.length - 1] = val;
}

function addMeToEnd(arr) {
  arr.push("Colin");
}

function addMeToStart(arr) {
  arr.unshift("Colin");
}

function changeAllValuesTo(arr, val) {
  let i = 0;
  while(i < arr.length) {
    arr[i] = val;
    i++;
  }
}

function oddOrEven(arr) {
  let i = 0;
  while(i < arr.length) {
    if(arr[i] % 2 === 1) {
      arr[i] = 'odd';
    } else {
      arr[i] = 'even';
    }
    i++;
  }
}

function changeNextThreeToValue(start, arr, val) {
  let i = start;
  
  while(i < arr.length) {
    arr[i] = val;
    i++;
  }
}

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}