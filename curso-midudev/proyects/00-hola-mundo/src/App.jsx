import "./App.css";
import { TwitterFollowCard } from "./TwitterFollorCard";

export function App() {
    const formatUserName = (userName) => `@${userName}`;
    return (
        <div className="App">
            <TwitterFollowCard
                formatUserName={formatUserName} 
                isFollowing
                userName="midudev"
            >
                <strong>Miguel Ángel Durán</strong>
            </TwitterFollowCard>
            <TwitterFollowCard
                formatUserName={formatUserName}
                isFollowing={false}
                userName="pheralb"
            >
                <strong>Pablo Hernandez</strong>
            </TwitterFollowCard>
        </div>
    );
}
