import React from 'react';
import {useLocation} from "react-router-dom";

// const user = {
//     "login": "sm-rahimi",
//     "id": 96327795,
//     "node_id": "U_kgDOBb3Ycw",
//     "avatar_url": "https://avatars.githubusercontent.com/u/96327795?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/sm-rahimi",
//     "html_url": "https://github.com/sm-rahimi",
//     "followers_url": "https://api.github.com/users/sm-rahimi/followers",
//     "following_url": "https://api.github.com/users/sm-rahimi/following{/other_user}",
//     "gists_url": "https://api.github.com/users/sm-rahimi/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/sm-rahimi/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/sm-rahimi/subscriptions",
//     "organizations_url": "https://api.github.com/users/sm-rahimi/orgs",
//     "repos_url": "https://api.github.com/users/sm-rahimi/repos",
//     "events_url": "https://api.github.com/users/sm-rahimi/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/sm-rahimi/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Mostafa Rahimi",
//     "company": null,
//     "blog": "",
//     "location": null,
//     "email": null,
//     "hireable": null,
//     "bio": null,
//     "twitter_username": null,
//     "public_repos": 2,
//     "public_gists": 0,
//     "followers": 1,
//     "following": 1,
//     "created_at": "2021-12-18T05:29:23Z",
//     "updated_at": "2022-09-22T07:07:51Z"
// };


const Main = () => {
    const location = useLocation();
    const user = location.state;
    let userID="";
    if (user!==null)
        userID = user.name || user.login;
    return (
        <div className="container">
            <div className="code-text-container">
                <strong className="code-pink">→</strong>
                <span className="code-text">~/User information</span>
                {user===null&&<span>not found &nbsp;</span>}
                <span className="Prompt-cursor"></span>
            </div>
            {user!==null && <div className="card">
                <img src={user.avatar_url} alt={user.name} className="card-img"/>
                <h5 className="card-name">{userID}</h5>
                <div className="card-followers">
                    <p>{user.followers} followers</p>
                </div>
                <div className="card-following">
                    <p>{user.following} following</p>
                </div>
                <div className="card-gists">
                    <p>{user.public_gists} gists</p>
                </div>
                <div className="card-repos">
                    <p>{user.public_repos} repos</p>
                </div>
                <button type="button" onClick={() => console.log('/main')} className="btn card-btn"><a href={user.html_url}>Go to page</a></button>
            </div>}
        </div>
    );
};

export default Main;