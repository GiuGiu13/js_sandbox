class GitHub{
    constructor(){
        this.client_id ='2cb092324d19f7d796dc';
        this.client_secret = '4ba468db1c593ca448101e056681826fd0462ca1';
        this.repos_count = 5;
        this.repos_sort = 'created: asc'
    }

    async getUser(user){
        let profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        let profile = await profileResponse.json();
        let repos = await repoResponse.json();


        return{
            profile,
            repos
        }
    }
}