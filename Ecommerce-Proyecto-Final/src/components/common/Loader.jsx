import React from 'react'
import { SpinnerCircularFixed } from "spinners-react"

function Loader() {
  return (
    <SpinnerCircularFixed size={50} thickness={100} speed={100} color="rgba(57, 97, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
  )
}

export default Loader