const { createTest, go, find, click, type } = require('react-visual-code');
createTest('My E2E Test', async () => {
    await go('http://localhost:3000');
    await find('input[name="username"]');
    await type('input[name="username"]', 'myusername');
    await find('input[name="password"]');
    await type('input[name="password"]', 'mypassword');
    await click('button[type="submit"]');
    await find('#welcome-message');
  });