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
        if (!res.ok) {
            throw new Error("Usuário não encontrado");
        }
        return res.json();
    })
    .then(function(json) {
        console.log(json);

        nameElement.innerText = json.name || "Nome não disponível";
        usernameElement.innerText = "@" + (json.login || "Usuário não encontrado");
        avatarElement.src = json.avatar_url || "https://via.placeholder.com/150";
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    })
    .catch(function(error) {
        console.error(error);
        nameElement.innerText = "Erro ao carregar os dados";
    });

});
