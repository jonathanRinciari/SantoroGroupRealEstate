


var testimonials = [{
    "name": "cederholm",
    "attribution": "John Doe, Some Company",
    "quote": "Best realtor ever"
}, {
    "name": "lisagor",
    "attribution": "random name",
    "quote": "This is a place holder"
}]

var testimonialsTwo = [{
    "name": "Timothy",
    "attribution": "John Doe & Katie",
    "quote": "We loved kate!."
}, {
    "name": "lisagor",
    "attribution": "name place holder",
    "quote": "This is a good qoute"
}]

var testimonialsThree = [{
    "name": "Timothy",
    "attribution": "John Doe ",
    "quote": "We loved yoda."
}, {
    "name": "lisagor",
    "attribution": "name place holder 2",
    "quote": "This is the best qoute"
}]

var h1Testimonal = document.querySelector("#testing")

h1Testimonal.style.marginBottom = "50px";


testimonial = testimonialsTwo[Math.floor(Math.random() * testimonialsTwo.length)];
    document.getElementById("quote-quotea").innerHTML = testimonial.quote
    document.getElementById("quote-attriba").innerHTML = testimonial.attribution
    document.getElementById("quote-wrappera").className = testimonial.name


testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];
    document.getElementById("quote-quote").innerHTML = testimonial.quote
    document.getElementById("quote-attrib").innerHTML = testimonial.attribution
    document.getElementById("quote-wrapper").className = testimonial.name

testimonial = testimonialsThree[Math.floor(Math.random() * testimonialsThree.length)];
    document.getElementById("quote-quoteb").innerHTML = testimonial.quote
    document.getElementById("quote-attribb").innerHTML = testimonial.attribution
    document.getElementById("quote-wrapperb").className = testimonial.name


