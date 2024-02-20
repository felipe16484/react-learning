import { TwitterFollowCard } from './TwitterFollowCard.jsx'

import './App.css'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Sandemetrio" />
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing={false} userName="vxnder" name="Vanderhart" />
        </section>
    )
}