import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SafeArea from './src/components/SafeArea/SafeArea';
import Navigation from './src/components/Navigation/Navigation';
import AuthProvider from './src/components/AuthProvider';

export default function App() {
  return (
    <AuthProvider>
      <SafeArea>
        <Navigation />
        <StatusBar style="auto" />
      </SafeArea>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
