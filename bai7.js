// Giả sử array có 1 triệu phần tử, cần lặp qua cái phần tử này để làm các task vụ nào đó,  
//có 3 request đồng thời gọi vào controller, viết 1 func để lặp qua array thay thế cho forEach 
//để các request nó thực thi đồng thời, không đợi nhau, 
//thời gian phản hồi của 3 request gần bằng nhau


// const sleep = ms => {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// async function logItem(item) {
//     await sleep(100);
//     console.log(item);
// }


// const controller = async (req, res) => {
//     console.log("start!");
//     const array = Array.from(Array(10).keys());
//     array.forEach(async (item) => {
//         console.log(item);
//     })
// }

async function logItem(item) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('item:', item);
            resolve(item);
        }, 0)
    });
}

const controller = async () => {
    console.log('start!')
    const array = Array.from(Array(1000000).keys());
    for (const entity of array) {
        await logItem(entity);
      }
}

controller();
controller();
controller();

//  Array.prototype.abc = async function (item) {
//     for (let i = 0; i < this.length; i++) {
//         await item(this[i]);
//         }
//     };
    
//     const controller = (req, res) => {
//     const array = Array.from(Array(10).keys());
//     array
//     .abc((item) => {
//     console.log(item);
//     })
//     .then(() => console.log("Done"));
//     };
    
//     controller();
//     controller();
//     controller();