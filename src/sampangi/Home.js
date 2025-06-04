import React from 'react'
import Header from './Header'
import HeroSection from './HeroSection'
import WellnessLayout from './WellnessLayout'
import LocationHighlights from './LocationHighlights '
import ReturnOnInvestment from './ReturnOnInvestment '
import CompanyStats from './CompanyStats'
// import ChatBot from './ChatBot'


export default function Home() {
  return (
    <div>
      <div class="flex gap-[2%] flex-wrap content-start">
        <div class="w-full h-[5%] bg-red-400">
            {/* Header */}
            <Header/>
        </div>
        {/* <div class="w-1/4 h-3/4 bg-yellow-300">Sidebar</div> */}
        <div class="grow h-3/4 bg-green-300">
        {/* Content */}
           <HeroSection/>
           <WellnessLayout/>
           <ReturnOnInvestment/>
           <LocationHighlights/>
           <CompanyStats/>
           {/* <ChatBot/> */}
        </div>
        <div class="w-full h-[5%] bg-blue-300">Footer</div>
        <div class="bg-purple-300 p-2">5</div>
        <div class="bg-pink-300 p-2">6</div>
        <div class="bg-orange-300 p-2">7</div>
        <div class="bg-teal-300 p-2">8</div>
        <div class="bg-indigo-300 p-2">9</div>
      </div>
    </div>
  )
}
