Here is your simple Markdown (.md) note — clean and ready to copy 👇

# jQuery Syntax Notes

## 📌 jQuery Concept

With jQuery, you:
1. Select (query) HTML elements
2. Perform actions on them

---

## 🧠 Basic jQuery Syntax

```javascript
$(selector).action();
```
🔎 Breakdown:
	•	$ → Defines / accesses jQuery
	•	selector → Finds HTML elements
	•	action() → Performs action on selected element(s)

⸻

✅ Examples

Hide current element
```javascript
$(this).hide();
```
Hide all  elements
```javascript
$("p").hide();
```
Hide elements with class=“test”
```javascript
$(".test").hide();
```
Hide element with id=“test”
```javascript
$("#test").hide();
```

⸻

🔥 Important
	•	# → Selects by id
	•	. → Selects by class
	•	Tag name → Selects by element name

⸻
