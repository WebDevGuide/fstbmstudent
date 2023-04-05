    // animate hover lecture -->

    const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  const title = project.querySelector('h2');
  const imgDisplay = project.querySelector('img')
  const originalText = title.textContent;
  
  let animation;
  
  project.addEventListener('mouseenter', () => {
    let i = 0;
    animation = setInterval(() => {
      if (i < originalText.length) {
        title.textContent = originalText.slice(0, i + 1);
        i++;
      } else {
        clearInterval(animation);
        imgDisplay.classList.add('zoom');
      }
    }, 10);
  });
  
  project.addEventListener('mouseleave', () => {
    clearInterval(animation);
    title.textContent = originalText;
    title.classList.remove('zoom');
  });
});
    

    // carousel -->
     const carousel = document.querySelector(".carousel");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval;

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

slideInterval = setInterval(nextSlide, 5000);

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    clearInterval(slideInterval);
    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");
    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");
    slideInterval = setInterval(nextSlide, 5000);
  });
});

// search feature

// Load the PDF names JSON file
fetch('pdf_names.json')
  .then(response => response.json())
  .then(data => {
    const pdfNames = data.pdf_names;
    const searchBar = document.querySelector('#search-bar');
    const resultsList = document.querySelector('#results');
    const DisplayLecture = document.querySelector('.lectures-displayer');
    
    // Function to filter PDF names based on search query
    function filterPdfNames(query) {
      return pdfNames.filter(name => name.toLowerCase().includes(query.toLowerCase()));
    }
    
    // Function to display search results in HTML
    function displayResults(results) {
      resultsList.innerHTML = '';
      if (results.length === 0) {
        resultsList.innerHTML = '<li>No results found.</li>';
        DisplayLecture.style.display = 'none';

      } else {
        results.forEach(result => {
          const li = document.createElement('li');
          const link = document.createElement('a');
          link.href = `pdfs/${result}.pdf`;
          link.target = '_blank';
          link.textContent = result;
          li.appendChild(link);
          resultsList.appendChild(li);
        });
        
      }
    }
    
    // Event listener for search bar input
    searchBar.addEventListener('input', event => {
      const query = event.target.value.trim();
      const results = filterPdfNames(query);
      displayResults(results);
      if (searchBar.value.trim() === "") {
        // Prevent the default behavior (submitting the form)
        event.preventDefault();
    
        // Hide the results list
        const results = document.getElementById("results");
        results.style.display = "none";
        DisplayLecture.style.display = "block";
      }
    
      else {
        const results = document.getElementById("results");
        results.style.display = "block";
        DisplayLecture.style.display = 'none';
      }

    });
  })
  .catch(error => console.error(error));


  // slider menu -->
const burgerIcon = document.querySelector('.burger-icon');
const sliderMenu = document.querySelector('.slider-menu');

burgerIcon.addEventListener('click', function() {
  sliderMenu.classList.toggle('show');
});
