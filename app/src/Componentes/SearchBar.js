import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchBar= () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Procurar Ingredientes..."
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={{borderRadius: 1,
      borderWidth: 1,
      borderColor: '#g6ffff',
      width: '86%',
      height: '60%',
      }}
    />
  );
};

export default SearchBar;