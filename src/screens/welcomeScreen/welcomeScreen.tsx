import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [loginMessage, setLoginMessage] = useState<string>();
  const [isLoginAttemptSuccessful, setIsLoginAttemptSuccessful] = useState<boolean>(false);

  const handleLoginSubmit = () => {
    if (username?.toLowerCase() === 'success') {
      setLoginMessage('You have successfully authenticated');
      setIsLoginAttemptSuccessful(true);
    } else  {
      setLoginMessage('Username or password is incorrect');
      setIsLoginAttemptSuccessful(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/concentrix_logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.header} testID='welcome'>Welcome</Text>
      <Text style={styles.body}>This is a sample React Native login screen.</Text>

      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />

      {!!loginMessage && (
        <Text style={[styles.loginMessage, { color: isLoginAttemptSuccessful ? 'green' : 'red' }]}>{loginMessage}</Text>
      )}

      <Pressable onPress={handleLoginSubmit} style={!username || !password ? styles.buttonDisabled : styles.button} disabled={!username || !password}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    alignSelf: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginMessage: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
