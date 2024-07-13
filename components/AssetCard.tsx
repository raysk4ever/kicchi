import { Image, ImageURISource, StyleSheet, View } from "react-native";
import Video, { ReactVideoSource } from "react-native-video";
import { TAsset } from "./FeedSwiper";

export default function AssetCard({ asset }: {asset: TAsset}) {
  return (
    <View style={{ flex: 1 }}>
      {asset.isVideo ? (
        <Video
          // paused={paused}
          source={asset.uri as ReactVideoSource}
          style={styles.renderCardImage}
          resizeMode="cover"
          repeat={true}
          // controls
        />
      ) : <Image
          source={asset.uri as ImageURISource}
          style={styles.renderCardImage}
          resizeMode="cover"
      />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 20,
    // position: 'absolute',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f3d50',
    borderRadius: 20,
    padding: 5,
    paddingVertical: 10
  },
  button: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 40,
    marginHorizontal: 20,
    backgroundColor: '#fc3763',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
    backgroundColor: 'gray',
    overflow: 'hidden'
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
    height: '95%',
    paddingVertical: 10
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoOverlayContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    gap: 10
    // -moz-box-shadow: inset 0 -10px 10px -10px #000000;
    // -webkit-box-shadow: inset 0 -10px 10px -10px #000000;
  },
  username: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
    textShadowColor: 'black',
    textShadowRadius: 9,
    textShadowOffset: {
      width: 1,
      height: 1
    },
  },
  age: {
    fontWeight: '400',
  },
  icon: {
    backgroundColor: '#fc3763',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35
  },
  infoBadge: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff60',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 5,
    top: 20,
    right: 20
  },
  online: {
    width: 10,
    height: 10,
    backgroundColor: 'teal',
    borderRadius: 10
  }
});