# JavaScript Practice Repository

A comprehensive collection of JavaScript practice projects and exercises covering fundamental to advanced concepts. This repository demonstrates progressive learning through hands-on projects and dedicated concept practice files.

---

## 📚 Core Concepts Practiced

### 1. **JavaScript Fundamentals**
- Variables, data types (String, Number, Boolean, Object, Array)
- Operators (arithmetic, comparison, logical)
- Conditionals (if-else statements)
- Loops (for, while, break statements)
- Scope (global, function, and block scope)

**Files:** [index.js](index.js), [Functions.js](Functions.js)

### 2. **Functions**
- Function declarations and invocations
- Parameters and return values
- Function scope and closures
- Arrow functions (syntax, implicit return)
- Functions as first-class objects
- Callback functions

**File:** [Functions.js](Functions.js)

### 3. **Array Methods**
Comprehensive practice with higher-order array functions:
- **`forEach()`** - Iterating over array elements
- **`map()`** - Transforming arrays (e.g., doubling values, extracting properties)
- **`filter()`** - Filtering elements based on conditions
- **`every()`** - Checking if all elements match a condition
- **`some()`** - Checking if any element matches a condition
- **`find()`** & **`reduce()`** - Advanced array operations
- Array mutation methods (push, splice, pop)

**File:** [ArrayMethods.js](ArrayMethods.js)

### 4. **Object Literals**
- Creating and structuring objects
- Accessing properties (dot notation, bracket notation)
- Object methods
- Nested objects (objects within objects)
- Object properties with special keys (numbers, boolean, null)

**File:** [JSObjectLiterals.js](JSObjectLiterals.js)

### 5. **Math Object**
- `Math.random()` - Generating random numbers
- `Math.floor()`, `Math.ceil()`, `Math.round()`
- Generating random numbers within specific ranges
- `Math.min()`, `Math.max()` with spread operator

**File:** [mathobject.js](mathobject.js)

### 6. **Advanced Destructuring & Operators**
- **Spread Operator (...)** - Copying arrays, combining arrays, copying objects
- **Rest Parameters** - Collecting multiple arguments
- **Destructuring** - Extracting values from arrays and objects
- Using spread with array/object literals

**File:** [spread_rest_destructiing.js](spread_rest_destructiing.js)

### 7. **this Keyword & Error Handling**
- Understanding `this` context in different scenarios
- Arrow functions and `this` binding
- **Try-Catch blocks** - Error handling and exception management
- Throwing custom errors

**File:** [this_tryCatch_miscellaneous.js](this_tryCatch_miscellaneous.js)

---

## 🎮 Interactive Projects

### **Guess Number Game**
A console-based number guessing game demonstrating:
- Random number generation using `Math.random()`
- User input via `prompt()`
- Loop control (while loops, break statements)
- Conditional logic for game logic
- User feedback and game flow

**Files:** [GuessNum.html](GuessNum.html), [GuessNum.js](GuessNum.js)

### **Guess Movie Game**
A browser-based interactive movie guessing game featuring:
- Window load events (`window.onload`)
- Prompt-based user interaction
- String comparison and conditional logic
- Game state management

**Files:** [guessmovie.html](guessmovie.html), [guessmovie.js](guessmovie.js)

### **To-Do Application**
A functional to-do list app demonstrating:
- Array operations (push, splice)
- Array iteration (for loops)
- User interaction through prompts
- Data management and persistence (within session)
- CRUD operations (Create, Read, Update, Delete)

**Files:** [Todo.html](Todo.html), [Todo.js](Todo.js)

---

## 🌐 DOM & Events

### **DOM Manipulation** - [DOM/](DOM/)
Core DOM concepts and DOM API methods:
- Accessing DOM elements:
  - `document.querySelector()` & `document.querySelectorAll()`
  - `document.getElementsByClassName()` & `document.getElementById()`
  - `document.all`
- Manipulating element properties:
  - `innerText`, `innerHTML`
  - `src`, `style` properties
- Exploring the DOM tree (window, document objects)

**File:** [DOM/selecting_manipulating.js](DOM/selecting_manipulating.js)

### **DOM Events** - [DOMEvents/](DOMEvents/)
Event handling and propagation:
- **Event Listeners**: `addEventListener()` method
- **Event Types**: click, dblclick, mouseenter, mouseleave
- **Event Object**: Properties and methods of event objects
- **Event Callbacks**: Handling user interactions
- The `this` context within event handlers
- Modifying element styles via events

**File:** [DOMEvents/app.js](DOMEvents/app.js)

### **Random Color Generator** - [DOMEvents/RandomColor/](DOMEvents/RandomColor/)
A practical project combining DOM and events:
- Generating random RGB colors
- DOM element selection and manipulation
- Event-driven color changes
- Display of generated color values

