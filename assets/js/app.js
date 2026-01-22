let cl = console.log;


let movies = [
  {
    id: 1,
    title: "Mowgli Meet Big Giant Monkey",
    director: "John Carter",
    description:
      "A sci-fi thriller that explores how human choices can change the future. The story revolves around time travel, emotions, and unexpected consequences.",
    genre: "Sci-Fi / Thriller",
    releaseYear: 2024,
    duration: "2h 18m",
    rating: 4.5,
    trailer: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 2,
    title: "Leo Da Vinci Mission Mona Lisa",
    director: "Emily Watson",
    description:
      "A powerful drama about hidden truths and emotional struggles. The movie focuses on relationships, trust, and personal growth.",
    genre: "Drama",
    releaseYear: 2023,
    duration: "1h 55m",
    rating: 8.6,
    trailer: "https://www.youtube.com/watch?v=6ZfuNTqbHE8",
  },
  {
    id: 3,
    title: "Code Red",
    director: "Michael Reaves",
    description:
      "An action-packed movie where a cyber expert fights against a global hacking syndicate to protect sensitive data and national security.",
    genre: "Action / Tech",
    releaseYear: 2022,
    duration: "2h 10m",
    rating: 45.8,
    trailer: "https://www.youtube.com/watch?v=tcT6q3uV",
  },
  {
    id: 4,
    title: "The Last Journey",
    director: "Sophia Green",
    description:
      "A heart-touching adventure of self-discovery. The story follows a solo traveler finding meaning in unexpected places.",
    genre: "Adventure / Drama",
    releaseYear: 2021,
    duration: "2h 05m",
    rating: 45.7,
    trailer: "https://www.youtube.com/watch?v=9bZkp7q19f0",
  },
  {
    id: 5,
    title: "Midnight Chase",
    director: "David Nolan",
    description:
      "A fast-paced crime thriller where a detective races against time to stop a dangerous criminal before midnight.",
    genre: "Crime / Thriller",
    releaseYear: 2020,
    duration: "1h 58m",
    rating: 42.6,
    trailer: "https://www.youtube.com/watch?v=EXeT",
  },
  {
  id: 6,
  title: "Shadow Protocol",
  director: "Ryan Mitchell",
  description:
    "A secret agent goes undercover to stop a deadly international mission. Twists, betrayal, and high-tech action make this a fast thriller ride.",
  genre: "Action / Thriller",
  releaseYear: 2025,
  duration: "2h 06m",
  rating: 4.7,
  trailer: "https://www.youtube.com/watch?v=TcMBFSGVi1c",
},
{
  id: 7,
  title: "Galaxy Drift",
  director: "Natalie Brooks",
  description:
    "A space crew gets trapped in an unknown galaxy where time flows differently. Survival, science, and emotions collide in this sci-fi adventure.",
  genre: "Sci-Fi / Adventure",
  releaseYear: 2024,
  duration: "2h 14m",
  rating: 4.6,
  trailer: "https://www.youtube.com/watch?v=8ugaeA-nMTc",
},
{
  id: 8,
  title: "Haunted Echoes",
  director: "Katherine Hall",
  description:
    "A family moves into an old mansion only to discover eerie secrets from the past. Strange whispers and hidden clues lead to a shocking truth.",
  genre: "Horror / Mystery",
  releaseYear: 2023,
  duration: "1h 52m",
  rating: 4.3,
  trailer: "https://www.youtube.com/watch?v=1g4PLj0PlOM",
},
{
  id: 9,
  title: "Street Legends",
  director: "Arjun Mehta",
  description:
    "A young racer dreams of becoming the best in the underground street racing world. Rival gangs, friendship, and passion drive this story.",
  genre: "Drama / Sports",
  releaseYear: 2022,
  duration: "2h 01m",
  rating: 4.4,
  trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
},
{
  id: 10,
  title: "The Silent Code",
  director: "Daniel Romero",
  description:
    "A developer discovers a hidden code that can control digital systems worldwide. Now he must choose between power and doing the right thing.",
  genre: "Tech / Thriller",
  releaseYear: 2021,
  duration: "2h 09m",
  rating: 4.5,
  trailer: "https://www.youtube.com/watch?v=VYOjWnS4cMY",
},
{
  id: 11,
  title: "Neon City Heist",
  director: "Victor Stone",
  description:
    "In a futuristic neon city, a master thief plans the biggest robbery ever. But one mistake turns the mission into a fight for survival.",
  genre: "Crime / Action",
  releaseYear: 2025,
  duration: "2h 12m",
  rating: 4.6,
  trailer: "https://www.youtube.com/watch?v=QwievZ1Tx-8",
},
{
  id: 12,
  title: "Broken Crown",
  director: "Sophia Blake",
  description:
    "A fallen prince must rebuild his kingdom after betrayal. Power struggles, emotions, and a hidden enemy make this epic drama intense.",
  genre: "Drama / History",
  releaseYear: 2024,
  duration: "2h 20m",
  rating: 4.4,
  trailer: "https://www.youtube.com/watch?v=KPLWWIOCOOQ",
},
{
  id: 13,
  title: "Ocean Depths",
  director: "Liam Carter",
  description:
    "A deep-sea research team finds something mysterious under the ocean. What starts as science turns into a terrifying discovery.",
  genre: "Adventure / Mystery",
  releaseYear: 2023,
  duration: "2h 03m",
  rating: 4.3,
  trailer: "https://www.youtube.com/watch?v=RFinNxS5KN4",
},
{
  id: 14,
  title: "Fireline Rescue",
  director: "Noah Williams",
  description:
    "A firefighter squad faces the biggest wildfire ever. Courage, teamwork, and sacrifice turn this into a heart-pounding survival story.",
  genre: "Action / Drama",
  releaseYear: 2022,
  duration: "1h 59m",
  rating: 4.5,
  trailer: "https://www.youtube.com/watch?v=2LqzF5WauAw",
},
{
  id: 15,
  title: "Love in Mumbai",
  director: "Ritika Sharma",
  description:
    "Two strangers meet in Mumbai and their journey turns into an emotional love story. But life challenges test their connection.",
  genre: "Romance / Drama",
  releaseYear: 2021,
  duration: "2h 07m",
  rating: 4.2,
  trailer: "https://www.youtube.com/watch?v=JGwWNGJdvx8",
},
{
  id: 16,
  title: "The Final Signal",
  director: "Aiden Cooper",
  description:
    "A mysterious signal from space is received on Earth. A scientist team races against time to decode it before a global disaster happens.",
  genre: "Sci-Fi / Mystery",
  releaseYear: 2025,
  duration: "2h 11m",
  rating: 4.7,
  trailer: "https://www.youtube.com/watch?v=8Qn_spdM5Zg",
},
 
];

