# 🤖 typescript-time

Demo project for a lunch and learn presentation about learning to use typescript.

## Running locally

1. Clone the repository.
```
git clone https://github.com/sdevalapurkar/typescript-time.git
```

2. Navigate into the app folder.
```
cd typescript-time
cd app
```

3. Install dependencies.
```
yarn install
```
Note: Make sure you have Node version >= 14 (ex: v14.19.0)

4. Run the app.
```
yarn start
```
Note: It may ask you to run on a different port if you already have something running on port 3000

## Practice

On this branch, the interfaces and setup for the app to function correctly with typescript have been removed. Trying to run the app as it is will not work.
The goal of this practice branch is to help you learn the basics of typescript by taking a sample project and fixing the issues that exist/getting the application running.

### Instructions/Hints

1. Within `Homepage.tsx` try to define an interface to define a bird. Currently a bird has 4 properties, and one of these is optional. Make sure to use the correct types, without using the `any` type.

2. When defining the state variables, try using <i>type assertion</i> (Ex: '<string>') to make sure that the pieces of state within the application are set up to be of the appropriate type.

3. Within components that accept `props`, use <i>type annotation</i> on props and define either a type or an interface that defines the props being passed in to the component. This can be considered to be very similar to propTypes in a jsx component. <b>Note:</b> While doing this, make sure to identify props that are not mandatory to be passed into the component, and set these up as optional.

4. In `Map.tsx` we have a piece of state called `geometry` which we are initializing to `null`. Use `union types` to ensure that typescript does not just consider this state to be of a null type through implicit types. Define the type for this state variable so that we can handle this case gracefully.

5. Define an interface to define the prop types of the `MapEditControls.tsx`, `Datatable.tsx` and `ReportForm.tsx` components.

6. Fix any other errors or warnings that arise as a result of completing these steps.

7. Currently our component `Datatable.tsx` is not setup in the best way possible. Although it is called a datatable, it is very specific to our concept of a bird. Later on if we have a different type of object such as a building, this table would not be setup to handle the building type. Try using `generics` to improve the interface of this component so that it can accept multiple data types and render the data effectively for not only a bird type.
