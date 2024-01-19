import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTask from '../pages/AddTask';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Add"
        component={AddTask}
        options={{
          animation: 'slide_from_bottom',
          gestureDirection: 'horizontal',
        }}
      />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
