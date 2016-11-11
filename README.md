# sleep.async
Super simple promisify sleep module.

## Install

```
npm i sleep.async --save
```

### sleep(delay)

```javascript
const sleep = require('sleep.async')
sleep(2000).then(() => {
  console.log('2000ms later.')
})
```

with asyncawait

```
npm install asyncawait --save
```

```javascript
const async = require('asyncawait/async'),
      await = require('asyncawait/await'),
      sleep = require('sleep.async')

const delay = async (() => {
  await (sleep(2000))
  console.log('2000ms later.')
})
delay()
```
