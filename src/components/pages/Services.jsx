import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummyData"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Services' />
          <div className='content grid3'>
            {services.map((item, index) => (
              <div className='box' data-aos='flip-left' key={index}>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}