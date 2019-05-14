import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {Card,CardSection,Button} from './common'

const UserDetail =({info})=>{

var timer =((UNIX_timestamp)=>
{
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
})

const {avatar,city,country,firstName,lastName,lastOnlineTimeSeconds}=info
const{friendOfCount,maxRank,maxRating,rank,rating,registrationTimeSeconds}=info
const imageUrl="https:"+avatar
const ltime=timer(lastOnlineTimeSeconds)
const rtime=timer(registrationTimeSeconds)

return(<View>
        <Card> 
         <CardSection>
         <View style={styles.thumbnailContainerStyle}>
         <Image style={styles.thumbnailStyle} source={{ uri: imageUrl }} />
        </View>
        <View style={styles.headerContentStyle}>
        <Text style={styles.nameStyle}>{firstName} {lastName}</Text>

        </View>
         </CardSection>

            <View style={styles.thumbnailContainerStyle}>
                <Text style={styles.headerTextStyle}>Country: {country} </Text>
                <Text style={styles.headerTextStyle}>City: {city} </Text>
                <Text  style={styles.headerTextStyle}>Friends: {friendOfCount} </Text>
                <Text style={styles.headerTextStyle}>Current Rank: {rank} </Text>
                <Text style={styles.headerTextStyle}>Current Rating: {rating} </Text>
                <Text style={styles.headerTextStyle}>Maximum Rank: {maxRank} </Text>
                <Text style={styles.headerTextStyle}>Maximum Rating: {maxRating} </Text>
                <Text style={styles.headerTextStyle}>Last Online: {ltime} </Text>
                <Text style={styles.headerTextStyle}>Registered on: {rtime} </Text>
            </View>
        </Card>
        </View>
)
}
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
     nameStyle:{
       fontSize:20,
       color:'red'
     },
    headerTextStyle:{
  fontSize: 18,
  marginTop: 5
    },

    thumbnailStyle: {
         height: 100,
         width: 100
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    }
}
export default UserDetail;