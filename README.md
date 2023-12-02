# AnimalProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

# Tasks

- have a quick overview of the project structure
- get familiar with [CatService](./src/app/services/cat.service.ts) and [DogService](./src/app/services/dog.service.ts) services as well as [CatFact](./src/app/models/cat-fact.ts), [CatFactsResponse](./src/app/models/cat-facts-response.ts), [DogFact](./src/app/models/dog-fact.ts) and [DogFactsResponse](./src/app/models/dog-facts-response.ts) interfaces
- create reusable `AnimalFactList` component in `src/app/components/animal-fact-list` directory
- `AnimalFactList` component should be able to display a list of animal facts coming from different fact services e.g. [CatService](./src/app/services/cat.service.ts) or [DogService](./src/app/services/dog.service.ts) (potentially also different ones in the future)
- in `App` component you will find [Tabs](https://material.angular.io/components/tabs/overview) component with cat facts and dog facts tabs, using created `AnimalFactList` component display each fact list in separate tab. You can use any known method to provide correct fact services for `AnimalFactList` component however using Strategy design pattern is preferred
- add unit tests to cover functionalities in selected components/services

# Resources
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
