 var homeButton = document.getElementById('nav-home');
 var aboutButton = document.getElementById('nav-about');
 var projectButton = document.getElementById('nav-project');
 var skillButton = document.getElementById('nav-skill');
 var toolButton = document.getElementById('nav-tool');
 var contactButton = document.getElementById('nav-contact');

 var downloadButton = document.getElementById('download');

 var task = document.getElementById('task');
 var patel = document.getElementById('patel')
 var ecom = document.getElementById('E-com');

 var home = document.getElementById('home');
 var about = document.getElementById('about');
 var project = document.getElementById('project');
 var skills = document.getElementById('skills');
 var tools = document.getElementById('tools');
 var contact = document.getElementById('contact');

 document.addEventListener("DOMContentLoaded", function () {
    const mobileButton = document.getElementById("mobile-menu-button");
    const mobileDropdown = document.getElementById("mobile-dropdown");

    mobileButton.addEventListener("click", function () {
        // alert('button clicked');
        mobileDropdown.classList.toggle("active");
    });
});


 document.getElementById("contact-form").addEventListener("submit", function(event) {

  const nam = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

    event.preventDefault(); // Prevent the default form submission behavior
    const formData = {
        name : nam,
        email : email,
        message : message
    }
    
    fetch("https://portfolio-10.onrender.com/mail", {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(formData)
     })
     .then(response => response.json())
     .then(data => {
       console.log("Response from server:", data);
     })
     .catch(error => {
       console.error("Error:", error);
     });
   
   
   // Rest of the code to capture data and send it using fetch
  });
  
  
 
 downloadButton.addEventListener('click', function() {
     const pdfUrl = 'BhavyaSPatelResume-2.pdf';
        
    // Create a temporary anchor element
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.target = '_blank'; // Open in a new tab
    anchor.download = 'BhavyaSPatelResume.pdf'; // Specify the downloaded file name
    anchor.click();
 })

task.addEventListener('click', function(){
    window.location.href='https://radiant-sable-3c911a.netlify.app';
});
patel.addEventListener('click',function(){
    window.location.href='https://github.com/Bhavu2412/Patel-Pathshala';
});
ecom.addEventListener('click', function () {
    window.location.href='https://github.com/Bhavu2412/E-Comm';
});

function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}



window.addEventListener('scroll', function () {
    if (isElementInViewport(home)) {
        homeButton.classList.add('active');
    } else {
        homeButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(about)) {
        aboutButton.classList.add('active');
    } else {
        aboutButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(project)) {
        projectButton.classList.add('active');
    } else {
        projectButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(skills)) {
        skillButton.classList.add('active');
    } else {
        skillButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(about)) {
        aboutButton.classList.add('active');
    } else {
        aboutButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(tools)) {
        toolButton.classList.add('active');
    } else {
        toolButton.classList.remove('active');
    }
});
window.addEventListener('scroll', function () {
    if (isElementInViewport(contact)) {
        contactButton.classList.add('active');
    } else {
        contactButton.classList.remove('active');
    }
});
