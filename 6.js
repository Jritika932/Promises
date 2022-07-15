// Create examples to explain callback hell function

function foo(a, b, c) {
    setTimeout((a) => {
      console.log("Callback");
      setTimeout(
        (a) => {
          console.log(a + " hell function");
          setTimeout(
            (c) => {
              console.log(c);
            },
            2000,
            c
          );
        },
        2000,
        b
      );
    }, 2000);
}
foo(2, 3, 5);
