1. What problem does the context API help solve?
    * We use the **Context API** when we have global data that lots of components share (user, theme, etc), or when we have to pass data through intermediate components. This helps us keep our state relatively clean.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    * **Actions** are payloads of information that send data from your application to your store. They are the only source of information for the store.
    * **Reducers** specify how the application’s state changes in response to actions sent to the store.
    * **Store** is the object that brings them together. Store holds application state and allows state to be updated via dispatch(action). Because it is where all of the state will live, the store is known as a ‘single source of truth’ in redux applications.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
    * Application state is immutable. Application state is the state the affects the entire application. Component state refers to the state in a component.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
    * With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store. Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

5. What is your favorite state management system you've learned and this sprint? Please explain why!
    * I prefer to use Context API, because it simplifies state management.
