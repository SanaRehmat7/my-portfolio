import React from "react"
import { social } from "../data/dummyData"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item, index) => (
          <i data-aos='zoom-in' key={index}>
            {item.icon}
          </i>
      ))}
        <p data-aos='zoom-in'>&copy; All Rights Reserved 2024</p>
    </footer>


    </>
  )
}

export default Footer