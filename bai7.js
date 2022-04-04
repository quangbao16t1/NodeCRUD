const controller = (req, res) => {
    const array = Array.from(Array(1000000).keys());
    array.forEach((item) => {
        console.log(item);
    })
    res.status(200).end();
}