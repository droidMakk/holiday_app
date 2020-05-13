import React from 'react';
import {View, Text} from 'react-native';
import OAuthManager from 'react-native-oauth';
import {CLIENT_ID, CLIENT_SECRET} from 'react-native-dotenv';

const Calendar = () => {
  React.useEffect(() => {
    const manager = new OAuthManager('calendar_app');
    manager.configure({
      google: {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
    });
    async function fetchData() {
      try {
        const user_data = await manager.authorize('google', {
          scopes: 'https://www.googleapis.com/auth/calendar.events.readonly',
        });
        console.info('USERDATA', user_data);
      } catch (error) {
        console.info('USER ERROR', error);
      }
    }

    fetchData();
  }, []);

  return (
    <View>
      <Text>Dummy</Text>
    </View>
  );
};

export default Calendar;
