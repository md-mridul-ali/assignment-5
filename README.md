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
2. Supports looping (`for...of`, `forEach`)
3. Behavior is similar to selecting by **Class**
