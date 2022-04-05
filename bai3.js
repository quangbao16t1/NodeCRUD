import express from "express";

const app = express();
const port = 3000;


  
function doA(ms) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}

async function doB(ms) {
    let start = new Date().getTime();
    while (new Date().getTime() < start + ms);
}

const controller = async (req, res) => {
    const timeoutScheduled = Date.now();
    doA(3000);
    await doB(1000);
    console.log("TIME:  " + (new Date().getTime() - timeoutScheduled));
};
  
//   controller();
//   controller();
//   controller(); 

app.get("/", async (req, res) => {
    controller();
    controller();
    controller();
       res.json({
              message: "Hell World"
       });
});

app.listen(port, () => {
       console.log(`Server is listening on http://localhost:${port}`);
});
