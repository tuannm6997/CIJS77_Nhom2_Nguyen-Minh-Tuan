const n = 921213;

function getMax(n) {
  console.log(Math.max(...String(n).split("")));
}

getMax(n);