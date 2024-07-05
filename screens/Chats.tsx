import React from 'react'
import { Image, StyleSheet, Text } from 'react-native'
import HomeLayout from '../Layouts/HomeLayout'
import Button from '../components/atoms/Button'
import { View } from 'react-native'
import { Colors } from '../Theme/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const chats = [
  { id: 'series', name: 'Amanda', lastMessage: 'Non cillum ad reprehenderit sit dolor ullamco anim occaecat enim culpa est ut.', avatar: 'https://picsum.photos/200/200?t=birthday' },
  { id: 'all', name: 'Mark', lastMessage: 'Ipsum esse excepteur elit nisi laboris Lorem labore aliqua cillum.', avatar: 'https://picsum.photos/200/200?t=living' },
  { id: 'object', name: 'Charlie', lastMessage: 'Proident labore cillum esse reprehenderit quis ea proident nisi laboris nisi.', avatar: 'https://picsum.photos/200/200?t=gift' },
  { id: 'poem', name: 'Johanna', lastMessage: 'Elit dolore nulla exercitation anim laboris aliquip sunt.', avatar: 'https://picsum.photos/200/200?t=saddle' },
  { id: 'imagine', name: 'Fanny', lastMessage: 'Aliquip aliquip dolor occaecat aliqua pariatur.', avatar: 'https://picsum.photos/200/200?t=indicate' },
  { id: 'audience', name: 'Antonio', lastMessage: 'Minim ullamco dolore do Lorem dolor.', avatar: 'https://picsum.photos/200/200?t=mile' },
  { id: 'dig', name: 'Addie', lastMessage: 'Ipsum ullamco reprehenderit nulla mollit proident ullamco eu enim laboris Lorem voluptate aliqua.', avatar: 'https://picsum.photos/200/200?t=involved' },
  { id: 'worker', name: 'Bessie', lastMessage: 'Incididunt ad exercitation consequat tempor laborum Lorem labore nisi id.', avatar: 'https://picsum.photos/200/200?t=chapter' },
  { id: 'human', name: 'Bessie', lastMessage: 'Adipisicing sunt esse veniam fugiat proident eu veniam elit deserunt magna qui nulla nulla et.', avatar: 'https://picsum.photos/200/200?t=chapter' },
  { id: 'happened', name: 'Bessie', lastMessage: 'Cillum veniam culpa nostrud occaecat do et consectetur pariatur ea laborum exercitation.', avatar: 'https://picsum.photos/200/200?t=chapter' }
]

type TMessage = typeof chats[0]

export default function ChatsScreen() {
  
  return (
    <HomeLayout>
      <View style={{ marginBottom: 25 }}>
        <Button title='Search' Icon={<AntDesign name='search1' color={'white'} />} />
      </View>
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

const ChatItem = ({ lastMessage, avatar, name }: TMessage) => {
  return (
    <TouchableOpacity style={styles.chatItem}>
      <View>
        <Image src={avatar} style={styles.avatar} />
      </View>
      <View style={styles.chatItemSection}>
        <Text style={styles.messageUsername}>{name}</Text>
        <Text style={styles.messageText}>{lastMessage}</Text>
      </View>
      {/* <View>
        <Button title='+1' />
      </View> */}
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