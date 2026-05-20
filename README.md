# Week 8 - DH Skills and Methods, 'Minifying Design, Sustainability and Climate Conscious DH'

In this week's lab, you will think about minimising energy usage in Digital Humanities website design, following minimal computing recommendations from the [DH Climate Coalition](https://sas-dhrh.github.io/dhcc-toolkit/toolkit/minimal-computing.html). Just as the University of Glasgow has a [carbon management plan](https://www.gla.ac.uk/myglasgow/sustainability/carbonmanagementplan/), so does our classroom. Today, you will be actively contributing to reaching this greenhouse emission reduction target!

Of course, we will not be able to change the base infrastructure supporting this GitHub Pages site today, which is already partially climate efficient being a static, one-page, resource. If we were decision-makers within Galleries, Libraries, Archives, and Museums (GLAMs), we might choose to change the physical hardware, networks and servers required for our code to run. Nonetheless, you can impact the software processing and developer operations (how many lines of code are required to parse a function, what software packages are we using, how strenuous and heavy is our website to render).

## Warm-up, How Do Digital Organisations Think About Climate Goals? ## 

Using the DHCC Card Game provided on your desk, choose a random selection of ACTION cards. Arrange these on a matrix, where one axis represents the difficulty of implementing the action, and the other axis the impact the action could have. For reference, you may want to think about the University of Glasgow, or any GLAM you have experience working in. Once the cards are arranged, choose one or two that look interesting, and have a discussion about them. This will ground our practical coding exercise.

## Task 1, Calculating Carbon ##

Familiarise yourself with the [Ecograder](https://ecograder.com/report/Z5RLjMEoIuWaPk1MyWaKFgbX) tool, a free carbon calculator that assesses climate emissions from websites, including their size, coding language and processing power, providing recommendations. As an experiment, find a complex website, for instance the [Guardian homepage](https://www.theguardian.com/uk), which includes interactive functions, renders and rich developement options, and compare this to a much simpler blog post of your choosing. A good example is the Barcelona-based [Low <-Tech Magazine](https://solar.lowtechmagazine.com/power), which runs on solar power batteries, and can go offline at times of sustained bad weather. 

Compare the Ecograder reports, what differs? What is causing such carbon emission variance?

## Task 2 - Minifying Website Design ##

This GitHub repository includes the scaffold for a website, a HTML file for structure, CSS file for website styling, and a JavaScript file for some interactive website functions. To see the website, following [This Link
](https://jnockels-sys.github.io/green-coding/). Currently, this website scores 50/100 for climate efficiency, much lower than the Guardian's bulky homepage, though this could be improved. You are going to collectively raise this result, as much as possible, over the course of this lab. 

#### Group 1 - HTML file ####

This image was made available, with permissions gained, by Mariam Yamin, University of Sheffield Senior Archivist, and captured to 300 DPI with a high quality camera. Could the image be compressed? Through open and free tools such as [Squoosh](https://squoosh.app/)?

You could also experiment with the newer [WebP image format](https://en.wikipedia.org/wiki/WebP#Support), although this may depend on browser compatibility, showing how digital sustainability and interoperability can impact climate goals.

Any extraneous or bloated code? Whitespace? Even this will impact the Ecograder score.

#### Group 2 - CSS ####

Could the website be styled differently? Darker colours and themes take less energy on some screen types.

As the Digital Humanities Climate Coalition (DHCC) state - "Your site’s font can actually have a carbon impact and affect accessibility. For example, lightweight sans serif fonts such as Trebuchet are not only good for people with disabilities but they have less ‘weight’ (fewer tails and flourishes) and therefore require fewer pixels to be displayed. Verdana is also good because it is set wider than most fonts (making it more legible without adding weight). Use one of 18 web-safe fonts to make the content compatible with all browsers and screen readers.

If using custom fonts, careful optimisation can reduce the size of a single font from 250kb+ to just 10kb."

Could this font be changed? 

Any extraneous or bloated code? Whitespace? Even this will impact the Ecograder score.

#### Group 3 - JavaScript ####

Are all of these functions necessary? Could the website user do without them? 

Videos, with instant play, are particularly intensive? Could we cut this, or include a function to only play with user discretion? 

Any extraneous or bloated code? Whitespace? Even this will impact the Ecograder score.

---

Now, paste the same url into Ecograder, any change? If so, what can you see in the report? If not, why do you think your changes made for a minimal impact? 
