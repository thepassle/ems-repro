# es-module-shims repro

```
// Run any http server, e.g.
npx http-server -o
// open page in a browser than doesnt support importmaps
```

## Expected: 

Browser logs:
```
import-map.js
EMS loaded
chunk.js
foo.js
chunk-1.js foo
```

## Actual:

Browser logs:
```
import-map.js
EMS loaded
chunk.js
Uncaught (in promise) TypeError: Error resolving module specifier “foo”. Relative module specifiers must start with “./”, “../” or “/”.
```