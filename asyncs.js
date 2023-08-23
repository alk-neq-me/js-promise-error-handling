async function someError() {
  return Promise.reject(new Error("failed someError"));
}

async function someError2() {
  throw new Error("failed someError2");
}

async function someOk() {
  return new Promise(resolve => setTimeout(_ => resolve(console.log("hello im ok")), 1000));
}


function error_handle(expect) {
  return (err) => {
    console.error(`${expect}:`, err.message);
    throw new Error("found error")
  }
}



async function mainTry() {
  try {
    await someOk()
    await someError();
    await someError2();
  } catch (err) {
    console.log("failed main:", err.message)
    throw new Error("found error")
  }
}


async function mainCatch() {
  await someOk()
    .catch(error_handle("couldnt fetch ok"));
  await someError()
    .catch(error_handle("couldnt fetch some error"));
  await someError2()
    .catch(error_handle("couldnt fetch some error 2"));
}


// mainTry()

mainCatch()
