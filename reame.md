Answer-1:
getElementById means selecting an element from html file by it's id.We can select only one element by this function.
getElementsByClassName means selection more than one element from html file by their class names.We can select several elements by using getElementsByClassName.
By using querySelector, we can select any element form html file.It could be a tag,some classes and an id.If we use hastag(#) in querySelector,it means we are selecting an id.If we use dot(.) in querySelector,it means we are selcting some or one class.If we don't use any of them.It means we are selection a tag.if there are several elements with the same name and if we use this function, it will only give us the first element.
querySelectorAll does the same work,but the difference is it gives us all the elements with same name.



Answer-2:
to create a new element I'll use createElement(),and to insert it into DOM I'll first take the parent element and then I will use the appendChild function.And that's how I will create a new element and insert it into DOM.



Answer-3:
Event bubbling is an event starts on the element we start.And then it bubbles up to its parent element and the parent's parent.And like this it goes to the DOM.


Answer-4:
Event Delegation in Javascript is a technique where a single event is attatched to a parent elements child elements.We can use this to make an event into an exect element.


Answer-5:
preventDefault() is a method which stops the default action in html.
stopPropagation() is a method which stops event bubbling.


