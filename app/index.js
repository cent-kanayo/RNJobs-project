import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { COLORS, SIZES, icons, images } from '../constants';
import { Stack } from 'expo-router';

import ScreenHeaderBtn from '../components/common/header/ScreenHeaderBtn';
import Welcome from '../components/home/welcome/Welcome';
import Popularjobs from '../components/home/popular/Popularjobs';
import Nearbyjobs from '../components/home/nearby/Nearbyjobs';

const Home = () => {
  const onPresshandler = () => {};
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
              onPresshandler={onPresshandler}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimension="60%"
              onPresshandler={onPresshandler}
            />
          ),
          headerTitle: '',
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
