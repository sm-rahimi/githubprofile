import './App.css';
import {useState} from "react";
import { useNavigate } from "react-router-dom";

function App() {
    let navigate = useNavigate();
    const [userSearch, setUserSearch] = useState("");
    const [userRes, setUserRes] = useState({});

    const handleClick = () => {
        fetch(`https://api.github.com/users/${userSearch}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setUserRes(data);
                console.log(data)
            })
            .catch((error) => {
                setUserRes({res: "not found"});
                console.error('Error:', error);
            });
    }

    const createUserCard = (user) =>{
        const userID = user.name || user.login;
        const cardHTML = (
            <div className="card">
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
                <button type="button" onClick={()=>navigate('/main',{state:user})} className="btn card-btn">More info</button>
            </div>
        );
        return cardHTML;

    }

    return (
        <div className="App">
            <div className="code-text-container">
                <strong className="code-pink">→</strong>
                <span className="code-text">~/Search user in GitHub</span>
                <span className="Prompt-cursor"></span>
            </div>
            <form className="user-form" id="form" onSubmit={(e) => {
                e.preventDefault();
            }}>
                <input type="text" className="search-input" id="search" placeholder="Search a Github User"
                       onChange={(e) => setUserSearch(e.target.value)}/>
                <button className="btn" onClick={() => handleClick()}>
                    <span className="btn__visible">search</span>
                    <span className="btn__invisible">please double check</span>
                </button>
            </form>
            {userRes.name&&createUserCard(userRes)}
        </div>
    );
}

export default App;
