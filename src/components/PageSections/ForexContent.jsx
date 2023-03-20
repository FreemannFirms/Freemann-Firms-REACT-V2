import React from 'react'
import Button from '../Reusable/Button'

const ForexContent = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold'>COURSE CONTENT</h1>
            <ul className='mb-4'>
                <li className='font-bold py-3' >INTRODUCTION</li>
                <li>1. Trading: A gateway to financial freedom.</li>
                <li>2. Understanding the Fundamentals of Trading.</li>
                <li>3. Basic Forex/Crypto Education</li>
                <li className='font-bold py-2' >TRADING VIEW BASICS</li>
                <li>1. Trendline tools.</li>
                <li>2. Geometric shapes.</li>
                <li>3. Annonation tools.</li>
                <li>4. Prediction & measurement tools.</li>
                <li className='font-bold py-2' >TECHNICAL ANALYSIS</li>
                <li>1. Understanding candlesticks.</li>
                <li>2. Market structure.</li>
                <li>3. Support & resistance.</li>
                <li>4. candlestick patterns.</li>
                <li>5. Chart patterns.</li>
                <li>6. Volume Price Analysis.</li>
                <li>7. Order blocks(OB).</li>
                <li>8. Liquidity Zones.</li>
                <li>9. Wychoff schematics.</li>
                <li>10. Indicators.</li>
                <li className='font-bold py-2' >WHERE THE MONEY IS</li>
                <li>1. Risk management.</li>
                <li>2. Compounding Interest.</li>
                <li>3. Entry, exit, Take Profit & Stop loss.</li>
                <li>4. Hedge Mode & Trailing stop.</li>
                <li>5. Trading Psychology.</li>
            </ul>
            <Button>
                ENROLL
            </Button>
        </div>
    </div>
  )
}


export default ForexContent