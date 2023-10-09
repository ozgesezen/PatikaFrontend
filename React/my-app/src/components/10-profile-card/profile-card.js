import React from 'react';
import "./profile-card.scss";
import Stats from './stats';

const ProfileCard = (props) => {
    const { avatar, name, location, shot, followers, following } = props;

    const image = require(`../../assets/img/${avatar}`);
    const profileBg = { backgroundImage: `url(${image})` };

    return (
        <div className='profile-card'>
            <div className='header' style={profileBg}></div>
            <div className='content'>
                <div className='avatar' style={profileBg}></div>

                <h2>{name}</h2>
                <h4>{location}</h4>

                <div className='stats'>
                    <Stats name="Shot" value={shot} />
                    <Stats name="Followers" value={followers} />
                    <Stats name="Following" value={following} />
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;