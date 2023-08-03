const spinner = "|/-\\|/-\\|";
let i = 0;

const spinner2 = () => setTimeout(() => {
  process.stdout.write(`\r${spinner[i++]}    `);
  if (i < spinner.length) spinner2();
  if (i === spinner.length) process.stdout.write('\n');
}, 200);

spinner2();