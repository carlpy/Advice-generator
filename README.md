# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Links

- Solution URL: [The solution](https://www.frontendmentor.io/solutions/responsive-advicegenerator-with-scss-and-api-fetch-SH9c3JI5c7)
- Live Site URL: [The site](https://chic-bavarois-618671.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- SCSS
- Mobile-first workflow

### What I learned

In this challenge i learnt how to use asyncronous JS and the Fetch API to GET data from an API and put it on the web, such an amazing thing. Also the understanding of Promises and how do they work in order to ease the Program workflow.

```js
try { 
        const response = await fetch(ADVICE_API);
        const data = await response.json();
        const {id, advice} = data.slip;
    
        adviceNumber.innerText = id;
        adviceContainer.innerText = advice;
    } 
```

### Continued development

i will be developing more in js using asyncronous functionality in order to make more complex web apps, besides that, i will implement a better mobile first workflow to get more organized


### Useful resources

- [MDN web docs](https://developer.mozilla.org/es/) - This helped me to understand how promises work and also it gives you a lot of examples, super recommended.

## Author

- Frontend Mentor - [@carlpy](https://www.frontendmentor.io/profile/carlpy)
