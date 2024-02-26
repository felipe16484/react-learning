import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true,
    },
    {
        userName: 'pheralb',
        name: 'Pablo Sendemetrio',
        isFollowing: false,
    },
    {
        userName: 'pheralb',
        name: 'Pablo Sendemetrio',
        isFollowing: false,
    },
    {
        userName: 'pheralb',
        name: 'Pablo Sendemetrio',
        isFollowing: false,
    }
]


export function App() {
    return (
        <section className='App'>

            <TwitterFollowCard userName="midudev" initialIsFollowing={true}>
                Miguel Ángel Durán
            </TwitterFollowCard>

            <TwitterFollowCard userName="pheralb">
                Pablo Sandemetrio
            </TwitterFollowCard>
            
        </section>
    )
}