**Files:** [DOMEvents/RandomColor/index.html](DOMEvents/RandomColor/index.html), [DOMEvents/RandomColor/index.js](DOMEvents/RandomColor/index.js)

### **Form Events & Event Bubbling** - [FormEvents_EventBubbling/](FormEvents_EventBubbling/)
Advanced event handling techniques:
- **Form Submission Events**: Listening to form submit events
- **`event.preventDefault()`** - Preventing default form submission
- **Form Data Extraction**: Accessing input values via form elements
- **Event Bubbling**: Understanding event propagation through DOM hierarchy
- **Input & Change Events**: Listening to user input in real-time

**File:** [FormEvents_EventBubbling/app.js](FormEvents_EventBubbling/app.js)

---

## 🚀 Asynchronous Programming & APIs

### **Introduction to Async** - [AdvanceJS/](AdvanceJS/)
Building blocks of asynchronous JavaScript:
- **`setTimeout()`** - Delaying code execution
- **Callback Hell** - Understanding callback nesting issues
- Understanding JavaScript's single-threaded, asynchronous nature
- Callback functions for async operations

**File:** [AdvanceJS/app.js](AdvanceJS/app.js)

### **API Calls & Fetch** - [API/](API/)
Modern API integration techniques:
- **Fetch API**: Making HTTP requests
- **Promises**: Chaining `.then()` methods
- **`.json()` parsing**: Converting response to JSON
- **Error handling**: Using `.catch()` for error management
- **Async/Await Syntax**: Modern approach to async code
- Working with external APIs (Cat Facts API)
- Using **Axios library** for simplified API calls

**Files:**
- [API/firstreq.js](API/firstreq.js) - Basic fetch examples
- [API/randomcatfacts.js](API/randomcatfacts.js) - Practical API integration with Axios

### **JSON Handling**
- **`JSON.parse()`** - Converting JSON strings to JavaScript objects
- **`JSON.stringify()`** - Converting JavaScript objects to JSON strings
- Working with API responses in JSON format

**File:** [API/app.js](API/app.js)

---

## 📁 Project Structure

```
Practice/
├── 📄 Core Concept Files
│   ├── ArrayMethods.js          # Array iteration & transformation
│   ├── Functions.js              # Function fundamentals
│   ├── JSObjectLiterals.js       # Object creation & manipulation
│   ├── mathobject.js             # Math object & random numbers
│   ├── spread_rest_destructiing.js # Advanced operators
│   └── this_tryCatch_miscellaneous.js # Advanced concepts
│
├── 🎮 Interactive Games
│   ├── GuessNum.html/js          # Number guessing game
│   ├── guessmovie.html/js        # Movie guessing game
│   └── Todo.html/js              # To-do list application
│
├── 🌐 DOM & Events
│   ├── DOM/
│   │   ├── index.html
│   │   ├── selecting_manipulating.js
│   │   └── style.css
│   ├── DOMEvents/
│   │   ├── index.html
│   │   ├── app.js
│   │   ├── style.css
│   │   └── RandomColor/          # Random color generator project
│   └── FormEvents_EventBubbling/
│       ├── index.html
│       ├── app.js
│       └── style.css
│
└── 🚀 APIs & Async
    ├── AdvanceJS/
    │   ├── index.html
    │   ├── app.js
    │   └── style.css
    └── API/
        ├── index.html
        ├── app.js
        ├── firstreq.js
        ├── randomcatfacts.js      # Practical API project
        ├── randomdogimg.html/js   # Dog image API project
        └── style.css
```

---

## 🎯 Learning Path

This repository follows a logical progression:

1. **Foundation** → Variables, functions, data structures
2. **Built-in Methods** → Array methods, Math operations
3. **Advanced Syntax** → Spread/Rest, destructuring
4. **DOM Interaction** → Selecting and manipulating elements
5. **Events** → Responding to user interactions
6. **Async Operations** → Handling time-dependent code
7. **Real-world APIs** → Fetching and displaying data

---

## 💡 Key Takeaways

✅ Strong foundation in JavaScript fundamentals
✅ Proficiency with ES6+ features (arrow functions, spread operator, async/await)
✅ Practical DOM manipulation and event handling
✅ Understanding of asynchronous programming patterns
✅ Ability to fetch and work with external APIs
✅ Problem-solving through interactive game projects
✅ Clean code practices and JavaScript best practices

---

## 🚀 How to Use

1. Open any HTML file in a browser to run the interactive projects
2. Check the browser console (F12) to see console logs and interact with games
3. Study individual JavaScript files to understand specific concepts
4. Modify and experiment with the code to deepen your understanding

---

*This repository represents a comprehensive JavaScript learning journey from fundamentals to real-world API integration.*

THANKYOU!!