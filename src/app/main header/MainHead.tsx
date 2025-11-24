import React from 'react'
import MainDisplay from '../first section/MainDisplay'
import MainNav from '../navbar/MainNav'

export default function MainHead() {
  return (
    <div className=" bg-[linear-gradient(45deg,rgba(189,36,223,0.3),rgba(45,106,222,0.3)_97.15%25)] bg-blend-multiply">
      <MainNav />
      <MainDisplay />
</div>

  )
}
