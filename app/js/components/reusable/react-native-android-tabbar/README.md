# react-native-android-tabbar

Example usage:

```
let buttons = [
  {name: "Preferences", uri: 'https://facebook.github.io/react/img/logo_og.png'},
  {name: "Search", uri: 'https://facebook.github.io/react/img/logo_og.png'},
  {name: "Favorites", uri: 'https://facebook.github.io/react/img/logo_og.png'}
];

return (
  <View style={styles.container}>
    <AndroidTabBar type='middle' buttons={buttons} defaultPage={1}>
      <View><Text style={styles.welcome}>Curato preferences oh lawd</Text></View>
      <View><Text>Wow you can search</Text></View>
      <View><Text>haha you favorited things</Text></View>
    </AndroidTabBar>
  </View>
```
