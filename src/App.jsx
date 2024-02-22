import './App.css'; 
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

const users = [
  {
    userName: 'kevincodev',
    name: 'Kevin Corrales Mora',
    isFollowing: true
  },
  {
    userName: 'ritvales',
    name: 'Ritvales',
    isFollowing: false
  },
  {
    userName: 'alejaylagrua',
    name: 'Aleja y La Grua',
    isFollowing: true
  },
  {
    userName: 'TMChein',
    name: 'Tomas',
    isFollowing: false
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
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
