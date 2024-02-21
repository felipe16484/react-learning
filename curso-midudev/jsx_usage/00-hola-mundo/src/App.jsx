import { TwitterFollowCard } from './TwitterFollowCard.jsx'

import './App.css'

export function App() {
    return (
        <section className='App'>

            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Sandemetrio
            </TwitterFollowCard>
            
        </section>
    )
}