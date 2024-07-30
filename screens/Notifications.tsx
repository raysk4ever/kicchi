import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import HomeLayout from '../Layouts/HomeLayout'
import Button from '../components/atoms/Button'
import { View } from 'react-native'
import { Colors } from '../Theme/Colors'
import { ScrollView } from 'react-native'

const chats = [
  { id: 'series', following: 1 , name: 'Amanda', lastMessage: 'Enim sunt enim sit pariatur aliquip dolore commodo proident aute duis officia.', avatar: 'https://picsum.photos/200/200?t=birthday' },
  { id: 'all', following: 0 , name: 'Mark', lastMessage: 'Nostrud dolor laborum elit sunt ex consequat dolor quis elit ea ipsum amet.', avatar: 'https://picsum.photos/200/200?t=living' },
  { id: 'object', following: 0 , name: 'Charlie', lastMessage: 'Enim cillum esse ea aliqua ea voluptate culpa laborum.', avatar: 'https://picsum.photos/200/200?t=gift' },
  { id: 'poem', following: 1 , name: 'Johanna', lastMessage: 'Ex labore sit aute fugiat enim quis irure ullamco veniam.', avatar: 'https://picsum.photos/200/200?t=saddle' },
  { id: 'imagine', following: 1 , name: 'Fanny', lastMessage: 'Velit tempor enim sunt adipisicing occaecat aute elit dolore nostrud consequat.', avatar: 'https://picsum.photos/200/200?t=indicate' },
  { id: 'audience', following: 1 , name: 'Antonio', lastMessage: 'Do esse et est eu aliqua.', avatar: 'https://picsum.photos/200/200?t=mile' },
  { id: 'dig', following: 0 , name: 'Addie', lastMessage: 'Nisi sunt aute culpa aliqua cillum duis amet magna ipsum.', avatar: 'https://picsum.photos/200/200?t=involved' },
  { id: 'worker', following: 1 , name: 'Bessie', lastMessage: 'Laboris tempor consequat sit excepteur aliquip id nulla elit proident non dolore proident duis est.', avatar: 'https://picsum.photos/200/200?t=chapter' },
  { id: 'human', following: 1 , name: 'Bessie', lastMessage: 'Laboris tempor consequat sit excepteur aliquip id nulla elit proident non dolore proident duis est.', avatar: 'https://picsum.photos/200/200?t=chapter' },
  { id: 'happened', following: 1 , name: 'Bessie', lastMessage: 'Laboris tempor consequat sit excepteur aliquip id nulla elit proident non dolore proident duis est.', avatar: 'https://picsum.photos/200/200?t=chapter' }
]

type TMessage = typeof chats[0]

export default function NotificationScreen() {
  
  return (
    <HomeLayout>
      {/* <View style={{ marginBottom: 20 }}>
        <Button title='Search' Icon={<AntDesign name='search1' color={'white'} />} />
      </View> */}
      <ScrollView>
        <View style={styles.chats}>
        {chats.map(chat => (
          <ChatItem key={chat.id} {...chat}/>
        ))}
        </View>
      </ScrollView>
      <Text></Text>
    </HomeLayout>
  )
}

const ChatItem = ({ lastMessage, avatar, name, following }: TMessage) => {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View>
        <Image src={avatar} style={styles.avatar} />
      </View>
      <View style={styles.chatItemSection}>
        <Text style={styles.messageUsername}>{name}</Text>
        <Text style={styles.messageText}>{lastMessage}</Text>
      </View>
      <View>
        {!!!following && <Button active={!!!following} title={!!following ? 'Following' : 'Follow'} />}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  chats: {
    gap: 15,
  },
  chatItem: {
    backgroundColor: Colors.grayBG,
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    maxHeight: 100,
    alignItems: 'center'
  },
  chatItemSection: {
    flex: 1,
    gap: 5
  },
  messageUsername: {
    color: 'white',
    fontSize: 15
  },
  messageText: {
    color: '#999',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.gray
  }
})