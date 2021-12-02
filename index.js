async function getFromGitHub() {
    try {
        const userName = 'dupontdenis';
        const url = 'https://api.github.com/users';
        const reposResponse = await fetch(`${url}/${userName}/repos?per_page=100&sort=full_name&direction=desc`);

        const userRepos = await reposResponse.json();

        userRepos
            .filter(({ name }) => /db/ig.test(name))
            .forEach(({ name }) =>
                document
                    .querySelector("#repos")
                    .insertAdjacentHTML('afterbegin', `<li> ${name} </li>`))

    } catch (error) {
        
        console.log(error);
    }
}
getFromGitHub();
