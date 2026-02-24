Here is your simple and complete jQuery Events note (.md format) — clean and ready to copy 👇

# jQuery Events Notes

## 📌 What are Events?

Events are actions performed by users that a web page can respond to.

An event represents the exact moment when something happens.

Example:
- Clicking a button
- Moving the mouse
- Pressing a key
- Submitting a form

The word **"fired"** means the event has occurred.

Example:
> The keypress event is fired when you press a key.

---

## 🧠 Types of DOM Events

### 🖱 Mouse Events
- click
- dblclick
- mouseenter
- mouseleave

---

### ⌨ Keyboard Events
- keypress
- keydown
- keyup

---

### 📝 Form Events
- submit
- change
- focus
- blur

---

### 🌐 Document / Window Events
- load
- resize
- scroll
- unload

---

## 🎯 jQuery Syntax for Events

Basic syntax:

```javascript
$(selector).event(function(){
    // action code
});


⸻

✅ Example 1: Click Event

$("p").click(function(){
    alert("Paragraph clicked!");
});

When any <p> is clicked → alert appears.

⸻

✅ Example 2: Double Click

$("button").dblclick(function(){
    alert("Button double clicked!");
});


⸻

✅ Example 3: Mouse Enter

$("#box").mouseenter(function(){
    $("#box").hide();
});

When mouse enters the element → it hides.

⸻

🔥 Important Concept

This only assigns event:

$("p").click();

But this assigns event + action:

$("p").click(function(){
    // action goes here
});


⸻

🧠 Using $(this) in Events

$("p").click(function(){
    $(this).hide();
});

Only the clicked paragraph will hide.

⸻

🎯 Summary

Events allow your webpage to respond to user actions.

Steps:
	1.	Select element
	2.	Attach event
	3.	Define action

Example:

$("#btn").click(function(){
    alert("Button clicked");
});
