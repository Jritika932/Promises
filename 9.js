// Create examples to explain promise.all function
let foo1 = new Promise((resolve, reject) => {
    resolve("resolve1");
    reject("reject1");
  });
  let foo2 = new Promise((resolve, reject) => {
    resolve("resolve2");
    reject("reject2");
  })
  Promise.all([foo1, foo2])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
});
