import React from 'react';
import '../../css/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
  
  // const [searchValue, setSearchValue] =  React.useState('');
  
  const onSearchValueChange = (event) =>{
    console.log(event.target.value);
    setSearchValue(event.target.value)
  };
  
  return (
    <React.Fragment>
    <input 
    className="TodoSearch" 
    placeholder="Search your to-do" 
    value = {searchValue}
    onChange = {onSearchValueChange}
    />

</React.Fragment>

  );
}

export {TodoSearch};
