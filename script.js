const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 9;
const apiKey = 'mGFZXbCmcmSjgpiSOpKCpVDSSqJBMv9veRNn7awxfRk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Helper Func to set attr on DOM elements
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Create Elements for Links & Photos. Add to DOM
function displayPhotos() {
    // Run Func for each obj in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        });
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        });
        // Put <img> inside <a>, then put both inside imageContainer Element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

// Get Photos from Unsplash API
async function getPhotos() {
    try {
      const response = await fetch(apiUrl);
      photosArray = await response.json();
      displayPhotos();  
    } catch (error) {
    // Catch Error Here
    }
}

// On Load
getPhotos();