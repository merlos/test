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
    //TODO filter acronyms by search string
  }

  console.log(acronyms)

  return ( 
   <>
   <AppBar position="static">
    <Toolbar> 
      <Typography variant="h6">UNICEF Acronyms</Typography>
   </Toolbar>
  </AppBar>
   <Search onSearch={handleSearch} />
   <Box m={2}>
   {acronyms.map(acronym => <Acronym acronym={acronym}/>
    )
  }
   </Box>
     </>
  )
}

export default App;
