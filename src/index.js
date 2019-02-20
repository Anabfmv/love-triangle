/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;  
    for (let i = 0; i<preferences.length; i++) { 
        let n1 = preferences[i] - 1;
        let n2 = preferences[n1] - 1;
        let n3 = preferences[n2] - 1;
        if (n1 == i || n1 == n2 || n3 == n2) continue;
        if (n3 == i) count++;
     }
     return count / 3;
};
