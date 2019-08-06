import EventList from './EventList';
import EventForm from './EventForm';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
});

const App = createAppContainer(AppNavigator);

export default App;