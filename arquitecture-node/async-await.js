const promiseFunciton = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve("hello world");
      } else {
        reject(new Error("hello error"));
      }
    }, 500);
  });

async function asyncAwait() {
  try {
    const msg = await promiseFunciton();
    console.log("message", msg);
  } catch (err) {
    console.log("error", err);
  }
}

asyncAwait();
