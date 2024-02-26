import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
    {
        id: 1,
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollowing: true
    },
    {
        id: 2,
        userName: 'pheralb',
        name: 'Pablo Sendemetrio',
        isFollowing: false
    },
    {
        id: 3,
        userName: 'PacoHedz',
        name: 'Paco Hernandez',
        isFollowing: true
    },
    {
        id: 4,
        userName: 'TMChein',
        name: 'Tomás Cadena',
        isFollowing: false
    }
]


export function App() {
    return (
        <section className='App'>
            {
                users.map(({ id,userName,name,isFollowing }) => ( 
                    <TwitterFollowCard 
                        key={id}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}