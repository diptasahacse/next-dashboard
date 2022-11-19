import React from 'react'

const PageTitle = ({ breadcrumbs, title }) => {
    return (
        <div className="bg-accent p-6 m-5 rounded-lg bg-secondary">
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p>{breadcrumbs}</p>
            </div>


        </div>
    )
}

export default PageTitle