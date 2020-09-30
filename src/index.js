

exports.min = function min (array) {
  if(array){
  let minVal = 0;
  for (let i = 0; i < array.length; i++){
    if(array[i] < minVal) minVal = array[i];
  }
  return minVal;
} else return 0;
}

exports.max = function max (array) {
  if(array){
  let maxVal = 0;
  for (let i = 0; i < array.length; i++){
    if(array[i] > maxVal) maxVal = array[i];
  }
  return maxVal;
} else return 0;
}

exports.avg = function avg (array) {
  if(array && array.length !==0){
  let sum = 0
  let avgVal = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  avgVal = sum / array.length;
  return avgVal;
} else return 0;
}
