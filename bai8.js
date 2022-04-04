// phan biet setTmmediate vs process.nextTick?
const a = () => {
    console.log('a');
}
const b = () => {
    console.log('b')
}
const main = () => {
    setImmediate(b);
    process.nextTick(a);
}

main();
// setImmediate () được xử lý trong giai đoạn Kiểm tra trình xử lý(check), 
// trong khi process.nextTick () được xử lý khi bắt đầu vòng lặp sự kiện và giữa mỗi giai đoạn của vòng lặp sự kiện.
// Trên bất kỳ ngữ cảnh nào process.nextTick () có mức độ ưu tiên cao hơn setImmediate ().

// 