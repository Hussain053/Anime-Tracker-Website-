const animeData = [
    { 
      title: "Naruto: Shippuden", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstbFg_7jwsM0McNPReJs21GAZCb8u3lePBFfl77eoqSJpcryb", 
      description: "A ninja who seeks recognition and dreams of becoming the Hokage.",
      year: 2007,
      genre: "Action, Adventure",
      rating: "8.7"
    },
    { 
      title: "Death Note", 
      img: "https://imgix.ranker.com/user_node_img/42/832061/original/832061-photo-u1135031594?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&bg=fff&h=300&w=300", 
      description: "A student finds a notebook that kills anyone whose name is written in it.",
      year: 2006,
      genre: "Thriller, Supernatural",
      rating: "9.0"
    },
    { 
      title: "Attack on Titan", 
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10701949_b_v8_ah.jpg", 
      description: "Humans fight for survival against man-eating giants.",
      year: 2013,
      genre: "Action, Fantasy",
      rating: "9.1"
    },
    { 
      title: "One Piece", 
      img: "https://m.media-amazon.com/images/S/pv-target-images/2020dd9f0db1e4603188c02e7ddb45c0fbc1def9ecb7f115bd0e893d86b51af0._SX1080_FMjpg_.jpg", 
      description: "A pirate's journey to find the One Piece and become the Pirate King.",
      year: 1999,
      genre: "Adventure, Fantasy",
      rating: "8.9"
    },
    { 
      title: "My Hero Academia", 
      img: "https://m.media-amazon.com/images/M/MV5BNzgxMzI3NzgtYzE2Zi00MzlmLThlNWEtNWVmZWEyZjNkZWYyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
      description: "In a world where almost everyone has superpowers, a powerless boy aims to be a hero.",
      year: 2016,
      genre: "Action, Superhero",
      rating: "8.5"
    },
    { 
      title: "Bleach", 
      img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQHpNYiydpCRI5INWUrPPck12Q4xMfnwliVB4VsPLrD4Xm7sCARUnVcJgqN9sX1ejNKV0bHKqMclHYIMqzRNndTT8eE-JQ82NogX79I5g", 
      description: "A teenager gains the powers of a Soul Reaper to protect the living and fight evil spirits.",
      year: 2004,
      genre: "Action, Supernatural",
      rating: "8.4"
    },
    { 
      title: "Tokyo Ghoul", 
      img: "https://m.media-amazon.com/images/M/MV5BNmJkZjUyYjItNjM1MC00YTU1LTgwNjMtMDA4YjdlYzc4MWQzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", 
      description: "A college student becomes a half-ghoul after a near-fatal encounter with a ghoul.",
      year: 2014,
      genre: "Horror, Action",
      rating: "8.3"
    },
    { 
      title: "Code Geass", 
      img: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p186544_b_v8_ad.jpg", 
      description: "A young man with the power to control minds seeks revenge and change the world.",
      year: 2006,
      genre: "Action, Mecha",
      rating: "8.7"
    },
    { 
      title: "Vinland Saga", 
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Vinland_Saga_volume_01_cover.jpg/250px-Vinland_Saga_volume_01_cover.jpg", 
      description: "The story of Vikings and one young warrior's journey of vengeance.",
      year: 2019,
      genre: "Action, Historical",
      rating: "8.8"
    },
    { 
      title: "Mob Psycho 100", 
      img: "https://upload.wikimedia.org/wikipedia/en/4/4b/Mob_Psycho_100_manga_vol_1.jpg", 
      description: "A middle schooler with psychic powers tries to live a normal life while dealing with his powers.",
      year: 2016,
      genre: "Comedy, Action",
      rating: "8.6"
    },
  ];
  
  const animeGrid = document.getElementById("animeGrid");
  
  animeData.forEach(anime => {
    const card = document.createElement("div");
    card.className = "anime-card";
    card.innerHTML = `
      <img src="${anime.img}" alt="${anime.title}" />
      <div class="info">
        <h3>${anime.title}</h3>
        <p><strong>Year:</strong> ${anime.year}</p>
        <p><strong>Genre:</strong> ${anime.genre}</p>
        <p><strong>Rating:</strong> ⭐ ${anime.rating}</p>
        <p class="description">${anime.description}</p>
      </div>
    `;
  
    // Add an event listener to toggle visibility of the description
    card.querySelector('img').addEventListener('click', () => {
      const description = card.querySelector('.description');
      description.classList.toggle('visible');
    });
  
    animeGrid.appendChild(card);
  });
  const topAnime = [
    { name: "Attack on Titan", type: "https://cdn-icons-png.flaticon.com/512/1404/1404945.png", rating: "9.1", views: "25M" },
    { name: "Death Note", type: "https://cdn-icons-png.flaticon.com/512/1404/1404943.png", rating: "9.0", views: "30M" },
    { name: "Fullmetal Alchemist: Brotherhood", type: "https://cdn-icons-png.flaticon.com/512/1404/1404946.png", rating: "9.0", views: "22M" },
    { name: "One Piece", type: "https://cdn-icons-png.flaticon.com/512/1404/1404949.png", rating: "8.9", views: "45M" },
    { name: "Vinland Saga", type: "https://cdn-icons-png.flaticon.com/512/1404/1404942.png", rating: "8.8", views: "5M" },
    { name: "Jujutsu Kaisen", type: "https://cdn-icons-png.flaticon.com/512/1404/1404944.png", rating: "8.8", views: "12M" },
    { name: "Code Geass", type: "https://cdn-icons-png.flaticon.com/512/1404/1404948.png", rating: "8.7", views: "8M" },
    { name: "Naruto Shippuden", type: "https://cdn-icons-png.flaticon.com/512/1404/1404947.png", rating: "8.7", views: "35M" },
    { name: "Demon Slayer", type: "https://cdn-icons-png.flaticon.com/512/1404/1404950.png", rating: "8.6", views: "20M" },
    { name: "Mob Psycho 100", type: "https://cdn-icons-png.flaticon.com/512/1404/1404937.png", rating: "8.6", views: "6M" },
    { name: "Bleach", type: "https://cdn-icons-png.flaticon.com/512/1404/1404951.png", rating: "8.4", views: "15M" },
    { name: "Tokyo Ghoul", type: "https://cdn-icons-png.flaticon.com/512/1404/1404952.png", rating: "8.3", views: "14M" },
    { name: "Hunter x Hunter", type: "https://cdn-icons-png.flaticon.com/512/1404/1404938.png", rating: "9.0", views: "16M" },
    { name: "Steins;Gate", type: "https://cdn-icons-png.flaticon.com/512/1404/1404941.png", rating: "8.9", views: "10M" },
    { name: "My Hero Academia", type: "https://cdn-icons-png.flaticon.com/512/1404/1404953.png", rating: "8.5", views: "18M" }
  ];
  
  const topAnimeBody = document.getElementById("topAnimeBody");
  
  topAnime.forEach((anime, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td><img src="${anime.type}" alt="Type Icon" /></td>
      <td>${anime.name}</td>
      <td>⭐ ${anime.rating}</td>
      <td>${anime.views}</td>
    `;
    topAnimeBody.appendChild(row);
  });
  // This function will show a welcome message when the page loads
window.onload = function() {
  alert("Welcome to Anime Tracker Website!");
};
