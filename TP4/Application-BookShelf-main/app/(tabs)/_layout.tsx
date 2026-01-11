import { View, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';

import BookShelfHeader from '../../components/BookShelfHeader';
import BookShelfFooter from '../../components/BookShelfFooter';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <BookShelfHeader />

      <View style={styles.content}>
        <Tabs />
      </View>

      <BookShelfFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  content: {
    flex: 1,
  },
});
