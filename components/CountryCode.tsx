import React, { useState, useMemo, useEffect } from 'react';

import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import { countries } from '../Utils/data';
import Button from './atoms/Button';

export default function CountryCode() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState('+91');
  const [query, setQuery] = useState('');
  // console.log('selected', selected)
  useEffect(() => {
    setData(countries as any);
  }, []);

  /*
   **Example filter function
   * @param {string} filter
   */
  const filteredData: any = useMemo(() => {
    if (data && data.length > 0) {
      return data.filter((item: any) =>
        item.name
          .toLocaleLowerCase('en')
          .includes(query.toLocaleLowerCase('en'))
      );
    }
  }, [data, query]);

  /*
   **Input search
   *@param {string} text
   */
  const onSearch = (text: string) => {
    setQuery(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button title={selected} onPress={() =>  onOpen('country')} />
      <Picker
        id="country"
        data={filteredData}
        inputValue={query}
        searchable={true}
        label="Select Country"
        setSelected={(item: any) => setSelected(item.cc)}
        onSearch={onSearch}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  }
});
