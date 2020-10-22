import React from 'react'
import { useState } from 'react'
import {Button, Box} from '@material-ui/core'

export default function Search({onSearch}) {
  
  const [searchString, setSearchString] = useState("")

  const handleClick = () => {
    onSearch && onSearch(searchString)
  }
  return (
    <Box paddingBottom={2} display="flex">
    <Button variant="contained" onClick={handleClick}>Search</Button>
    </Box>

  )
}