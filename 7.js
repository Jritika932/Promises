// Create examples to explain promises function

function foo(marks) {
    return new Promise((response, reject) => {
      if (marks >= 33) {
        response("pass");
      } else {
        reject("fail");
      }
    });
  }
  foo(60).then((data)=>{
      console.log(data);
  }).catch((err)=>{
      console.log(err)
    })