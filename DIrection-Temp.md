Use ES Modules (`export` and `import`), which Vite supports natively out of the box.

### Method 1: Named Export (Best for multiple variables)

**1. Export from source file:**

```javascript
// src/data.js
export const userName = 'Alex';
export const userAge = 25;

// Alternatively, export together at the end:
// export { userName, userAge };

```

**2. Import into destination file:**

```javascript
// src/main.js
import { userName, userAge } from './data.js';

console.log(userName); // 'Alex'
console.log(userAge);  // 25

```

---

### Method 2: Default Export (Best for a single primary value/object)

**1. Export from source file:**

```javascript
// src/config.js
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
};

export default config;

```

**2. Import into destination file:**

```javascript
// src/main.js
import config from './config.js';

console.log(config.apiUrl);

```

---

### Quick Setup Checklist for Vite

* **Relative paths:** Always include the relative path (e.g., `./data.js` or `../data.js`).
* **HTML Script Tag:** Ensure your entry script in `index.html` has `type="module"`:
```html
<script type="module" src="/src/main.js"></script>

```


Once loaded as a module, any subsequent imports between JS files work automatically.