// Create examples to explain async await function

function foo() {
    const apiResponse = new Promise(function (fullfilled, rejected) {
      $.ajax({
        url: 'https://fakestoreapi.com/products',
        type: 'GET',
        success: function (data) {
          fullfilled(data);
        },
  
        error: function (err) {
          rejected(err);
        },
    });
  });

  return apiResponse;
}
async function foo2() {
    try {
      const result = await foo();
      console.log('from the async await', result);
    } 
    catch (err) {
        console.log('error-',err);
    }
  }
  $('#btn').click(function () {
    foo2();
 });
  