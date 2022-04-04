// await hay return await
async function waitAndMaybeReject() {
    await new Promise((r) => setTimeout(r, 1000));
    throw Error("This is error");
}

async function test1() {
    try {
        return await waitAndMaybeReject();
    } catch (e) {
        return "oh no!!!"
    }
}

async function test2() {
    try {
        return await waitAndMaybeReject();
    } catch (e) {
        throw e;
    }
}

async function test3() {
    return await waitAndMaybeReject();
}

function test4() {
    return waitAndMaybeReject();
}
const main = async () => {
    const value = await test1();
    // const value = await test2();
    // const value = await test3();
    // const value = await test4();
    console.log('value', value);
}
main();