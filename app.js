import express from "express";

const app = express();
const port = 3333;

const waitBlocking = (ms) => {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + ms);
    console.log("Block");
}

const waitNonBlocking = (ms) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, ms);
        console.log("Non");
    })
}

const controller1 = async (req, res) => {
    const timeoutScheduled = Date.now();
    await waitNonBlocking(10000);
    
    console.log(new Date().getTime() - timeoutScheduled);
    res.status(200).end();
}

const controller2 = async (req, res) => {
    const timeoutScheduled = Date.now();
    await waitBlocking(10000);
    console.log(new Date().getTime() - timeoutScheduled);
    res.status(200).end();
}


app.get("/", (req, res) => {
       console.log("dsadasdas");
       controller1();
       controller2();
       res.json({
              message: "Hell World"
       });
});

app.listen(port, () => {
       console.log(`Server is listening on https://localhost:${port}`);
});