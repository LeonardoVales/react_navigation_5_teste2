import React from 'react';
import { View, Text, StyleSheet, Button } from "react-native";

import { AuthContext } from './context';

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }

});

const ScreenContainer = ({ children }) => (
    <View style={styles.container}>{children}</View>
);

export const Home = ({navigation}) => (
    <ScreenContainer>
        <Text>Master list Screen</Text>
        <Button title="React Native by Example" 
            onPress={ () => navigation.push('Details', {name: 'React Native by Example'}) }></Button>
        <Button title="React Native School" 
            onPress={ () => navigation.push('Details', {name: 'React Native School'}) }></Button>
        <Button title="Drawer" onPress={ () => navigation.toggleDrawer()}></Button>
    </ScreenContainer>
);

export const Details = ({ route }) => (
    <ScreenContainer>
        <Text>Details screen</Text>
        {route.params.name && <Text>{route.params.name}</Text> }
    </ScreenContainer>
);

export const Search = ({navigation}) => (
    <ScreenContainer>
        <Text>Search Screen</Text>
        <Button title="Search 2" onPress={ () => navigation.push('Search2') }></Button>
        <Button title="React Native School" onPress={ () => {
                navigation.navitate('Home', {
                    screen: 'Details',
                    params: { name: 'React Native School'}
                }); 
            }}
        />
    </ScreenContainer>
);

export const Search2 = () => (
    <ScreenContainer>
        <Text>Search2 Screen</Text>
    </ScreenContainer>
);

export const Profile = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Profile Screen</Text>
            <Button title="Drawer" onPress={ () => navigation.toggleDrawer() }></Button>
            <Button title="Sign out" onPress={ () => navigation.toggleDrawer() }></Button>
        </ScreenContainer>
    );
};

export const Splash = () => (
    <ScreenContainer>
        <Text>Loading...</Text>
    </ScreenContainer>
);

export const SignIn = ({navigation}) => {
    return (
        <ScreenContainer>
            <Text>Sign in screen</Text>
            <Button title="Sign In" onPress={() => alert('Todo!')} ></Button>
            <Button title="Create Account" 
            onPress={() => navigation.push('CreateAccount') }></Button>
        </ScreenContainer>
    );
};

export const CreateAccount = () => {
    return (
        <ScreenContainer>
            <Text>Create Account Screen</Text>
            <Button title="Sign Up" onPress={() => alert('Todo!')} ></Button>
        </ScreenContainer>
    );  
};