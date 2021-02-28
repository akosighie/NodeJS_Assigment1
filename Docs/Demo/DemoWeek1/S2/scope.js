function varTest() {
  if (true) {
    var x = 1;
  }

  console.log(x); // 1
}

function letTest() {
    const y;

  if (true) {
    let x = 1;
  }

  console.log(x); // error: undefined
}


const employee = {
    firstName: 'M',
    lastName: 'L'
}