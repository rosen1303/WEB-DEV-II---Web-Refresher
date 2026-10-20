# Trading/stock market explained and simplified for beginners

A beginner-friendly, single-page educational website built with semantic HTML5,
CSS Grid/Flexbox and vanilla JavaScript. No React, packages or external assets.

## Run the page

To run the website please extract the project folder and open `index.html` in a browser. Keep `style.css`
and `script.js` beside it. No installation or build command is needed to open and run the website. / To run the website as phone please press "F12" and choose the phone you would like to test

## Features and code guide

- `index.html`: semantic sections, accessible navigation, labelled form and FAQs.
- `style.css`: dark design, Grid/Flexbox and a 760px responsive breakpoint.
- `script.js`: a submit event reads the inputs, calculates profit/loss and
  updates an accessible status message using DOM manipulation.
- Calculator formula: (sell price − buy price) × number of shares.
- Decorative bars are CSS shapes, not market data or an image.



## Reflection on the website 

For this project I chose to create a beginner guide to trading because its a topic im heavily invested and interested in. My aim was to explain the main concept clearly and at the same time practice my knowledge on HTML,CSS and JavaScript. I found organising the content into sections which are straightforward and easy to understand for a beginner. Choosing the consistent colours and headings also helped make the information easier to follow. The most challenging aspect was the understanding of how JavaScript connect the calculator inputs to the result displayed on the page. For that I have used the help of AI because I had hard time understanding it and actually implementing it fully to work without failures.I needed to understand how events, numerical calculations and DOM updates work together. In my opinion this made the layout suitable for the different screen sizes for phone and computer browser. Overall I loved the project but had to use the help of ai, but was able to improve my javascript knowledge and skills because of that and now I can create interactive features independently and explain my coding decisions with better confidence. 



## My browser testing checklist for overall stability

- [ ] Test at 375px phone width and 1440px desktop width using developer tools.
- [ ] Confirm no horizontal scrolling and check readable text and navigation.
- [ ] Try 100 → 110 with 5 shares: £50 profit, 10%.
- [ ] Try 100 → 90 with 5 shares: £50 loss, −10%.
- [ ] Try equal prices: break-even; try zero sale price: total purchase loss.
- [ ] Confirm empty, negative and fractional-quantity inputs are rejected.
- [ ] Use Tab/Enter to check links, inputs, button and FAQ accessibility.
- [ ] Check the browser console for errors.
- [ ] Write the reflection, commit and push to the official Web Dev II repository.
- [ ] Submit the repository URL on Ultra.
