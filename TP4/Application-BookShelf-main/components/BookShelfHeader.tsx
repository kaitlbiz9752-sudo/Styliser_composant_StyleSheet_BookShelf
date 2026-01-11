import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BookShelf</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 32,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
});
