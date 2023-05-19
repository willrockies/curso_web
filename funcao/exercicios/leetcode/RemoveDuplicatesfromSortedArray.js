var removeDuplicates = function(nums) {
    const uniqueElements = new Set(nums);
    const filteredElements = nums.filter(item => {
      if(uniqueElements.has(item)){
       // console.log(uniqueElements.has(item));
        uniqueElements.delete(item);
      }else {
        return item;
      }

    });

    console.log('has', [...new Set(filteredElements, nums)]);
    return [...new Set(filteredElements)]
};


//const arry = [1,1,2];
//console.log(removeDuplicates(arry))


var removeDuplicates = function(nums) {
  
  // 1st solution *
  //TIME-COMPLEXITY: O(n);
  //MEMORY: O(n);
  var deduplicatedSet = new Set(nums);
  var deduplicatedArray = Array.from(deduplicatedSet);
  for (var i = 0; i < deduplicatedArray.length; i++) {
    nums[i] = deduplicatedArray[i];
  }
  nums.length = deduplicatedArray.length;
  return nums.length;
}

//const arry = [1,1,2];
//console.log(removeDuplicates(arry))


var removeDuplicates = function(nums) {
  let duplicatedSet =  new Set(nums);
  let uniqueElements = Array.from(duplicatedSet);
  
  console.log(uniqueElements.length);
  for (var i = 0; i < uniqueElements.length; i++) {
    nums[i] = uniqueElements[i];  
  }

  nums.length = uniqueElements.length;
  return nums.length;
}

//console.log(removeDuplicates(arraay));


const removeDuplicatess = function (nums) {
  for(let i=0;i<nums.length;){
      if(nums[i] ===nums[i+1]){
          nums.splice(i,1)
      }else{
          i++
      }
  }
 };
 const arraay = [1,1,2];
 console.log(removeDuplicatess(arraay));

 var removeDuplicatesFaster = function(nums) {
    
  if(nums.length==0 ){
      return 0;
  }
  
  let c=1;
  
  for (let i=0;i < nums.length-1 ;i++){
      if(nums[i]<nums[i+1]){
          nums[c]=nums[i+1];
          c++
  
      }
  }
  return c;
};

console.log(removeDuplicatesFaster(arraay));