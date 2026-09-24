#1
            Uncaught SyntaxError: The requested module '/src/Tests/Test1-MultiPageProblem.js' does not provide an export named 'default' (at mainTest.js:1:8)





# Mistake Log: `does not provide an export named 'default'`

## The Error

```
Uncaught SyntaxError: The requested module '/src/Tests/Test1-MultiPageProblem.js' 
does not provide an export named 'default' (at mainTest.js:1:8)
```

## What It Means

`mainTest.js` is trying to import a **default** export from `Test1-MultiPageProblem.js`, but that file never defined one.

## Root Cause

Mismatch between how a module **exports** and how it's **imported**.

```js
// ❌ Importing a default that doesn't exist
import Something from './Tests/Test1-MultiPageProblem.js';

// But the file only has:
export function Test1() { ... }   // named export only
```

Importing **without braces** = asking for `default`. Exporting **without `export default`** = no `default` exists.

## The Rule

| Exported as | Must be imported as |
|---|---|
| `export default X` | `import Y from './x.js'` |
| `export const X` / `export function X` | `import { X } from './x.js'` |

- **Named exports** → braces required, names must match.
- **Default export** → no braces, name is free.

## Fixes

**Option A — Fix the import:**
```js
import { Test1 } from './Tests/Test1-MultiPageProblem.js';
```

**Option B — Add a default export:**
```js
export default function Test1() { ... }
```

**Option C — Support both:**
```js
export function Test1() { ... }
export default Test1;
```

## Takeaway

Always check the **export style** in the source file before writing the import. Braces = named, no braces = default. If the error says *"does not provide an export named 'default'"*, the fix is almost always: **add braces** or **add `export default`**.