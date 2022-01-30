# Nestback

## Purpose

The aim of this exercise is to create a NestJS app. I will be using a frontendapp from the course described below as a base and modify, extend or refactor in order to apply and learn different features.

## Project

### Repositories and public website

The repository for 'nestback' can be found in [Github](https://github.com/fcesc-code/nestback.git).

### Tech stack

- [Angular](https://angular.io/) framework
- [Angular CLI](https://angular.io/cli)
- [angular material](https://material.angular.io/) for material components in angular
- [angular cdk](https://angular.io/guide/cdk)to implement common interaction patterns
- [RxJS](https://rxjs.dev/guide/overview) library for reactive programming with Angular
- [NestJS](https://nestjs.com/) for the backend
- [Mongoose](https://mongoosejs.com/) to access MongoDB
- [MongoDB](https://www.mongodb.com/) for the database
- [ODM](https://docs.mongodb.com/manual/core/object-document-mapper/) as object document mapper
- [class-validator](https://www.npmjs.com/package/class-validator) to allow decorator based validation
- [class-transformer](https://www.npmjs.com/package/class-transformer) to allow serialization and deserialization of classes from / to plain objects.
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) to allow metadata to be attached to classes
- [moment](https://momentjs.com/) for date and time parsing, formatting, validation and manipulation
- [core-js](https://www.npmjs.com/package/core-js) for polyfills for older browsers
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) to allow authentication and authorization
- [bcrypt](https://www.npmjs.com/package/bcrypt) to allow password hashing
- [password-hash-and-salt](https://www.npmjs.com/package/password-hash-and-salt) to allow password hashing
- [uuid](https://www.npmjs.com/package/uuid) to allow unique identifiers
- [cross-env](https://www.npmjs.com/package/cross-env) to allow environment variables to be set in a consistent manner across different operating systems
- [dotenv](https://www.npmjs.com/package/dotenv) to allow environment variables to be set in .env files
- [rimraf](https://www.npmjs.com/package/rimraf) to allow files to be deleted in a consistent manner across different operating systems
- [npm-run-all](https://www.npmjs.com/package/npm-run-all) to allow parallel execution of multiple scripts
- [tsc-watch](https://www.npmjs.com/package/tsc-watch) to allow watching of TypeScript files
- [body-parser](https://www.npmjs.com/package/body-parser) to allow parsing of request body in Node
- [Typescript](https://www.typescriptlang.org/)
- [tslint](https://www.npmjs.com/package/tslint) to allow linting of TypeScript files
- [eslint](https://www.npmjs.com/package/eslint) to allow linting of JavaScript files
- [prettier](https://www.npmjs.com/package/prettier) to allow formatting of JavaScript files
- [ts-node](https://www.npmjs.com/package/ts-node) to allow TypeScript files to be executed in NodeJS
- [ts-loader](https://www.npmjs.com/package/ts-loader) to allow TypeScript files to be loaded in Webpack
- [ts-jest](https://www.npmjs.com/package/ts-jest) to allow TypeScript files to be tested in Jest
- [codelyzer](https://www.npmjs.com/package/codelyzer) to allow linting of Angular typescript apps
- [Jasmine](https://jasmine.github.io/) test framework
- [Karma](https://karma-runner.github.io/) test runner
- [Protractor](https://www.protractortest.org/#/) e2e testing in Angular
- [Jest](https://jestjs.io/) for backend testing
- [supertest](https://www.npmjs.com/package/supertest) to allow high abstraction for http testing (API testing)
- [sass](https://sass-lang.com/)
- [GitHub](https://github.com/)
- [GitHub Actions](https://github.com/features/actions) for automated testing in continuous delivery
- [GitHub native Dependabot](https://dependabot.com/) for security alerts
- [GitHub codeQL](https://github.com/github/codeql) for code scanning alerts
- [sonarqube](https://www.sonarqube.org/)
- [firebase](https://firebase.google.com/) to deploy the app
- [firebase-tools](https://www.npmjs.com/package/firebase-tools) for firebase CLI
- [lighthouse](https://www.npmjs.com/package/lighthouse) to generate reports on accessibility, SEO, performacne and good practices.
- [VSCode](https://code.visualstudio.com/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/about) Windows Subsystem for Linux (ubuntu 20)
- [HTML](https://html.spec.whatwg.org/)
- [YAML](https://yaml.org/) for GitHub actions

### Content

- [Pexels](https://www.pexels.com/)

### Project Management

- [Trello](https://trello.com/)
- [kanban](https://en.wikipedia.org/wiki/Kanban)

### Code

- [SOLID Principles](https://en.wikipedia.org/wiki/SOLID)
- [Reactive programming](https://en.wikipedia.org/wiki/Reactive_programming)
- Common [Software Design patterns](https://en.wikipedia.org/wiki/Software_design_pattern)

## Releases

| Version | Date            | Status       | Content         |
| ------- | --------------- | ------------ | --------------- |
| 0.0.1   | 30 January 2022 | Pre-released | Initial version |

|

Availability:
:x: no longer deployed, files available for some time - ✔️ currently deployed and release available - :construction: is under development

### Versions 0.0.1

- v 0.0.1 ✔️ All dependencies have been updated. No vulnerability issues found by github dependabot (30th January 2022).

## Quality gate

- [HTML Validator](https://jigsaw.w3.org/css-validator/): x errors | x warnings \
- [CSS Validator](https://jigsaw.w3.org/css-validator/validator): x errors | x warnings \
- [Karma](https://karma-runner.github.io/): xx/xx tests passed (branch not merged) | Coverage: \
  | statements | branches | lines | functions |
  | ---------- | -------- | ----- | --------- |
  | x.x% | x.x% | x.x% | x.x% |
- [Sonarqube](https://www.sonarqube.org/): x bugs | x0 code smells | x vulnerabilities | x security hotspots | x% code duplication (excluding duplicated API file requested to separate deliverables) \
- [GitHub codeQL](https://github.com/github/codeql): [![CodeQL](https://github.com/fcesc-code/nestback/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/fcesc-code/nestback/actions/workflows/codeql-analysis.yml)

## Continuous delivery

Automated testing in every pull request or merge to the main branch.
Automated code scanning to measure code quality, pull requests cannot be merged if quality is not met.
Automated security alerts for the repository.

## Installation

Note that this repository contains both the frontend and the backend, there are two (nested) package.json, you will need to install both of them. Dependencies are updated to the latest stable versions as of 30th January 2022.

### Installing the repository

You can clone or download the repository from [Github](https://github.com/fcesc-code/nestback.git). Then install all dependencies for the frontend in root/ npm i and in root/backend/ npm i.

### Node Versions

The Node verion used in this repository is v16.13.2.

In case you have other versions you want to keep, you can easily switch between node versions on your machine, for which it is recommended to use a node virtual environment tool such as [nave](https://www.npmjs.com/package/nave) or [nvm-windows](https://github.com/coreybutler/nvm-windows), depending on your operating system.

### Code scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Scripts

In oder for the app to run, you will need to _start both the frontend and the backend servers_.

### Start development (frontend) server

Run `npm start` to start the development server. Navigate to [http://localhost:4200/](http://localhost:4200/). The app will automatically reload if you change any of the source files. Do not use `ng serve` since this app uses a proxy and the app might not work.

### Start backend server

Run `npm run server` to start the development server from the backend directory. If you are in the root directory this command will not work, you need to be on the same directory of the backend package.json. The app will automatically reload if you change any of the source files. Do not use `npm start`.

### Build the frontend

Run `ng build` to build the project. The build artifacts will be stored in the `dist/nestback/` directory.

### Build the backend

Run `npm build` to build the project. The build artifacts will be stored in the `dist/backend/` directory.

### Testing the backend

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### Testing the frontend

```bash
# unit tests
$ ng test

# unit tests for ci
$ npm run test:ci_unit

# e2e tests
$ ng e2e

# test coverage
$ npm run test:cov
```

Note that to use ng e2e command, you need to first add a package that implements end-to-end testing capabilities.

You can use the test ci commands for Github Actions. This command does not watch files, does not open a browser, and does not run tests in parallel. It exits with a code of 0 if all tests pass, and a code of 1 if any test fails, which can be used to integrate it in a CI pipeline.

## Contributions

### Philosophy

This software is currently developed :construction: with educational purposes and is open source based on the course mentioned in the credits section.

### :fire: Issues

Do you want to suggest :bulb: a new feature? Open an [issue](https://github.com/fcesc-code/nestback/issues).
Please, keep it short, descriptive and concise :smiley:

### Security

Check out the how to report a vulnerability in our supported versions in the [SECURITY](https://github.com/fcesc-code/nestback/blob/main/SECURITY.md) :open_book:.

## Credits

### Original course and author

This app is based on the [NestJs In Practice Course](https://angular-university.io/course/nestjs-course). Additional resources can be found in Angular University [Youtube Channel](https://www.youtube.com/channel/UC3cEGKhg3OERn-ihVsJcb7A).

The course can be found in [Udemy](https://www.udemy.com/course/nestjs-course/), and the repository in [Github](https://github.com/angular-university/nestjs-course.git). Credits to the author of the course, [Vasco Cavalheiro](https://twitter.com/vascocav).

The contents of this app do not strictly follow the course: the original code has been extended, modified or refactored. Also, some dependencies were updated. The repository keeps the original folder structure, although I am not a fan of that.

### Who played with the code for fun?

Francesc Brugarolas, [repo](https://github.com/fcesc-code/)

Latest update: February 2022
