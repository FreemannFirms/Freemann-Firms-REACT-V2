import React from 'react'
import Button from '../Reusable/Button'

const CryptoContent = () => {
  return (
    <div>
        <div>
            <h1 className='font-bold'>COURSE CONTENT</h1>
            <ul className='mb-4'>
                <li className='font-bold py-3' >INTRODUCTION</li>
                <li>1. What you do not know about the financial markets, the truth untold.</li>
                <li>2. Proper villains, who they are and how they affect the world of finance.</li>
                <li className='font-bold py-2' >DIGITAK ACTIVITIES WITH RESPECT TO FINANCE</li>
                <li>1. Everything blockchain.</li>
                <li>2. What exactly is Cryptocurrency?</li>
                <li className='font-bold py-2' >DECENTRALIZED FINANCE</li>
                <li>1. Defi vs Cenfi, why knowing the difference is a game changer.</li>
                <li>3. Exchanges and wallets.</li>
                <li>4. Investing in Cryptocurrencies and all you need to know..</li>
                <li className='font-bold py-2' >MARKET ANALYSIS</li>
                <li>1. Introduction to Trading the Financial markets.</li>
                <li>2. Basic Technical Education.</li>
                <li>3. Spot Trading.</li>
                <li>4. Futures Trading.</li>
                <li className='font-bold py-2' >PORTFOLIO MANAGEMENT</li>
                <li>1. Stocks, forex, Crypto and Fiat, knowing the difference and how to maximize profits.</li>
                <li>2. Risk mitigation strategies.</li>
                <li>3. The issues arising with Cryptocurrencies and how to avoid them.</li>
            </ul>
            <Button>
                ENROLL
            </Button>
        </div>
    </div>
  )
}


export default CryptoContent