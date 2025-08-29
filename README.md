## 📌 Question 1

### 🔹 Difference between `getElementById` and `getElementsByClassName`

**getElementById**
1. Select by **ID name**
2. Returns a **single element**
3. **Unique** (ID must be unique in a page)
4. Access a **specific element**

**getElementsByClassName**
1. Select by **Class name**
2. Returns an **HTMLCollection** (multiple elements)
3. **Not unique** (many elements can share the same class)
4. Access **multiple elements**

---

### 🔹 Difference between `querySelector` and `querySelectorAll`

**querySelector**
1. Returns the **first matching element**
2. Does **not support direct looping** (since it returns a single element)
3. Behavior is similar to selecting by **ID**

**querySelectorAll**
1. Returns **all matching elements** as a **NodeList**
2. Supports looping 
3. Behavior is similar to selecting by **Class**

## 📌 Question 2  

### 🔹 Create and Insert a New Element into the DOM  

**Step 1: Create a new element**  
```javascript
const newElement = document.createElement("div");
**Insert a new element into the DOM**
```javascript
const body = document.getElementById("body");
body.appendChild(newElement);

## 📌 Question 3  

### 🔹 Event Bubbling and How It Works

**Event Bubbling:**  
Event Bubbling is a way of **event propagation** in the DOM where an event starts at the **target element** and then **bubbles up** to its parent elements one by one until it reaches the `document`.

**How It Works:**  
- When we click on a **child button**, it triggers the event on the button first and shows its own inner text.  
- Then the event **bubbles up** to the parent element and triggers the parent’s event.  
- After that, it continues to the grandparent element and so on.  
- The bubbling stops when the event reaches the `document`.

