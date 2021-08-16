# Almanaque

Another calendar typescript library

![Almanaque](./README/assets/screen.gif)

## Activity
![GitHub issues](https://img.shields.io/github/issues-raw/javierlopezdeancos/almanaque?style=flat)
![GitHub all releases](https://img.shields.io/github/downloads/javierlopezdeancos/almanaque/total)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/javierlopezdeancos/almanaque/publish-almanaque-in-npm-on-release)
![npm](https://img.shields.io/npm/v/almanaque)

## Use it

### Install

```shell
npm install almanaque --save-dev
```

### Import

Import Almanaque class from your node modules in order to get new instance with new:

```javascript
import Almanaque from 'almanaque';
```

### Use

### Get your instance
```javascript
const almanaque = new Almanaque();
```

#### Instance with reference date
We could get our instance passing any reference date, by default this reference date should be today date:

```javascript
const today = new Date();
const almanaque = new Almanaque(today);
```
### Get current month days
```javascript
const monthDays = almanaque.currentDays();
```

## Examples

### React

Review and check a [react example](./example/react/README.md) to try it.
