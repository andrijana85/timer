let args = process.argv.slice(2);
// console.log(args);
const timer = (delays) => {

  for (const delay of delays) {

    if (delay < 0 || Number(isNaN(delay))) {
      continue;
    }

    setTimeout(() =>{
      process.stdout.write('\x07');
    }, delay * 1000);
  }
};
timer(args);

