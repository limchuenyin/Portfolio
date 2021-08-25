import PortfolioList from '../portfolioList/PortfolioList'
import { useState, useEffect } from 'react'
import './portfolio.scss'
import {featured, webApp, automation, ai} from "../../data"

function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])

    const list = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'automation',
            title: 'Automation'
        },
        {
            id: 'ai',
            title: 'AI'
        },
    ]

    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featured);
                break
            case 'web':
                setData(webApp);
                break
            case 'automation':
                setData(automation);
                break
            case 'ai':
                setData(ai);
                break
        }
    }, [selected])

    return (
        <div className='portfolio' id='portfolio'>

            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} key={item.id}/>
                ))}
            </ul>
            
            <div className="container">
            {data.map((d) => (
                <div className="item">
                    <img src={d.img} alt="" />
                    <h3>{d.title}</h3>
                </div> 
            ))}

            </div>
        </div>
    )
}

export default Portfolio
