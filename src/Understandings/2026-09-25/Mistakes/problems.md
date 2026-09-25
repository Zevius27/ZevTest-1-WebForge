# Issues & Resolutions

---

### 1. Folder Structure Mismatch
- **Issue:** The code currently works, but the file structure is misaligned. Code should conform to the project structure, not dictate it.
- **Fix:**
  - Corrected imports:
    ```typescript
    import { square, circle, triangle } from "./types-shape/shapes";
    ```
  - Updated exports:
    ```typescript
    export { shapes, square, circle, triangle };
    ```

---

### 2. Hunger Levels Critical
- **Issue:** Starving developer.
- **Fix:**
  1. Stepped away to eat.
  2. Status: **Eaten / Fixed.**

---

### 3. SVG Shape Mismatch
- **Issue:** Circle SVGs were mistakenly rendering triangle paths.
- **Fix:** Swapped out the mismatched triangle vectors in the circle files.




### 💝  Raw Files Here




// /////////////////////////////////////
//              Problems
// /////////////////////////////////

//  1. The file is working but the structure of the folder isn't
//     -    The File shall work with the structure
//           not the other way around.
//  FIX :
//          1.  Changed Files like : import { square, circle, triangle, square } from "./types-shape/shapes";
//          2.  export {shapes, square, circle, triangle };


//  2. I'm Hungry.
//  FIX : 
//          1. Going To Eat.
//          2. Eaten : Fixed.


//  3. FIX : Circle Svgs : They are Triangle.
//          FIXED : File Errors Triangles in circle.

// /////////////////////////////////////
//              Problems
// /////////////////////////////////
