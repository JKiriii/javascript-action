Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@JKiriii 
JKiriii
/
.github-javascript-action
Public template
generated from actions/javascript-action
Code
Issues
Pull requests
Discussions
Actions
Projects
Wiki
Security
Insights
Settings
.github-javascript-action/index.test.js /
@JKiriii
JKiriii Initial commit
Latest commit 18f89dc 5 days ago
 History
 1 contributor
24 lines (21 sloc)  750 Bytes
   
const wait = require('./wait');
const process = require('process');
const cp = require('child_process');
const path = require('path');

test('throws invalid number', async () => {
  await expect(wait('foo')).rejects.toThrow('milliseconds not a number');
});

test('wait 500 ms', async () => {
  const start = new Date();
  await wait(500);
  const end = new Date();
  var delta = Math.abs(end - start);
  expect(delta).toBeGreaterThanOrEqual(500);
});

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = 100;
  const ip = path.join(__dirname, 'index.js');
  const result = cp.execSync(`node ${ip}`, {env: process.env}).toString();
  console.log(result);
})
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
