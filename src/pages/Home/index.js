import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import content from './content'

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    thumbnail: {
      width: "100%",
    //   height: "auto",
      flex: 1,
        resizeMode: 'cover', // or 'stretch'
    },
  });



export default function Home() {
    return content.map((content,index) => {
        return (
            <ScrollView
                key={index}
                style={{ 
                    flex: 1, 
                    justifyContent: 'center', 
                    alignItems: 'center' ,
                    border : '1px solid #ccc',
                    borderRadius : "10px",
                    margin: '4px'
                }}
            >
                <Image 
                    style={styles.thumbnail}
                    source={{ uri : content.thumbnail }}
                />
                {/* <Image
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                /> */}
                <Text>{content?.tags[0]?.label}</Text>
                <Text>{content.title}</Text>
                <Text>{content.description}</Text>
                <Text>{'epochConvertor(content.timestamp)'}</Text>

            </ScrollView>
        )
    })
  }