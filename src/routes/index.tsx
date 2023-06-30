import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../modules/Auth/screens/Login';
import { Onboarding } from '../modules/Auth';
import theme from '../theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../contexts/lib/Auth';
import { Favorites, Home, Profile } from '../modules/Home';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStack = () => (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = 'home';
                } else if (route.name === 'Favorites') {
                    iconName = 'heart';
                } else if (route.name === 'Profile') {
                    iconName = 'account';
                }

                const iconSize = focused ? size + RFValue(12) : size;

                return (
                    <MaterialCommunityIcons
                        name={iconName}
                        size={iconSize}
                        color={color}
                    />
                );
            },
            tabBarActiveTintColor: theme.COLORS.TERCIARY,
            tabBarInactiveTintColor: theme.COLORS.TEXT,
            tabBarStyle: {
                backgroundColor: theme.COLORS.PRIMARY,
            },
            headerShown: false,
            tabBarShowLabel: false,
        })}
    >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favorites" component={Favorites} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
);

const AuthStack = () => (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Login" component={Login} />

    </Stack.Navigator>
);

const Navigation: React.FC = () => {
    const { isLoggedIn, isLoading } = useAuth();

    if (isLoading) {
        return null;
    }

    return (
        <NavigationContainer>
            {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};

export default Navigation;
