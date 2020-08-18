import React, {useState, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Text,
  Button,
  Card,
  Caption,
  Title,
  Paragraph,
  Drawer,
  Switch,
  TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import {AuthContext} from '../components/context';

export default function DrawerContent({props, navigation}) {
  const paperTheme = useTheme;

  const {signOut, toggleTheme} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://media-exp1.licdn.com/dms/image/C5603AQHTlfdaBIBbuw/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=tmMYn5JrYTxDla6OOUHmh1JnOnpSBfbpSPXzIslTfqQ',
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Lefa Moffat</Title>
                <Caption style={styles.caption}>@lefeezy</Caption>
              </View>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                80
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                100
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View>
          </View>

          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => navigation.navigate('Profile')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="bookmark-outline" color={color} size={size} />
              )}
              label="Bookmarks"
              onPress={() => alert("You've been signed out")}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cog-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => alert("You've been signed out")}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => alert("You've been signed out")}
            />
          </Drawer.Section>

          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark theme</Text>
                <View pointerEvents="none">
                  <Switch value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign out"
          onPress={() => {
            signOut();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    padding: 5,
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
