import React from 'react'
import './protifilio.css'
import IMG1 from '../../assets/p1.webp'
import IMG2 from '../../assets/p2.webp'
import IMG3 from '../../assets/p3.webp'
import IMG4 from '../../assets/p4.webp'
import IMG5 from '../../assets/p5.webp'
import IMG6 from '../../assets/p6.webp'

const data=[{
id:1,
image:IMG1,
title:'Scholarship Ranking Website',
github:'https://github.com/lokiSharma0/scholarshipwebsite',
demo:'https://github.com/lokiSharma0/scholarshipwebsite'

},
{
  id:2,
  image:IMG2,
  title:'Siva Clothing Website',
  github:'https://github.com/lokiSharma0/shivaclothingwebsite',
  demo:'hhttps://github.com/lokiSharma0/shivaclothingwebsite'
},
{
  id:3,
  image:IMG3,
  title:'Linkwalla (Facebook clone)',
  github:'https://github.com/lokiSharma0/socialmediareactjs',
  demo:'https://github.com/lokiSharma0/socialmediareactjs'
},
{
  id:4,
  image:IMG4,
  title:'Birthday Reminder',
  github:'https://github.com/lokiSharma0/proj1react',
  demo:'https://github.com/lokiSharma0/proj1react'
},
{
  id:5,
  image:IMG5,
  title:'People List ',
  github:'https://github.com/lokiSharma0/listingitems',
  demo:'https://github.com/lokiSharma0/listingitems'
},
{
  id:6,
  image:IMG6,
  title:'Films Book',
  github:'https://github.com/lokiSharma0/filmslistreactapp',
  demo:'https://github.com/lokiSharma0/filmslistreactapp'
}
]
export const Portifilio = () => {
  return (
    <section id='portifilio'>
      <h5>My Recent Website</h5>
      <h2>Projects</h2>
    <div className="container portfolio_container">
      
      {data.map(({id,image,title,github,demo})=>{
        return(
          <article className='portifilio_items' key={id}>
        <div className="portifilio_items_images">
         <img className='demo_image' src={image} alt="f1"/>
        </div>
        <h3>{title}</h3>
        <div className="portifilio_item-cta">
        <a href={github} className='btn' >Github</a>
        <a href={demo} className='btn-btn' >View Codes</a>
        </div>
      </article>
        )
      })}
      
    </div>
    </section>
  )
}
