import { View, Text, StyleSheet } from 'react-native';

export default function BookShelfFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Tous droits réservés – BookShelf 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EE9972',
    paddingVertical: 16,
    marginBottom: 10,
  },
  text: {
    textAlign: 'center',
    color: 'black',
  },
});
