import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import content from './content'
import bookmarkfill from '../../assets/bookmark/fill.png'
import bookmarknonfill from '../../assets/bookmark/nonfill.png'



const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const users = useSelector(selectAll)
  console.log(users)

  function ListUser() {
    return users.map(data => {
      return (
        <View key={data.id} style={styleUser}>
          <Text style={{ fontSize: 15 }}>
            {data.id}. {data.name}
          </Text>
        </View>
      )
    })
  }

  const epochConvertor = (time = 1589343013000) => {
    var t = new Date(time);
    var hours = t.getHours();
    var minutes = t.getMinutes();
    var newformat = t.getHours() >= 12 ? 'PM' : 'AM';  
    
    // Find current hour in AM-PM Format 
    hours = hours % 12;  
    
    // To display "0" as "12" 
    hours = hours ? hours : 12;  
    minutes = minutes < 10 ? '0' + minutes : minutes; 
    var formatted = 
        (t.toString().split(' ')[0]) 
        + ', ' +('0' + t.getDate()).slice(-2) 
        + '/' + ('0' + (t.getMonth() + 1) ).slice(-2)
        + '/' + (t.getFullYear())
        + ' - ' + ('0' + t.getHours()).slice(-2)
        + ':' + ('0' + t.getMinutes()).slice(-2)
        + ' ' + newformat;
    return formatted
  }

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
  

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const [refreshing, setRefreshing] = React.useState(false);
  const [bookmark , setBookmark] = React.useState(false)
  function Content(){
    return (
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
          {content.map((content,index) => {
            return(
              <View 
                key={index}
                style={{ 
                  // flex: 1, 
                  justifyContent: 'center', 
                  // alignItems: 'center' ,
                  borderWidth: 1,
                  borderColor: "#ccc",
                  borderRadius : 10,
                  margin:10
                }}>
                  <Image 
                      style={styles.thumbnail}
                      source={{ uri : content.thumbnail }}
                  />
                  {/* <Image
                      source={{
                      uri: 'https://reactnative.dev/img/tiny_logo.png',
                      }}
                  /> */}
                  <Text
                    style={{
                      // flex:1,
                      borderWidth: 1,
                      borderColor: "#ccc",
                      borderRadius : 10,
                      marginTop: 5,
                      marginLeft: 10,
                      marginBottom : 5,
                      padding: 5,
                      alignSelf: 'flex-start',
                      // flexWrap:'wrap',
                      // flexDirection:'row'
                    }} 
                  >
                    {content?.tags[0]?.label}
                  </Text>
                  <Text
                    style={{
                      flex:1,
                      fontSize: 25,
                      padding: 10
                    }} 
                  >
                    {content.title}
                  </Text>
                  <Text
                    style={{
                      flex:1,
                      fontSize: 18,
                      paddingLeft: 10
                    }}
                  >
                    {content.description}
                  </Text>
                  <View style={{
                    //  width : 20,
                    //  height : 20,
                    //  backgroundColor : 'red',
                     flexDirection : 'row',
                     flex : 1,
                     padding: 10,
                     backgroundColor: 'red',
                     alignContent : 'center',
                     justifyContent : 'center',


                    //  flexWrap : 'wrap'
                  }}>
                    <Text
                      style={{
                        flex:1,
                        fontSize: 10,
                        // paddingRight: 10,
                      }} 
                    >
                      {epochConvertor(content.timestamp)}
                    </Text>
                    <TouchableOpacity
                        onPress={ () => setBookmark(!bookmark) } 
                    >
                      <Image 
                        source={bookmark ? bookmarkfill : bookmarknonfill}
                        style={{
                          width : 20,
                          height : 20,
                          // backgroundColor: 'red',
                        }}
                        // source={{
                        //   url : bookmarkfill,
                        //   width : 20,
                        //   height : 20
                        // }} 
                      />
                    </TouchableOpacity>
                    
                  </View>
               </View>
            )
          })}
          </ScrollView>
    )
  }
  

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      {/* <SafeAreaView style={styles.SafeAreaView1} /> */}
      <SafeAreaView style={styles.SafeAreaView}>
        {/* <View style={styles.outerWrapper}> */}
          {/* <Icon name={'ios-person'} size={100} color={'purple'} /> */}
          {/* <Icon name={'ios-home'} size={100} color={'purple'} /> */}

          {/* <View> */}
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => dispatch(fetchUser())}>
              <Text style={styles.text}>Click here to show User data:</Text>
            </TouchableOpacity> */}
            {/* <ListUser /> */}
            <Content />
          {/* </View> */}
        {/* </View> */}
      </SafeAreaView>
    </>
  )
}

const styleUser = StyleSheet.create({
  // borderBottomWidth: 1,
  // borderColor: '#eee',
  // padding: 1,
  // marginTop: 10
})

export default Home
