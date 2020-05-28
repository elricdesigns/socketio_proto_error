# Socket.io 1.x fatal error

## Summary

Minified project produces fatal error:

`Uncaught SyntaxError: Duplicate __proto__ fields are not allowed in object literals`

## Usage

Clone this library and run the below commands.

```
npm install
rm build/*
npm run build
grep "{__proto__:null,__proto__:{toString:1}}" build/main.js
```
