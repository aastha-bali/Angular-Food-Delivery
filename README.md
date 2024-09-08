# FoodDeliveryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Overview

This is a food delivery web application built using Angular. The application allows users to browse restaurants, add items to their cart, and place orders seamlessly. The app features user authentication via Firebase, ensuring secure access to user accounts.

## Features

- Browse and view restaurants
- Add menu items to the shopping cart
- Update item quantities in the cart
- Remove items from the cart
- Checkout process with address selection
- Firebase authentication for user accounts
- Responsive design for mobile and desktop devices

 ## Usage

- Users can register and log in using their email and password via Firebase Authentication.
- Users can browse restaurants, add items to their cart, and proceed to checkout.
- Users can view a list of restaurants with details like menu items and estimated delivery times.
- Users can manage their addresses and view their shopping cart at any time.
- Customers can add reviews for restaurants, providing feedback on their dining experience.
- The application is designed to work on various devices, ensuring a smooth user experience.

## Assumptions

- The application does not use a backend service; all data is managed within the frontend for demonstration purposes.
- The application assumes that users have an active internet connection to access Firebase services.
- Users must provide valid email and password credentials to log in or register.
- The application does not support guest checkout; users must authenticate to place orders.
- Payment processing and address management features are simplified and may require integration with external services for a production-level application.


## Technologies Used

- Angular
- Firebase (for authentication)
- TypeScript
- HTML/CSS



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
