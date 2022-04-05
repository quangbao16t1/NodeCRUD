// Bài 9: Chỉ sử dụng API promise.All kết hợp logic 
// → thực thi 3 event cùng 1 lúc 
// → nhận result return array chứa 3 result success và fail


//Lấy thông tin event 1
function event1(){
    try {
        return new Promise((resolve,reject) => {
            setTimeout(function() {
                resolve('Thong tin event 1');
            }, 100)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Loi event 1");
            }, 100)
        })
    }
}

//Lấy thông tin event 2
function event2() {
    try {
        return new Promise((resolve,reject) => {
            setTimeout(function() {
                resolve('Thong tin event 2');
            }, 100)
        })
    } catch (error) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Loi event 2");
            }, 100)
        })
    }
}

//Lấy thông tin event 3
function event3(){
    try {
        Promise((resolve) => {setTimeout((resolve),100)});
    } catch (error) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Loi event 3" + error);
            }, 100)
        })
    }
}

async function main(){
    Promise.all([
        event1(), event2(), event3()
    ]).then(res => {
        console.log(res) // [ 'Thong tin event 1', 'Thong tin event 2', 'Thong tin event 3' ]
    }).catch((e) => {
        console.log(e);
    })
}

main();