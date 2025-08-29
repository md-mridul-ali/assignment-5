##  Question 1

###  Difference between `getElementById` and `getElementsByClassName`

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

###  Difference between `querySelector` and `querySelectorAll`

**querySelector**
1. Returns the **first matching element**
2. Does **not support direct looping** (since it returns a single element)
3. Behavior is similar to selecting by **ID**

**querySelectorAll**
1. Returns **all matching elements** as a **NodeList**
2. Supports looping 
3. Behavior is similar to selecting by **Class**

##  Question 2  

###  Create and Insert a New Element into the DOM  

**Create a new element**  
const newElement = document.createElement("div");
**Insert a new element into the DOM**
const body = document.getElementById("body");
body.appendChild(newElement);

## Question 3  

###  Event Bubbling and How It Works

**Event Bubbling:**  
Event Bubbling is a way of **event propagation** in the DOM where an event starts at the **target element** and then **bubbles up** to its parent elements one by one until it reaches the `document`.

**How It Works:**  
- When we click on a **child button**, it triggers the event on the button first and shows its own inner text.  
- Then the event **bubbles up** to the parent element and triggers the parent’s event.  
- After that, it continues to the grandparent element and so on.  
- The bubbling stops when the event reaches the `document`.

##  Question 4  

###  Event Delegation and Why It Is Useful

**Event Delegation:**  
Event delegation is a technique where we attach a **single event listener** to a **parent element** to manage events for its **child elements**, even if they are added dynamically.  

**Why It Is Useful:**  
-  Better performance, fewer event listeners  
-  Faster and less memory usage  
-  Clean code, easier to manage  
-  Supports dynamic elements, works for elements added later

##  Question 5  

###  Difference between `preventDefault()` and `stopPropagation()`

**preventDefault():**  
-  Stops the default behavior of an element  
-  Do not stop event bubbling  

**stopPropagation():**  
-  Do not stop the default behavior of an element  
-  Stop the event from bubbling up to parent elements

