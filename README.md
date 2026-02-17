This assignment is a great resource to learn how to master parent to child communication (passing props). It is important to know that callback functions matter because they let a child component notify the parent when something happens. They keep data flowing in one direction while still allowing interaction. They make your components work together instead of acting in isolation.

Instructions Below:

1) Create your own copy of the project by clicking Fork on GitHub.
   
2) Begin by: Open your terminal inside the project folder and run npm install. This will have every resource for the project.

Coding Task:

Inside the App class component:

Import initialData from data.js

Set your state to use that data

Inside App.jsx, write a method that:

Receives an id, Finds the matching character, Updates its image and/or status, & Calls this.setState() with the updated array

3) Pass this to each child, Render Child compoenets with .map()

4) Build-on ChildComponent.jsx

5) Destructure the props in the child so you can use them easily, and make the button call onAction(id) to trigger the parent’s update method.

6) Run the application by using npm run dev

Note: Vite defaults to port 5173. Check your terminal output for the local URL.
