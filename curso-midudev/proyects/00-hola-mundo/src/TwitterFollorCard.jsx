import PropTypes from 'prop-types';
import './App.css'

TwitterFollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired,
    formatUserName: PropTypes.func.isRequired
};

export function TwitterFollowCard({ formatUserName, userName, children, isFollowing }) {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    alt="El avatar de midudev"
                    src={`https://unavatar.io/${userName}`}
                />
                <div className='tw-followCard-info'>
                    <strong>
                        {children}
                    </strong>
                    <span className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-buitton'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}