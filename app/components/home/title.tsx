import React from 'react'

type Props = {
    title?: string,
    subtitle?: string
}

const Title = ({ title, subtitle }: Props) => {
    return (
        <section className='title-comp mb-6 text-center'>
            {
                title 
                &&
                <h2 className="text-5xl md:text-6xl mx-auto mb-6">{title}</h2>

            }
            {
                subtitle
                &&
                <p className=" text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-14">
                    {subtitle}
                </p>
            }


        </section>
    )
}

export default Title
