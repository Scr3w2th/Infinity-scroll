const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

// Unsplash API
const count = 9;
const apiKey = 'mGFZXbCmcmSjgpiSOpKCpVDSSqJBMv9veRNn7awxfRk';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Create Elements for Links & Photos. Add to DOM
function displayPhotos() {
    // Run Func for each obj in photosArray
    photosArray.forEach((photo) => {
        // Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        // Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
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