import React from 'react';

const Card = ({ data }) => {
    console.log(data);
    const { thumbnail, title, owner, description } = data

    return (
        <div className='my-10'>
            <div className="card  bg-base-100   shadow-xl md:flex-row">
                <figure><img src={thumbnail} alt="course" className='w-[400px]' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl '>{description} <br /><span> <small>{owner}</small></span></p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary"> Continue course</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;