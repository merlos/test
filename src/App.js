import React from 'react';
import {useState, useEffect} from 'react'
import {AppBar,Toolbar, Typography, Box} from "@material-ui/core"
import {Api} from './Api'
import Search from './Search'
import Acronym from './Acronym'

function App() {

  const [loadedAcronyms, setLoadedAcronyms] = useState([])
  const [acronyms, setAcronyms] = useState([])
  
  useEffect(() => {
    Api.getAcronyms().then( data => {
      console.log(data)
      setAcronyms(data) 
      setLoadedAcronyms(data)
    })
  }, [])

  const handleSearch = (searchString) => {
    console.log("Search:", searchString)
  }

  return ( 
   <>
   <AppBar position="static">
    <Toolbar> 
      <Typography variant="h6">UNICEF Acronyms</Typography>
   </Toolbar>
  </AppBar>
  <Box padding={2}>
   <Search onSearch={handleSearch} />
   {acronyms.map(acronym => <Acronym key={acronym.id} acronym={acronym}/>
    )
  }
   </Box>
     </>
  )
}

export default App;
