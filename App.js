import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import music_data from './src/music-data.json';
import Card from './src/components/SongCard';
import SearchBar from './src/components/SearchBar';

function App() {
  const [dataList, setDataList] = useState(music_data);

  const renderCard = ({item}) => <Card song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;

  const onSearch = text => {
    const filteredList = music_data.filter(dataList => {
      const searchedText = text.toLowerCase();
      const lowerTitles = dataList.title.toLowerCase();
      return lowerTitles.includes(searchedText);
    });
    setDataList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={onSearch} />
        <FlatList
          data={dataList}
          renderItem={renderCard}
          keyExtractor={data => data.id}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
