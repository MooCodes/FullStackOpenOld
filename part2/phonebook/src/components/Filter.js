import React, { useState } from 'react'

const Filter = ({ setFilteredTerm }) => {

    return (
        <div>
            filter shown with <input onChange={(e) => setFilteredTerm(e.target.value)} />
        </div>
    )
}

export default Filter