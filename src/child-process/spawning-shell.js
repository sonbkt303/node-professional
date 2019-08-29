const exec = require('child_process').exec;

const execSync = require('child_process').execSync;
const stdout = execSync('cat *.js file | wc -l');

console.log(`stdout: ${stdout}`);
s
exec('cat index.js file | wc -l', (err, stdout, stderr) => {

 if (err) {
 console.error(`exec error: ${err}`);
 return;
 }
 console.log(`stdout: ${stdout}`);
 console.log(`stderr: ${stderr}`);
});