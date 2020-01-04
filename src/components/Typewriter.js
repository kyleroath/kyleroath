import React, { useState, useEffect } from 'react';

const typeDefaults = {
  minTypeSpeed: 50,
  maxTypeSpeed: 90,
  initDelay: 700,
}

const Typewriter = (props) => {
    const [text, setText] = useState('')

    const clicketyClack = (text, minTypeSpeed, maxTypeSpeed, initDelay) => {
      let str = ''
      let typeSpeed = 0
  
      text.split('').forEach(c => {
        typeSpeed += Math.random() * (maxTypeSpeed - minTypeSpeed) + minTypeSpeed
        setTimeout(() => {
          str += c
          setText(str)
        }, initDelay + typeSpeed)
      })
    }

    useEffect(() => {
      const { minTypeSpeed, maxTypeSpeed, initDelay } = typeDefaults

      clicketyClack(props.text, minTypeSpeed, maxTypeSpeed, initDelay)
    }, [])

    useEffect(() => {
      return () => {
        clearTimeout()
      }
    }, [])

    return (
      <div className={props.className}>
      {text}
      <span>&nbsp;</span>
    </div>
    )
}

export default Typewriter
