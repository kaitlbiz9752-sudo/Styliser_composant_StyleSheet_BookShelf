import { ScrollView, Text, StyleSheet } from 'react-native';

export default function WelcomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      indicatorStyle="white"
    >
      <Text style={styles.title}>
        Bienvenue sur BookShelf
      </Text>

      <Text style={styles.description}>
        BookShelf est une bibliothèque numérique qui permet
        aux utilisateurs de découvrir, organiser et consulter
        leurs livres préférés.

        Cette application propose une expérience simple,
        moderne et agréable, avec une interface claire
        et cohérente.

        Faites défiler pour lire l’intégralité de la description
        et découvrir les fonctionnalités principales de l’application.
        BookShelf est une bibliothèque numérique qui permet
        aux utilisateurs de découvrir, organiser et consulter
        leurs livres préférés.

        Cette application propose une expérience simple,
        moderne et agréable, avec une interface claire
        et cohérente.

        Faites défiler pour lire l’intégralité de la description
        et découvrir les fonctionnalités principales de l’application.
        BookShelf est une bibliothèque numérique qui permet
        aux utilisateurs de découvrir, organiser et consulter
        leurs livres préférés.

        Cette application propose une expérience simple,
        moderne et agréable, avec une interface claire
        et cohérente.

        Faites défiler pour lire l’intégralité de la description
        et découvrir les fonctionnalités principales de l’application.
        BookShelf est une bibliothèque numérique qui permet
        aux utilisateurs de découvrir, organiser et consulter
        leurs livres préférés.

        Cette application propose une expérience simple,
        moderne et agréable, avec une interface claire
        et cohérente.

        Faites défiler pour lire l’intégralité de la description
        et découvrir les fonctionnalités principales de l’application.
        
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  title: {
    fontSize: 32,
    color: '#EDEFEE',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    color: '#EDEFEE',
    paddingHorizontal: 30,
    textAlign: 'center',
  },
});
