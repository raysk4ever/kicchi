import { Image, Pressable, Text, View, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import HomeLayout from "../Layouts/HomeLayout";
import { Colors } from "../Theme/Colors";
import MaskShadow from "../components/MaskShadow";
import { useAuth } from "../Context/AuthContext";

type Props = {
 
}
export const ProfileScreen = ({}: Props) => {
  const { user } = useAuth()
  return ( 
    <HomeLayout>
      <ScrollView style={{ }}>
        <View style={styles.section}>
          <Text style={{ color: Colors.white, fontSize: 50, }}>
            Hello, {user.name}!
          </Text>
        </View>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row', gap: 20 }}>
          <TouchableOpacity style={styles.addNewImage}>
            <Text style={{ color: Colors.gray, fontSize: 80, fontWeight: "100" }}>+</Text>
            <Text style={{ color: Colors.gray, fontSize: 20, fontWeight: "200", textAlign: 'center' }}>
              Add New Image
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 200, height: 350, borderRadius: 30, overflow: 'hidden', backgroundColor: 'white' }}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../assets/image2.jpg')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ width: 200, height: 350, borderRadius: 30, overflow: 'hidden', backgroundColor: 'white' }}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={require('../assets/image4.jpg')} />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.sectionWrapper}>
        <Text style={styles.title}>Bio</Text>
        <TouchableOpacity style={[styles.section, { paddingVertical: 20 }]}>
          <Text style={styles.white}>Here is my awesome Bio! 😎 👌</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionWrapper}>
        <Text style={styles.title}>Inrested in</Text>
        <View style={[styles.chips, { gap: 20 }]}>
          <TouchableOpacity style={[styles.section, { paddingVertical: 10, paddingHorizontal: 10 }]}>
            <Text style={[styles.white, { fontSize: 40 }]}>🙋🏻‍♂️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.section, { paddingVertical: 10, paddingHorizontal: 10 }]}>
            <Text style={[styles.white, { fontSize: 40 }]}>🙋🏻‍♀️</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.section, { paddingVertical: 10, paddingHorizontal: 10 }]}>
            <Text style={[styles.white, { fontSize: 40 }]}>🙋🏻‍♂️🙋🏻‍♀️</Text>
          </TouchableOpacity>
        </View>
      </View>


      <View style={styles.sectionWrapper}>
        <Text style={styles.title}>Likes</Text>
        <View style={styles.chips}>
          <TouchableOpacity style={[styles.section, styles.chip ]}>
            <Text style={styles.white}>Games 🎲</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.section, styles.chip ]}>
            <Text style={styles.white}>Music 🎸</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.section, styles.chip ]}>
            <Text style={styles.white}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
        <View style={{ marginBottom: 40 }}/>
      </ScrollView>
    </HomeLayout>
  );
}

const styles = StyleSheet.create({
  sectionWrapper: {
    marginTop: 20
  },
  section: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: Colors.grayBG,
    marginVertical: 15 
  },
  addNewImage: { width: 120,
    height: 350,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed'
  },
  title: {
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: '700'
  },
  white: {
    color: Colors.white
  },
  chips: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10
  },
  chip: {
    maxWidth: 120,
    alignItems: 'center',
    marginVertical: 2,
    // backgroundColor: 'gray'
  }
})