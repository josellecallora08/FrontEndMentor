import React from 'react'
import './Content.scss';

// Images
import PC from '../../assets/images/image-retro-pcs.jpg'
import laptops from '../../assets/images/image-top-laptops.jpg'
import gaming from '../../assets/images/image-gaming-growth.jpg'

function _Content() {
  return (
    <div className="content">
<div className='contentHome'>
        <div className="container">
            <div className="img">
                <img src={PC} alt="retro Pc" />
            </div>
            <div className="info">
                <h1>01</h1>
                <h2>Reviving Retro PCs</h2>
                <p>What happens when old PCs are given modern upgrades?</p>
            </div>
        </div>
        <div className="container">
            <div className="img">
                <img src={laptops} alt="laptop" />
            </div>
            <div className="info">
                <h1>02</h1>
                <h2>Top 10 Laptops of 2022</h2>
                <p>Our best picks for various needs and budgets.</p>
            </div>
        </div>
        <div className="container">
            <div className="img">
                <img src={gaming} alt="gaming" />
            </div>
            <div className="info">
                <h1>03</h1>
                <h2>The Growth of Gaming</h2>
                <p>How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default _Content