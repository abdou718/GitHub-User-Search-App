document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.querySelector('.search-bar');
  const searchbutton = document.querySelector('.search-button');

  searchbutton.addEventListener("click", () => {
    let user= searchBar.value.split(' ').join('');
    getUser(user);
  
  })
  async function getUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error('User not found');
    }
    const data = await response.json();
    console.log(data);
    filldata(data);
  }
  function filldata(user){
    const username =document.querySelector('.user-name');
    const image = document.querySelector('.user-image');
    const hashtag = document.querySelector('.user-hashtag');
    const bio = document.querySelector('.user-bio');
    const debut = document.querySelector('.user-debut');
    const repoNumber = document.querySelector('.repos-number');
    const followersNumber = document.querySelector('.followers-number');
    const followingNumber = document.querySelector('.following-number');
    const location = document.querySelector('.location');
    const twitter = document.querySelector('.twitter');
    const company = document.querySelector('.company');
    const website = document.querySelector('.website');

    username.innerHTML = user.name;
    image.src = user.avatar_url;
    hashtag.innerHTML = '@'+user.login;
    bio.innerHTML = user.bio;
    if(user.bio == null){
      bio.innerHTML = 'This profile has no bio';
    }

    const date = new Date(user.created_at);
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    debut.innerHTML ='Joined'+ ' ' + date.getDate()+ ' ' + month + ' ' + year;
    
    
    repoNumber.innerHTML = user.public_repos;
    followersNumber.innerHTML = user.followers;
    followingNumber.innerHTML = user.following;
    location.innerHTML = user.location;
    if(user.location == null){
      location.innerHTML = 'Not available';
      document.querySelector('.user-location img').style.filter = 'none';
      location.style.color = 'var(--DarkBlue)';
    }
    twitter.innerHTML = user.twitter_username;
    if(user.twitter_username == null){
      twitter.innerHTML = 'Not available';
      document.querySelector('.user-X img').style.filter = 'none';
      twitter.style.color = 'var(--DarkBlue)';
    }
    company.innerHTML = user.company;
    if(user.company == null){
      company.innerHTML = 'Not available';
      document.querySelector('.user-company img').style.filter = 'none';
      company.style.color = 'var(--DarkBlue)';
    }
    website.innerHTML = user.blog;
    if(user.blog == null){
      website.innerHTML = 'Not available';
      document.querySelector('.user-github img').style.filter = 'none';
      website.style.color = 'var(--DarkBlue)';
    }
    
  }
  if( searchBar.value == ''){
    getUser('octocat');
  }
})
