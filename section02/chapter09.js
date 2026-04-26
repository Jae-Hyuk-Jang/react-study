let arr1 = [
  { name: "이정환", hobby: "테니스" },
  { name: "김효빈", hobby: "테니스" },
  { name: "장재혁", hobby: "수영" },
];

const tennisPeople = arr1.filter((item) => item.hobby == "테니스");

console.log(tennisPeople);

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  console.log(idx, item);
  return item * 2;
});

console.log(mapResult1);

let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
  if (a > b)
    return 1; // b -> a 배치
  else if (a < b)
    return -1; // a -> b 배치
  else return 0;
});

console.log(arr3);
