// script.js

document.getElementById('login').addEventListener('click', function() {
    // Login functionality
    alert('Login clicked');
});

document.getElementById('profile').addEventListener('click', function() {
    // Profile functionality
    alert('Profile clicked');
});

document.getElementById('logout').addEventListener('click', function() {
    // Logout functionality
    alert('Logout clicked');
});

document.getElementById('upload-photos').addEventListener('click', function() {
    // Trigger file input for photo upload
    let input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*';
    input.onchange = handleFiles;
    input.click();
});

document.getElementById('generate-pdf').addEventListener('click', function() {
    // Generate PDF functionality
    alert('Generate PDF clicked');
});

document.getElementById('clear-photos').addEventListener('click', function() {
    // Clear all photos functionality
    document.getElementById('image-container').innerHTML = '';
});

document.getElementById('refresh').addEventListener('click', function() {
    // Refresh functionality
    location.reload();
});

document.getElementById('help').addEventListener('click', function() {
    // Help functionality
    alert('Help clicked');
});

function handleFiles(event) {
    const files = event.target.files;
    const container = document.getElementById('image-container');
    
    for (const file of files) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const imageBox = document.createElement('div');
            imageBox.classList.add('image-box');
            
            const img = document.createElement('img');
            img.src = e.target.result;
            imageBox.appendChild(img);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.style.background = 'red';
            deleteBtn.style.color = 'white';
            deleteBtn.addEventListener('click', function() {
                container.removeChild(imageBox);
            });
            imageBox.appendChild(deleteBtn);
            
            const rotateBtn = document.createElement('button');
            rotateBtn.textContent = 'Rotate';
            rotateBtn.style.background = 'blue';
            rotateBtn.style.color = 'white';
            rotateBtn.addEventListener('click', function() {
                img.style.transform = img.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
            });
            imageBox.appendChild(rotateBtn);
            
            container.appendChild(imageBox);
        }
        
        reader.readAsDataURL(file);
    }
}
