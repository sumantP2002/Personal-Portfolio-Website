import React from 'react'
import './Certificates.css'
import Flipkart from '../../assets/Flipkart.pdf'
import CB from '../../assets/CB.pdf'
import Tata from '../../assets/Tata.pdf'
import Tatag from '../../assets/TataG.png'
import CBg from '../../assets/CBg.png'
import FLIPg from '../../assets/FLIPg.png'


function Certificates() {
    const Document = [
        {
            id: 1,
            title: "DSA by Coding Blocks",
            doc: CB,
            img: CBg

        },
        {
            id: 2,
            title: "Flipkart Grid 2023",
            doc: Flipkart,
            img: FLIPg
        },
        {
            id: 2,
            title: "Tata Imagination 2023",
            doc: Tata,
            img: Tatag
        }
    ]
  return (
    <section id="certificate">
        <h2>Certificates</h2>

        <div className='container con-coding'>
            {Document.map((doc) => (
                <article className="coding-item" key={doc.id}>
                    <div className='coding-item-image'>
                        <img src={doc.img} alt="" />
                    </div>
                    <div className='coding-item-content'>
                        <h3>{doc.title}</h3>
                        <a href={doc.doc} download className="btn-coding">
                            Download
                          </a>
                    </div>
                    
                </article>
            ))}
        </div>
    </section>
  )
}

export default Certificates