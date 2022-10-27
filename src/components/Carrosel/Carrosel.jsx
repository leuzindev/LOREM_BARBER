import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Carrosel.css'
import image1 from '../../assets/img/carroselum.png'
import image2 from '../../assets/img/carroseldois.png'
import image3 from '../../assets/img/carroseltres.png'
import image4 from '../../assets/img/carroselquatro.png'
import image5 from '../../assets/img/carroselcinco.png'
import image6 from '../../assets/img/carroselseis.png'
import image7 from '../../assets/img/carroselsete.png'
import image8 from '../../assets/img/carroseloito.png'


const images = [image1, image2, image3, image4, image5, image6, image7, image8]



export const Carrosel = () => {

  const carousel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

  return (
    <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
      <motion.div 
      className='inner'
      drag="x"
      dragConstraints={{ right: 0, left: -width}}
      initial={{ x:100 }}
      animate={{ x:0 }}
      transition={{ duration: 0.8 }}
      >
          {images.map(image => (
            <motion.div className="item" key={image}>
              <img src={image} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  )
}
