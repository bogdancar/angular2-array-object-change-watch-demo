This is a demo app of listening to an array binded on ng-component for changes. This a change on Angular 2 that is not well documented thus difficult to figure out. In this app we will bind a datasource that is going to be an array where we push a value each 5 seconds. On our component we will raise an event each time a push happen on the array. 
To achieve that we are going to use DoCheck from Angular Core aswell as IterableDiffers to compare the states of the array. If you want to check an object change, use instead KeyValueDiffers.
This demo is built and works on Angular 4.2.3 (June 2017)


# Angular2ArrayObjectWatchDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
