// Bài 9: Chỉ sử dụng API promise.All kết hợp logic 
// → thực thi 3 event cùng 1 lúc 
// → nhận result return array chứa 3 result success và fail


//Lấy thông tin event 1
async function event1(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('Thong tin event 1');
        }, 300)
    })
}

//Lấy thông tin event 2
function event2(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('Thong tin event 2');
        }, 300)
    })
}

//Lấy thông tin event 3
function event3(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve('Thong tin event 3');
        }, 300)
    })
}


function main(){
    Promise.all([
        event1().catch(err=>err),
        event2().catch(err=>err),
        event3().catch(err=>err)
    ]).then(res=>{
        console.log(res) // ["Thông tin event 1", "Thông tin event 2", "Thông tin event 3"]
        
        if(res[0] === 'Thông tin event 1'){
            //Get data success
        }else {
            //Xử lý Error tại đây..
        }
        /*
            Tương tự cho res[1] và res[2] ...
        */
    })
}

main();