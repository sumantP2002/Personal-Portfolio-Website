import React from 'react'
import './Coding.css'
import Leetcode2 from '../../assets/Leetcode2.png'
import gfg1 from '../../assets/GFG.png'

function Coding() {

    const Document = [
        {
            id: 1,
            title: "Leetcode Coding Journey",
            img: Leetcode2,
            link: 'https://leetcode.com/Sumant_pandey_/',
        },
        {
            id: 2,
            title: "Geeks for Geeks Coding Journey",
            img: gfg1,
            link: 'https://auth.geeksforgeeks.org/user/20uec134',
        }
    ]

  return (
    <section id="coding">
        <h2>Coding Achievement</h2>

        <div className='container container-coding'>
            {Document.map((doc) => (
                <article className="coding-item" key={doc.id}>
                    <div className='coding-item-image'>
                        <img src={doc.img} alt="" />
                    </div>
                    <div className='coding-item-content'>
                        <h3>{doc.title}</h3>
                        <a href={doc.link} className="btn-coding">Link</a>
                    </div>
                    
                </article>
            ))}
        </div>
    </section>
  )
}

export default Coding