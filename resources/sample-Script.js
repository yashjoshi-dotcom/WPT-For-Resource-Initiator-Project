 // creating a script DOM node
 var script = document.createElement("script"); 

// setting its src to the provided URL
script.src = "./resources/indirectly_fetched.js";

// add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
document.head.appendChild(script);  
