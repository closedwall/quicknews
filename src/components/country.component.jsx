import React from 'react'

const ChooseCountry = (props) => {
    const {country, handleItemClick} = props
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {country}
            </button>
            <ul className="dropdown-menu " onClick={handleItemClick}>
                <p className='btn m-0 text-start w-100' name='in'>India</p>
                <p className='btn m-0 text-start w-100' name='ae'>UAE</p>
                <p className='btn m-0 text-start w-100' name='pl'>Poland</p>
                <p className='btn m-0 text-start w-100' name='sa'>South Africa</p>
                <p className='btn m-0 text-start w-100' name='us'>United State</p>
                <p className='btn m-0 text-start w-100' name='ca'>Canada</p>
                <p className='btn m-0 text-start w-100' name='it'>Italy</p>
                <p className='btn m-0 text-start w-100' name='ru'>Russian</p>
                <p className='btn m-0 text-start w-100' name='cn'>China</p>
                <p className='btn m-0 text-start w-100' name='ch'>Switzerland</p>
            </ul>
        </div>
    )
}

export default ChooseCountry