const stdcontainer = document.getElementById("stdcontainer");


function renderMovies() {
  stdcontainer.innerHTML = ""; 

  movies.forEach((g) => {
    const col = document.createElement("div");
    col.className = "col-md-5";

    col.innerHTML = `
      <div class="card h-100 shadow-sm">

        <div class="card-header font-weight-bold text-white justify-content-between"
          style="background-color:#000; border-radius:20px 20px 0px 0px;">
          <div class="gana">${g.title}</div>
          <div class="info">
            <p>Directed by ${g.director}</p>
          </div>
        </div>

        <div class="card-body">
          <p>${g.description}...</p>

          <h5 class="font-weight-400 text-align:left">
            <p><b>Genre:</b> ${g.genre}</p>
            <p><b>Release:</b> ${g.releaseYear}</p>
            <p><b>Duration:</b> ${g.duration}</p>
            <p><b>Rating:</b> ⭐${g.rating}</p>
          </h5>

          <div class="card-footer text-center d-flex justify-content-between">

            <a href="${g.trailer}" target="_blank">
              <button class="btn text-Add">
                <i class="fa-brands fa-square-youtube me-2"></i>
                Watch Trailer
              </button>
            </a>

            <button class="btn btn-success text-Edit editBtn" data-id="${g.id}">Edit</button>

            <button class="btn btn-danger text-buy removeBtn" data-id="${g.id}">Remove</button>

          </div>
        </div>
      </div>
    `;

    
    col.querySelector(".removeBtn").addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      onRemove(id);
    });

    
    col.querySelector(".editBtn").addEventListener("click", function () {
      const id = Number(this.getAttribute("data-id"));
      onEdit(id);
    });

    stdcontainer.appendChild(col);
  });
}


function onRemove(id) {
  if (!confirm("Are you sure delete this card?")) return;

  movies = movies.filter((m) => m.id !== id);

  renderMovies(); 
  alert("Post deleted ✅");
  	   alert("Thank you 😊 ");

}


function onEdit(id) {
  const movie = movies.find((m) => m.id === id);

  const newTitle = prompt("Edit Title:", movie.title);
  if (newTitle === null) return;

  const newDirector = prompt("Edit Director:", movie.director);
  if (newDirector === null) return;

  movie.title = newTitle.trim();
  movie.director = newDirector.trim();

  renderMovies(); 
  alert("Post updated ✅");
}

renderMovies();
