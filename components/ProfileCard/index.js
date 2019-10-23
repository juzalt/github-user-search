import React from 'react';
import './style.css';

function ProfileCard(props) {
  return(
    <React.Fragment>
      <div className="cardContainer">
        {props.name}
      </div>
    </React.Fragment>
  );
}

export default ProfileCard;