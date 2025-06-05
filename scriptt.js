document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const root = document.documentElement;
  
    function updateTheme() {
      const isLight = root.classList.toggle("light-theme");
      localStorage.setItem("theme", isLight ? "light" : "dark");
      toggleBtn.textContent = isLight ? "🌞" : "🌙";
    }
  
    toggleBtn.textContent = root.classList.contains("light-theme") ? "🌞" : "🌙";
    toggleBtn.addEventListener("click", updateTheme);
  
    //  FORM HANDLER (No theme toggle duplication)
    const form = document.getElementById("animeForm");
    const output = document.getElementById("formOutput");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        const data = new FormData(form);
        const name = data.get("name");
        const age = data.get("age");
        const dob = data.get("dob");
        const country = data.get("country");
        const favoriteAnime = data.get("favoriteAnime");
  
        output.innerHTML = `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Age:</strong> ${age}</p>
          <p><strong>DOB:</strong> ${dob}</p>
          <p><strong>Country:</strong> ${country}</p>
          <p><strong>Favorite Anime:</strong> ${favoriteAnime}</p>
        `;
  
        form.reset();
      });
    }
  });
  