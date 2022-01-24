import React from 'react';
import { useState } from 'react';

const repo = [
    'React',
    'C#',
    'Angular',
    'Database',
    'HTML',
    'w3skol',
    'Data',
    'Bootstrap'
]
const SearchBar =() => {
    const [searchValue, setSearchValue] = useState ('') 
    const Change = (event) => {
        setSearchValue(event.target.value)
    }

    const displayButton = searchValue.length > 0
    const TaBort = () => {
        setSearchValue("Sök här")
    }

    
        const filteradRepos = repo.filter((repos) => {
            return repos.includes(searchValue)
        })
    

  return(<div>
      <input type= 'text' value = {searchValue} onChange={Change} />
      
      {displayButton && <button onClick={TaBort}>radera</button>}
      
    <ul>
      {filteradRepos.map((repos) => {
          return <li key ={repos}> {repos}
          </li>
      })}
      </ul>
  </div>
      )
  
}

export default SearchBar;
