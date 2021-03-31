import './App.css';
import React, {useEffect, useState} from 'react';
import Detail from './Detail';
import {Route} from 'react-router-dom'
import { useHistory } from 'react-router'


function App() {

  // let test1 = ["sun", "bed", "car"];
  // let test2 = 2;

//   function solution(strings, n) {
//     // let arr = []
//     // strings.map((item)=>(
//     //   item.split("")
//     // ))
//     // .map((item)=>{
//     //   arr.push(item[n])
//     // })

//     // let arr2 = [];
//     // arr.map((item, index)=>{
//     //   arr2.push({"result" : item, "index" : index}) 
//     // })

//     // arr2.sort((a,b)=>{
//     //   if(a.result < b.result){return -1}
//     //   if(a.result > b.result){return 1}
//     //   return 0;
//     // })
//     // .map((item, index)=>{
//     //   // item[index].index

//     // })

//     // let arr3 = [];
//     // strings.forEach((item, index)=>{
//     //   // arr[index] = strt

//     //   return ;
//     // })
//     let answer = strings.sort((a,b)=>{
//       if(a.split("")[n] < b.split(""[n])){return -1}
//       if(a.split("")[n] > b.split(""[n])){return 1}
//       return 0;
//     })
    

//     // console.log(arr2)

//     // // arr.map((item)=>(
//     // //   console.log(item.result)
//     // // ))
    
//     return answer;
// }

// let st = "1234"

// function solution(s) {
//   let answer = true;
//   var eng = /^[a-zA-Z]*$/;
//   s.split("").map((item)=>{
//     if(eng.test(item))
//       answer = false;
//   })
//   return answer;
// }

// let t1 = [1,2,3,4]
// let t2 = [-3,-1,0,2]

// function solution(a, b) {
//   let answer = 0;
//   a.map((item, index)=>{
//     answer = answer + item * b[index]
//   })
//   return answer;
// }

// let test = "Zbcdefg"

// function solution(s) {
//   let st = "";
//   let answer = s.split("").sort((a,b)=>{
//     if(a > b){return -1}
//     if(a < b){return 1}
//     return 0;
//   }).map((item)=>(
//     st = st + item
//   ))

//   return answer[s.length-1];
// }

// let test = "-1234"

// function solution(s) {
//   let answer = parseInt(s)
//   return answer;
// }

// let test = "1 2 3 4"

// function solution(s) {
//   let tmp = s.split(" ");
//   let min, max, n;
//   min = max = parseInt(tmp[0]);
//   for (let i = 1; i < tmp.length; i++) {
//     n = parseInt(tmp[i]);
//     if(min > n) min = n;
//     if(max < n) max = n;
//   }

//   return min + " " + max;
// }

// let test = ["124", "1223", "12244", "567"]

// function solution(phone_book) { 
//   let answer = true;
//   for(let i = 0; i < phone_book.length; i++){
//     let result = phone_book[i]
//     for(let r = i + 1; r < phone_book.length; r++){
//       if(phone_book[r].substring(0, result.length) === result || result.substring(0, phone_book[r].length) === phone_book[r]){
//         answer = false
//       }
//     }
//   }
//   return answer
// }

// let test = [1,2,3];

// const solution = (arr)=>{
//   let countNum = 5;
//   let check = new Array(arr.length).fill(0);

//   arr.forEach((item, idx)=>{
//     if(item.length > 1){
//       check.splice(idx, 1, new Array(item.length).fill(0))
//     }
//   })

//   const getCombinations =  (newArr, selectNumber) => {
//     const results = [];
//     if (selectNumber === 1) return newArr.map((value) => [value]); 
  
//     newArr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1); 
//       const combinations = getCombinations(rest, selectNumber - 1); 
//       const attached = combinations.map((combination) => [fixed, ...combination]); 
//       results.push(...attached); 
//     });
  
//     return results; 
//   }

//   for(let i = 1; i <= arr.length; i++){
//     let res = getCombinations(arr, i);
//     console.log(res)

//     if(check.map((_)=>Array.isArray(_)).indexOf(true) === -1){
//       countNum = countNum + res.length;
//     }else{
//       res.forEach((it)=>{
//         if(it.map((a)=>Array.isArray(a)).indexOf(true) === -1){
//           countNum = countNum + 1
//         }else{
//           let arr = it.map((x)=>{
//             let result = 1;
//             if(x === 0){
//               result = 1;
//             }else{
//               result = result * x.length;
//             }
//             return result;
//           });
//           countNum = countNum + arr.reduce((a,b)=>a*b)
//         }
//       })
//     }
//   }

//   return countNum;
// }



// let test = 	[["yellow_hat", "headgear"], ["green_turban", "headgear"], ["red_turban", "headgear"], ["test", "face"],["blue_sunglasses", "eyewear"]]

// const solution = (clothes)=>{
//   let newArr = [];
//   for (let [value, key] of clothes){
//     let data = {
//       "cate" : key,
//       "name" : value
//     }

//     let findIdx = newArr.findIndex((x)=>x.cate === key);
   
//     if(findIdx === -1){
//       newArr.push(data);
//     }else{
//       data = {
//         "cate" : key,
//         "name" : newArr[findIdx].name + ", " + value
//       };
//       newArr.splice(findIdx, 1, data);
//     }
//   }
//   let result = newArr.map((item)=>item.name.split(",").length + 1).reduce((a,b)=>a*b);

//   return result-1;
// }



// function solution(clothes) {

  // const getCombinations =  (newArr, selectNumber) => {
  //   const results = [];
  //   if (selectNumber === 1) return newArr.map((value) => [value]); 
  
  //   newArr.forEach((fixed, index, origin) => {
  //     const rest = origin.slice(index + 1); 
  //     const combinations = getCombinations(rest, selectNumber - 1); 
  //     const attached = combinations.map((combination) => [fixed, ...combination]); 
  //     results.push(...attached); 
  //   });
  
  //   return results; 
  // }

//   let countNum = 0;
//   let newArr = [];  
//   let redupCheck = "";

//   clothes.forEach((item)=>{
//     let bool = false;
//     redupCheck.split(",").forEach((x)=>{
//       if(x === item[1]){
//         bool = true;
//       }
//     })

//     redupCheck = redupCheck + item[1] + ",";

//     if(bool){
//       let findIdx = newArr.findIndex((_)=>_[0].cate === item[1]);
//       newArr[findIdx].push({
//         cate : item[1],
//         name : item[0]
//       })
//     }else{
//       newArr.push([{
//         cate : item[1],
//         name : item[0]
//       }])
//     }
//   })
//   console.log(newArr)
  
//   let check = new Array(newArr.length).fill(0);

//   if(newArr.filter((x)=>x.length > 1).length === 0){
//     for(let a = newArr.length; a > 0; a--){
//       countNum = countNum + getCombinations(newArr, a).length
//     }
//     return countNum;
//   }else{
//     newArr.forEach((item, idx)=>
//       check.splice(idx, 1, new Array(item.length).fill(0))
//     )
//   }

//   let res = [];
//   let len = [];
//   check.forEach((_,$)=>{
//     len.push($+1);
//   })
//   len.forEach((x)=>{
//     res.push(getCombinations(check, x))
//   })

//   res.forEach((arr)=>{
//     arr.forEach((item)=>{
//       if(item.map((a)=>Array.isArray(a)).indexOf(true) === -1){
//         countNum = countNum + 1;
//       }else{
//         let sum = item.map((x)=>{
//           let result = 1;
//           if(x === 0){
//             result = 1;
//           }else{
//             result = result * x.length;
//           }
//           return result;
//         });
//         countNum = countNum + sum.reduce((a,b)=>a*b);
//       }
//     })
//   })


//   return countNum;
// }









  // let powerSetArr = [];
  // let check = new Array(clothes.length).fill(0);
  // const dfs = (depth) => {
  //   if (depth === check.length) {
  //     console.log(check)
  //     powerSetArr.push(clothes.filter((_, idx) => check[idx]));
  //   } else {
  //     check[depth] = 1;
  //     dfs(depth + 1);
  //     check[depth] = 0;
  //     dfs(depth + 1);
  //   }
  // };
  // dfs(0);
  // return powerSetArr;


// }


  // let flatArr = clothes.flat(2)
  // let redupArr = [];
  // let redupCount = 0;
  // flatArr.forEach((x)=>{
  //   redupArr[x] = (redupArr[x] || 0) + 1;
  // })
  // Array.from(new Set(flatArr)).forEach((x)=>{
  //   if(redupArr[x] > 1){
  //     redupCount = redupCount + redupArr[x] - 1
  //   }
  // })

  // const def = (n)=>{
  //   let result = 1;
  //   for(let i=2; i<=n; i++) result *= i;
  //   return result;
  // }
  // let result = def(clothes.length-redupCount) * redupCount
  // console.log(result)




  // let ca;
  // let test = [];
  // let arr = clothes.map((item)=>{
  //   return {
  //     cate : item[1],
  //     name : item[0]
  //   }
  // })
  // arr.forEach((item, index)=>{
  //   ca = item.cate
  //   test = arr.filter((x)=>x.cate !== item.cate)
  // })
  
  // let answer = 0;
  // console.log(arr)
  // console.log(ca)

  

  // return ;




  // let answer = clothes.length;
  // let newArr = [];

  // clothes.map((item)=>{
  //   return {
  //   category : item[1],
  //   name : item[0]
  //   }
  // }).forEach((item, index, arr)=>{

  //   arr.filter((_, idx) => idx !== index && index > idx)
  //   .forEach((a) =>{
  //     if(a.category !== item.category){
  //       answer = answer + 1;
  //     }
  //   })

  //   newArr.push(item)
  //   arr.filter((_, idx) => idx !== index && index > idx)

  // })

  // return answer;
// }

  // let board = [
  //   [0,0,0,0,0],
  //   [0,0,1,0,3],
  //   [0,2,5,0,1],
  //   [4,2,4,4,2],
  //   [3,5,1,3,1]
  // ];

  // let moves = [1,5,3,5,1,2,1,4];

  // function solution(board, moves) {
  //   let answer = 0;
  //   let result = [];
  //   moves.forEach((item)=>{
  //     let i = 0;
  //     while( i < board.length ){
  //       if(board[i][item-1] !== 0){
  //         result.push(board[i][item-1])
  //         board[i].splice(item-1, 1, 0)
  //         break;
  //       } 
  //       i++;
  //     }
  //   })
  //   const spliceAction = (arr)=>{
  //     for(let i = 0; i <arr.length-1; i++){
  //       if(arr[i] === arr[i+1]){
  //         arr.splice(i, 2);
  //         answer = answer + 2;
  //         spliceAction(arr);
  //       }
  //     }
  //   }
  //   spliceAction(result)

  //   return answer;
  // }

  // let answers = [1,3,2,4,2];
//1번째 놈 12345
//2번째 놈 21,23,24,25
//3번째 놈 33,11,22,44,55
  // function solution(answers) {
  //   let one = [1,2,3,4,5];
  //   let two = [2,1,2,3,2,4,2,5];
  //   let thr = [3,3,1,1,2,2,4,4,5,5];
  //   let score = [ 0, 0, 0 ];
  //   while(true){
  //     if(thr.length < answers.length){
  //       thr = [...thr, ...thr];
  //       two = [...two, ...two];
  //       one = [...one, ...one];
  //     }else if(two.length < answers.length){
  //       two = [...two, ...two];
  //       one = [...one, ...one];
  //     }else if(one.length < answers.length){
  //       one = [...one, ...one];
  //     }else break;
  //   }

  //   answers.forEach((item, index)=>{
  //     if(one[index] === item) score[0] += 1;
  //     if(two[index] === item) score[1] += 1;
  //     if(thr[index] === item) score[2] += 1;
  //   })
  //   let max = Math.max(...score);
  //   console.log(max)
  //   let answer = [];
  //   score.forEach((item, index) => item === max ? answer.push(index+1): null);

  //   return answer;
  // }


  //낙원이형 sessionStorage이슈 관련
  // const history = useHistory()
  // let Data = [1,2,3,4]
  // let [showDetail, setShowDetail] = useState("")

  // const EnterDetail = (item)=>{
  //   sessionStorage.setItem("detailNumber", item)
  //   setShowDetail(item+"")
  //   history.push(`/detail`)
  // }

  // useEffect(()=>{
  //   setShowDetail(sessionStorage.getItem("detailNumber"))
  // },[])


  let arg = '-424'
  function solution(s){
    if(/^(\-|\+)?([0-9]+|Infinity)$/.test(s)) return Number(s);
    return NaN;
  }


  console.log(solution(arg))
  return (
    <>
      <Route exact path="/">
        {Data.map((item)=>
          <button key={item} onClick={()=>{EnterDetail(item)}}>{`in Detail No.${item}`}Go Detail</button>
        )}
      </Route>

      <Route path="/detail">
        <Detail showDetail={showDetail}/>
      </Route>
    </>
  );
}

export default App;