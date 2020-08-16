import React from 'react'
import img12 from '../components/img/ex.jpg'
import img13 from '../components/img/me.jpg'
import img14 from '../components/img/pl.jpg'
import '../components/style.css'
export default function Kb(){
  return(
    <div>
      <h1 className='text0'>Explore yourself</h1>
      <div className='Kb1'>
        <div className='Kb2'>
          <img src={img12}/>
          <h2>Self Asessment</h2>
          <p>This self asessment help us to bring out the innate capabilities in you and make us to guide you towards reaching success</p>
        </div>
        <div className='Kb3'>
          <img src={img13}/>
          <h2>Mentors</h2>
          <p>Mentor is the one who helps you to explore your field of passion.We provide the best mentors who help you in every domain</p>
        </div>
        <div className='Kb4'>
          <img src={img14}/>
          <h2>Job placements</h2>
          <p>We assure you to be with you in the journey of your success and place you in the best job that suits yoyr passion</p>
        </div>
      </div>
    </div>
  )
}