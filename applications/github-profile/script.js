const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(user) {
    const resp = await fetch(APIURL + user);
    const respData = await resp.json();

    console.log(respData);
    createUserCard(respData);

    getRepos(user);
}

async function getRepos(user) {
    const resp = await fetch(APIURL + user + '/repos')
    const respData = await resp.json();

    addReposToCard(respData);
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div class="image-container">
                <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
            </div>

            <div class="user-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul class="info">
                    <li>
                        ${user.followers}<strong>Follows</strong>
                    </li>
                    <li>
                        ${user.following}<strong>Following</strong>
                    </li>
                    <li>
                        ${user.public_repos}<strong>Repos</strong>
                    </li>
                </ul>
                <h4>Repos: </h4>
                <div id="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const repoEls = document.getElementById("repos");

    repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 15)
        .forEach(repo => {

            const repoEl = document.createElement("a");
            repoEl.classList.add("repo");

            repoEl.href = repo.html_url;
            repoEl.target = "_blank";
            repoEl.innerText = repo.name;

            repoEls.appendChild(repoEl);
        });
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const user = search.value;
    if (user) {
        getUser(user);
        search.value = "";
    }

});

getUser("florinpop17");