import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

import styles from './welcome.style';
import { SIZES, icons } from '../../../constants';
import { useRouter } from 'expo-router';

const Welcome = () => {
  const [defaultJobType, setDefaultJobType] = useState('Full-Time');
  const jobTypes = ['Full-Time', 'Part-Time', 'Contract'];
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Cent</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            resizeMode="contain"
            source={icons.search}
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={(jobType) => (
            <TouchableOpacity
              style={styles.tab(defaultJobType, jobType.item)}
              onPress={() => {
                setDefaultJobType(jobType.item);
                router.push(`/search/${jobType.item}`);
              }}
            >
              <Text>{jobType.item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
