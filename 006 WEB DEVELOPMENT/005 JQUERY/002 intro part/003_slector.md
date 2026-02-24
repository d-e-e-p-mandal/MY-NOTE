Here is your complete and simple jQuery Selectors note (.md format) — nothing missing 👇

# jQuery Selectors Notes

## 📌 What are Selectors?

Selectors are used to select (find) HTML elements so we can perform actions on them.

Basic syntax:
```javascript
$(selector)


⸻

🧠 jQuery Selector List

1️⃣ Select All Elements

$("*")

Selects all elements in the page.

⸻

2️⃣ Select Current Element

$(this)

Selects the current HTML element (used inside events).

⸻

3️⃣ Select by Element + Class

$("p.intro")

Selects all <p> elements with class=“intro”.

⸻

4️⃣ Select First Element

$("p:first")

Selects the first <p> element.

⸻

5️⃣ First <li> of First <ul>

$("ul li:first")

Selects the first <li> inside the first <ul> only.

⸻

6️⃣ First <li> of Every <ul>

$("ul li:first-child")

Selects the first <li> inside every <ul>.

⸻

7️⃣ Select by Attribute

$("[href]")

Selects all elements that have an href attribute.

⸻

8️⃣ Attribute Equal To Value

$("a[target='_blank']")

Selects all <a> elements where target="_blank".

⸻

9️⃣ Attribute NOT Equal To Value

$("a[target!='_blank']")

Selects all <a> elements where target is NOT “_blank”.

⸻

🔟 Select Buttons

$(":button")

Selects:
	•	All <button> elements
	•	All <input type="button"> elements

⸻

1️⃣1️⃣ Even Rows

$("tr:even")

Selects even <tr> elements (index starts from 0).

⸻

1️⃣2️⃣ Odd Rows

$("tr:odd")

Selects odd <tr> elements (index starts from 0).

⸻

🔥 Important Symbols
	•	# → Select by id
	•	. → Select by class
	•	* → All elements
	•	[attribute] → Attribute selector
	•	:first, :odd, :even → Filter selectors

⸻