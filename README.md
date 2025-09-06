## Project Description

`leetcode-ts` is a TypeScript project designed to provide solutions and utilities for solving LeetCode problems efficiently. This repository contains well-structured, type-safe, and maintainable code to help developers practice algorithm challenges and improve their coding skills using TypeScript.

## Features

- Clean and modular TypeScript codebase
- Solutions to a variety of algorithm problems
- Utility functions and helpers for common tasks
- Configured for easy debugging and testing
- Continuous Integration setup for quality assurance

## Project Structure

```
leetcode-ts/
├── src/                 # Source code directory
│   ├── solutions/       # Problem solutions
|           |-- problemName/
├── tests/               # Test files
├── .github/             # GitHub workflows for CI
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- TypeScript (installed locally via devDependencies)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/leetcode-ts.git
   cd leetcode-ts
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Build the project (if necessary):

   ```bash
   npm run build
   ```

## Example Usage

Here's a simple example of how to run a solution or utility function:

```typescript
import { twoSum } from './src/solutions/twoSum';

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
```

## Scripts

- `npm run build`: Compile TypeScript files to JavaScript.
- `npm run test`: Run tests using your preferred test runner.
- `npm run lint`: Run linter to check code style.
- `npm run debug`: Start debugging session (configured for VSCode).

## TypeScript Configuration

The project uses a `tsconfig.json` file with the following key settings:

- `target`: ES2020
- `module`: CommonJS
- `strict`: true (enables all strict type-checking options)
- `esModuleInterop`: true
- `outDir`: `dist`

This configuration ensures type safety and compatibility with Node.js environments.

## Debugging

To debug the project in VSCode:

1. Open the project in VSCode.
2. Set breakpoints in your TypeScript files.
3. Use the provided launch configuration (`.vscode/launch.json`) to start debugging.
4. Run `npm run debug` or use the VSCode debugger UI.

## Continuous Integration (CI)

The project includes GitHub Actions workflows for:

- Running tests on push and pull requests
- Linting code to enforce style guidelines
- Building the project to catch compilation errors

These workflows help maintain code quality and ensure reliable contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
