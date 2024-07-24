# React 

## Rendering arrays 

To render arrays in React, you can use the `map` method to iterate over the array and render each item. Here's an example:

```jsx

const items = ['item1', 'item2', 'item3'];

return (
  <ul>
    {listItems.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```
Remember to add the `key` prop to each item to help React identify each item in the list.

## Conditional rendering 

To conditionally render elements in React, you can use the `&&` operator or the ternary operator. Here's an example using the `&&` operator:

```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn && <p>Welcome user!</p>}
  </div>
);
```

You can also use the ternary operator for more complex conditions:

```jsx
const isLoggedIn = true;

return (
  <div>
    {isLoggedIn ? (
      <p>Welcome user!</p>
    ) : (
      <p>Please log in</p>
    )}
  </div>
);
```

## Introduction to hooks, useState

Hooks are tools that are going to help you to manage some of the React features. One of the most used hooks is `useState`. This hook allows you to add a state to your functional components. Like we did with our games where we had a state for the score or lives...
We can create states with the `useState` hook like this:


```jsx
import { useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

The first element of the array returned by `useState` is the state value, and the second element is a function to update the state. You can use the function to update the state value, and React will re-render the component with the new value. By convention, the function to update the state is named `set` followed by the state name.