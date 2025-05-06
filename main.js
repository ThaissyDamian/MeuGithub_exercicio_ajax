document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector("#name");
    const usernameElement = document.querySelector("#username");
    const avatarElement = document.querySelector("#avatar");
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector("#link");
    
    fetch("https://api.github.com/users/thaissyDamian")
    .then(function(res){
        return res.json();
    })

    .then(function(json) {
        console.log(json);

        if (json.status == 404) {
            throw new Error("user not found");
        }

        nameElement.innerHTML = json.name;
        usernameElement.innerHTML = json.login;
        avatarElement.src = json.avatar_url;
        reposElement.innerHTML = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })

    .catch(function(erro) {
        alert("User not found");
    });

})