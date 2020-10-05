
const GITHUB_URL = "https://api.github.com/users/shai-web";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const nameElement = document.getElementById("my-name");
    nameElement.innerText = data.name;
    console.log(name);
  });

