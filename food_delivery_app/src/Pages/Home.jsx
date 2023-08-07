import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Card from '../Components/Card'
import Banner from '../Components/Banner'
export default function Home() {
    return (
        <div>
            <div><Navbar/></div>
            <div><Banner/></div>
            <div><Card/></div>
            <div><Footer /></div>
        </div>
    )
}
