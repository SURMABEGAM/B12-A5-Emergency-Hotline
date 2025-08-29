
 Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector/ querySelectorAll**?
ans:  getElementById:
 The getElementById() method returns an element with a specified value.

getElementsByClassName:
The getElementsByClassName() method returns a collection of elements with a specified class name(s)

querySelector():
 This method returns only the first element that matches the specified CSS selector within the document or a specific element.

 querySelectorAll():
  when you need to select all occurrences of elements that match a given selector (e.g., all elements with a specific class or tag name).

2. How do you **create and insert a new element into the DOM**?

When a web browser loads a web page, it converts the page into a DOM. Programming languages ​​like JavaScript then use the DOM to find the elements on that page and make them dynamic.


3. What is **Event Bubbling** and how does it work?

Event bubbles are a type of DOM event propagation where the event 
Triggers on the innermost target element first and then sequentially triggers on the target element's ancestors (parents) in the same nesting hierarchy until it reaches the outermost DOM element or document object.

4. What is **Event Delegation** in JavaScript? Whis it useful?

Event delegation in JavaScript is a technique for efficiently handling events, especially when working with a large number of similar elements or dynamically added elements.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

When handling events in JavaScript, preventDefault() and stopPropagation() are used for two different purposes.

preventDefault() stops the element from defaulting.

stopPropagation() stops event bubbling (does not allow it to pass to the parent element).





