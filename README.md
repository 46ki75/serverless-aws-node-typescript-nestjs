# Serverless Framework with NestJS and TypeScript Template

## Overview

This template provides a comprehensive boilerplate for deploying serverless applications to AWS Lambda and API Gateway. It employs NestJS for robust backend functionality and TypeScript for type safety and improved code quality.

## Why Use This Boilerplate?

Forking this repository is an option, but for an even smoother setup, leverage the Serverless Framework's install command. This template comes pre-configured with linting, type-checking, and more, making it the perfect starting point for Serverless-NestJS-TypeScript projects.

## Quick Start

### Installation

First, download this boilerplate to your local environment using the following command:

```bash
serverless install -u https://github.com/46ki75/serverless-aws-node-typescript-nestjs -n your-project-name
```

Note: Replace `your-project-name` with your desired project name.

### Dependency Installation

Navigate to the root folder of your new project and run:

```bash
cd your-project-name  # Replace with your chosen project name
npm install
```

Before deploying, make sure to compile the TypeScript files:

```bash
npm run build
```

### Serverless Framework Setup

Initialize the Serverless Framework with:

```bash
serverless
```

During this process, you'll be prompted to deploy your project. Ensure that you've run `npm run build` beforehand to avoid deployment issues.

### Running Locally

To start the NestJS server locally:

```bash
npm start
```

This will compile TypeScript files and then launch the server.

### Development with Live Reloading

For a development environment with live reloading, use:

```bash
npm run start:dev
```

This command will start the server and watch for file changes, reloading automatically when modifications are detected. This is based on the default configuration set up by the Nest CLI when you create a new NestJS project.

## File Descriptions

| File                | Description                                                                                                                 |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `src/main.ts`       | Defines and exports the root handler for the NestJS application. It is minimally configured to allow flexibility.           |
| `src/app.module.ts` | This is where your application modules and providers are defined.                                                           |
| `src/lambda.ts`     | Exports the handler to be passed to AWS Lambda. This handler wraps your NestJS application for serverless deployment.       |
| `serverless.yml`    | Configuration for the Serverless Framework. It specifies settings for deploying your service to AWS Lambda and API Gateway. |

### Alternative Setup with Nest CLI

You can also start by generating a project skeleton with Nest CLI and then copying the `lambda.ts` and `serverless.yml` files from this template. Here's how to do it:

#### Install Nest CLI

If you haven't installed Nest CLI yet, you can install it globally with:

```bash
npm install -g @nestjs/cli
```

#### Create a New NestJS Project

Generate a new NestJS project by running:

```bash
nest new your-project-name
```

Replace `your-project-name` with your desired project name.

#### Copy Required Files

After creating your project, navigate to the project directory and replace or add the `lambda.ts` and `serverless.yml` files from this template.

#### Final Steps

Once the files are copied, follow the rest of the Quick Start guide in this README to complete your setup.
