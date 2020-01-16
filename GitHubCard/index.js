/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function followerCard(gitUserInfo){
  //task 3 new Elements in order of how they appear above. 
  const newFollowerCard = document.createElement('div');
  const followerImg = document.createElement('img');
    const followerInformation = document.createElement('div')
    const followerUN = document.createElement('h3');
    const followerGitUN = document.createElement('p');
    const followerLocation = document.createElement('p')
    const followerGitProfile = document.createElement('p');
    const profileLink = document.createElement('a');
    const userFollowerCount = document.createElement('p');
    const userFollowing = document.createElement('p');
    const userBio = document.createElement('p');

    //step 4 Classes to new elements. 
  newFollowerCard.classList.add('card');
  followerInformation.classList.add('card-info');
  followerUN.classList.add('name');
  followerGitUN.classList.add('username');

  //content for each element
  followerImg.src = gitUserInfo.avatar_url;
    followerUN.textContent = gitUserInfo.name;
    followerGitUN.textContent = gitUserInfo.login;
    followerLocation.textContent = `Location: ${gitUserInfo.location}`;
    followerGitProfile.textContent = "Profile:"
    profileLink.href = gitUserInfo.html_url;
    profileLink.textContent = gitUserInfo.html_url;
    userFollowerCount.textContent = `Followers: ${gitUserInfo.followers}`;
    userFollowing.textContent = `Following: ${gitUserInfo.following}`;
    userBio.textContent = `Bio: ${gitUserInfo.bio}`;

     //card structure
  newFollowerCard.appendChild(followerImg);
  newFollowerCard.appendChild(followerInformation);
    followerInformation.appendChild(followerUN);
    followerInformation.appendChild(followerGitUN);
    followerInformation.appendChild(followerLocation);
    followerInformation.appendChild(followerGitProfile);
    followerGitProfile.appendChild(profileLink);
    followerInformation.appendChild(userFollowerCount);
    followerInformation.appendChild(userFollowing);
    followerInformation.appendChild(userBio);

  return newFollowerCard;
}

//step 4 Newcard
const cards = document.querySelector('.cards');

//step 1 My own card
axios.get('https://api.github.com/users/josiah-williams')
    .then(response =>{
     console.log(response.data)
     cards.appendChild(followerCard(response.data));
})
// step 5 My Follower's Cards
axios.get('https://api.github.com/users/josiah-williams/followers')
     .then(response =>{
      response.data.forEach((element) => {
      const newGitUserCard = new followerCard(element);
      cards.appendChild(newGitUserCard);
  });

})

.catch((you_did_wrong) =>{
  console.log(you_did_wrong);
})

cards.style.display = 'flex';
cards.style.flexDirection = 'column';
