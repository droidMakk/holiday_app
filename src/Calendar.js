import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import { GoogleSignin } from '@react-native-community/google-signin';
import { CLIENT_ID } from 'react-native-dotenv';

const calendar_id = 'en.indian%23holiday%40group.v.calendar.google.com';
const base_url =
  'https://clients6.google.com/calendar/v3/calendars/en.indian%23holiday@group.v.calendar.google.com/events?calendarId';

const Calendar = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        GoogleSignin.configure({
          webClientId: CLIENT_ID,
          scopes: ['https://www.googleapis.com/auth/calendar'],
        });
        await GoogleSignin.signIn();
        const tokens = await GoogleSignin.getTokens();
        const calendar_data = await fetch(
          `${base_url}=${calendar_id}&access_token=${tokens.accessToken}`,
          {
            headers: {
              Authoriation: `Bearer ${tokens.accessToken}`,
            },
          },
        ).then(res => res.json());
        setData([...calendar_data.items]);
      } catch (error) {
        console.info('USER ERROR', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  let content;

  if (loading) {
    content = <Text>Loading</Text>;
  }

  if (data.length && !loading) {
    content = (
      <>
        {data.map((event, i) => (
          <List.Item
            title={event.summary}
            description={event.start.date}
            key={i}
          />
        ))}
      </>
    );
  }
  if (!data.length && !loading) {
    content = <Text>No Data</Text>;
  }

  return <ScrollView style={{ height: 200 }}>{content}</ScrollView>;
};

export default Calendar;
