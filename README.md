1. **What is JSX, and why is it used?**
JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used with React to describe what the UI should look like. JSX makes code more readable and easier to write by combining markup and logic in a single place. Ultimately, it gets compiled into standard JavaScript function calls that create React elements.

2. **What is the difference between State and Props?**
Props (short for properties) are read-only data passed down from a parent component to a child, making components reusable and configurable. State is data that is managed within a component and can change over time, usually in response to user events. When a component's state changes, the component re-renders. Props are immutable from the child's perspective, while state is mutable.

3. **What is the useState hook, and how does it work?**
The `useState` hook is a function that lets you add React state to functional components. You call it inside your function component to declare a state variable. It returns an array with two elements: the current state value and a function to update it. When the update function is called with a new value, it schedules a re-render of the component, and the state variable reflects the latest value.

4. **How can you share state between components in React?**
State can be shared by "lifting it up" to a common parent component. The parent component holds the state and passes it down to child components via props. The parent also passes down functions that allow the children to update the shared state. For complex state shared across many components, state management libraries like Context API, Redux, or Zustand are often used.

5. **How is event handling done in React?**
Event handling in React is done by passing a function as a prop to a JSX element (e.g., `onClick={handleClick}`). The function is called when the event occurs. React events are synthetic, meaning they are wrappers around native browser events for consistency. You must explicitly call `preventDefault()` to stop default behavior, unlike in HTML. Event handler functions typically update state to change the UI.