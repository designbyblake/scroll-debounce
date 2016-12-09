# scroll-debounce

Window.scroll events fire on every pixel scrolled; this kills performance. This script will allow you to add functions to an array which will fire once every 100 milliseconds (or timing of your choice) if the page is scrolled.

With this script the if you scroll 1000 pixels in one second at most your functions fire 10 times; without it they fire 1000 times.


## Install

With [npm](https://www.npmjs.com/) do:

```
npm install --save-dev scroll-debounce
```

## How to use scroll-debounce

Using your favorite JavaScript module bundler, such as [browserify](http://browserify.org/) require scrollDebounce, add your functions and run the init function.


## More Documentation and Examples Coming Soon


## To-do
* Write Unit Tests
* Write Documentation
* Create example code to show this in action
* Lint code
* Drink more coffee