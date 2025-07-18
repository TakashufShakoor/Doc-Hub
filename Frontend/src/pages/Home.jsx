import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'


const Home = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
      
    
    </div>
  )
}

export default Home
