document.addEventListener('DOMContentLoaded', function () {
    const userCards = document.getElementById('user-cards');
    const gallery = document.getElementById('gallery');

    // Fetch user data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            if (userCards) {
                users.forEach(user => {
                    const card = document.createElement('div');
                    card.className = 'col-md-4';
                    card.innerHTML = `
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text">Username: ${user.username}</p>
                                <p class="card-text">Email: ${user.email}</p>
                                <p class="card-text">Phone: ${user.phone}</p>
                                <p class="card-text">Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                                <p class="card-text">Company: ${user.company.name}</p>
                                <p class="card-text">Address: ${user.address.street}, ${user.address.city}</p>
                            </div>
                        </div>
                    `;
                    userCards.appendChild(card);
                });
            }
        });

    // Fetch photos data
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photos => {
            if (gallery) {
                photos.forEach(photo => {
                    const col = document.createElement('div');
                    col.className = 'col-md-3';
                    col.innerHTML = `
                        <div class="card mb-4">
                            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                            <div class="card-body">
                                <p class="card-text">${photo.title}</p>
                            </div>
                        </div>
                    `;
                    gallery.appendChild(col);
                });
            }
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const userCards = document.getElementById('user-cards');

    // Fetch user data
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            if (userCards) {
                users.forEach(user => {
                    const card = document.createElement('div');
                    card.className = 'col-md-4';
                    card.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text"><i class="fas fa-user"></i> Username: ${user.username}</p>
                                <p class="card-text"><i class="fas fa-envelope"></i> Email: ${user.email}</p>
                                <p class="card-text"><i class="fas fa-phone"></i> Phone: ${user.phone}</p>
                                <p class="card-text"><i class="fas fa-globe"></i> Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                                <p class="card-text"><i class="fas fa-building"></i> Company: ${user.company.name}</p>
                                <p class="card-text"><i class="fas fa-map-marker-alt"></i> Address: ${user.address.street}, ${user.address.city}</p>
                            </div>
                        </div>
                    `;
                    userCards.appendChild(card);
                });
            }
        });
});

document.addEventListener('DOMContentLoaded', function () {
    const userCards = document.getElementById('user-cards');
    const gallery = document.getElementById('gallery');

    // Fetch user data for index.html
    if (userCards) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                users.forEach(user => {
                    const card = document.createElement('div');
                    card.className = 'col-md-4';
                    card.innerHTML = `
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${user.name}</h5>
                                <p class="card-text"><i class="fas fa-user"></i> Username: ${user.username}</p>
                                <p class="card-text"><i class="fas fa-envelope"></i> Email: ${user.email}</p>
                                <p class="card-text"><i class="fas fa-phone"></i> Phone: ${user.phone}</p>
                                <p class="card-text"><i class="fas fa-globe"></i> Website: <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                                <p class="card-text"><i class="fas fa-building"></i> Company: ${user.company.name}</p>
                                <p class="card-text"><i class="fas fa-map-marker-alt"></i> Address: ${user.address.street}, ${user.address.city}</p>
                            </div>
                        </div>
                    `;
                    userCards.appendChild(card);
                });
            });
    }

    // Fetch photos data for gallery.html
    if (gallery) {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(photos => {
                photos.slice(0, 20).forEach(photo => { // Display only the first 20 photos
                    const col = document.createElement('div');
                    col.className = 'col-md-3';
                    col.innerHTML = `
                        <div class="card">
                            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                            <div class="card-body">
                                <p class="card-text">${photo.title}</p>
                            </div>
                        </div>
                    `;
                    gallery.appendChild(col);
                });
            });
    }
});

