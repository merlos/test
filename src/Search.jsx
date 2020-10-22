import React from 'react'
import { useState } from 'react'
import {Button} from '@material-ui/core'

export default function Search({onSearch}) {
  
  const [searchString, setSearchString] = useState("")

  const handleClick = () => {
    onSearch && onSearch(searchString)
  }
  return (
    <>
    <Button onClick={handleClick}>Search</Button>
    </>
  )
}