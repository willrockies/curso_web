//Find the Difference in Age between Oldest and Youngest Family Members

function differenceInAges(ages) {
  
 
  const oldest = ages.reduce((prev, current) => {
    return  prev > current ? prev : current;
  
 
  });
  const newest = ages.reduce((prev, current) => {
    return  prev < current ? prev : current;
  
  });

  calcDiference = oldest - newest
  let difAges = [newest, oldest,  calcDiference];
  console.log(difAges);
}

differenceInAges([82, 15, 6, 38, 35]);
const differenceInAges = (ages) => {
  let youngest = Math.min.apply(null, ages);
  let oldest = Math.max.apply(null, ages);
  return [youngest, oldest, oldest - youngest];
};

function differenceInAges(ages){
  return [Math.min(...ages),Math.max(...ages),Math.max(...ages)-Math.min(...ages)]
}