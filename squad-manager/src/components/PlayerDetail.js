import React from 'react';
import faker from 'faker';

const PlayerDetail = (props) => {
    return (
        <span className="comment" >
                <a href="/" className="avatar">
                    <img alt = "avatar" src={faker.image.image()} />
                </a>
                <div className="content">
                    <a href="/" className="author">

                        {props.name}

                    </a>
                    <div className="metadata">
                        <span className="date">

                            {props.position}

                        </span>
                    </div>
                <div className="text">

                    {props.number}

                    </div>
            </div>
        </span>
    );
}

export default PlayerDetail;