/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(arr = []) {
    var arrAnswers=[];
	for (var i = 0; i<arr.length; i++){

  		if (i==arr[arr[arr[i]-1]-1]-1 && arr[i]!=arr[arr[i]-1] && arrAnswers.indexOf(arr[i])<0){
    		arrAnswers.push(arr[i], arr[arr[i]-1], arr[arr[arr[i]-1]-1]);
  		}
	}    
	return  arrAnswers.length/3;

};
