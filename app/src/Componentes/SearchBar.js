import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar= () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Pesquisar ingredientes"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{borderRadius: 1,
      borderWidth: 2,
      borderColor: '#g6ffff',
      width: '90%',
      height: '70%'
      }}
    />
  );
};

export default SearchBar;