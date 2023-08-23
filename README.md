# JavaScript Promise Error Handling Examples

This repository contains examples of error handling in JavaScript using promises. The code demonstrates different approaches for handling errors in asynchronous functions using the promise pattern.

## Code Examples

### 1. Using `try`-`catch` Approach (`mainTry` Function)

The `mainTry` function showcases error handling using the `try`-`catch` approach. It calls multiple asynchronous functions and uses `await` within a `try` block to catch errors.

```js
// Call the mainTry function to demonstrate error handling using try-catch
mainTry();
```

### 2. Using Higher-Order Function (`error_handle`) Approach (`mainCatch` Function)

The `mainCatch` function demonstrates error handling using a higher-order function (HOF). It calls asynchronous functions and uses the `catch` method along with the `error_handle` HOF to handle errors.

```js
// Call the mainCatch function to demonstrate error handling using higher-order function
mainCatch();
```

## Function Explanation

- `someError`: A function that returns a rejected Promise with a custom error message.
- `someError2`: A function that throws an error directly to demonstrate error handling.
- `someOk`: A function that simulates successful asynchronous execution.
- `error_handle`: A higher-order function that returns an error handling function to standardize error messages and actions.

## Getting Started

1. Clone this repository to your local machine:

```bash
git clone https://github.com/alk-neq-me/js-promise-error-handling.git
```

2. Navigate to the repository folder:

```bash
cd js-promise-error-handling
```

3. Open the JavaScript file `asyncs.js` to explore the code examples and the different error handling approaches.

4. Run the examples by uncommenting the desired function call (`mainTry()` or `mainCatch()`) and executing the script using Node.js.

```bash
node asyncs.js
```

## Contributing

Contributions are welcome! If you find a bug or want to suggest an improvement, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
