import {View, Text, StyleSheet} from 'react-native'

function Subtitle({ children}) { // children is a reserved prop and the text between opening and closing tags will be autmatically passed.
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle

const styles = StyleSheet.create({
  subtitle: {
    color: '#c9ab99',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitleContainer: {
    margin: 6,
    paddingBottom: 6,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#c9ab99',
    borderBottomWidth: 2,
  },
})