# Blighted Reef site
Demo site for a tiki bar or other bar. Incorporates random images from CocktailDB API.

**Link to project:** https://blightedreef.netlify.app/

![Site Preview Image](https://github.com/cynthiablack/blighted-reef/blob/main/blightedreef.png)

## How It's Made:

Tech used: HTML, CSS, JavaScript

The Blighted Reef Tiki was built using semantic HTML, responsive CSS, and JavaScript. The site is built for larger screens, then CSS media queries were added to create a mobile-friendly layout.

A list randomizer function selects the names of 3 tiki drinks from an array, then sends an API call to CocktailDB for images of those drinks. The CocktailDB API drink images appear in a carousel at the bottom of the page; the images in the carousel can be changed by refreshing the page.

## Lessons Learned:

Think before you code! I ended up spending a lot of time on the drink randomization function because I'd convinced myself that Math.random and a for loop were the only way to accomplish what I wanted. A few minutes of thinking through the functionality led to more focused research and an elegantly simple combination of sort and slice.