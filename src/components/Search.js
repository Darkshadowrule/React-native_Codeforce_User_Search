import React ,{Component} from 'react';
import {Text,View} from 'react-native';
import { Card, CardSection, Button, Input,Spinner } from './common';
import axios from 'axios';
import UserDetail from './UserDetail'
class Search extends Component{
    state={handle:'',info:{},loading:false,error:'',detail:false}
    onButtonPress()
    {this.setState({error:'',loading:true})
        axios.get(`http://codeforces.com/api/user.info?handles=${this.state.handle}`)
        .then(response =>this.setState({info:response.data.result[0],loading:false,detail:true,handle:''}))
        .catch(()=>{
            this.setState({error:"Userhandle doesnot Exist",info:{},loading:false,detail:false})
        });
        
    }
    renderDetail()
    {
      if(this.state.detail)
      return  <UserDetail key={this.state.info.avatar} info={this.state.info} />

    }
    renderButton()
    {
        if(this.state.loading)
       { return   <Spinner size="large"/>
           }
           else
        return  (  <Button  onPress ={this.onButtonPress.bind(this)}>Search</Button>);
    
    }
render()
{
    return(
      <Card style={{backgroundColor:'#000',}}>
          <CardSection>
           <Input
           placeholder="darkshadowrule"
           label="Userhandle :"
           value={this.state.handle}
         onChangeText={handle => this.setState({handle})}
           
           />
          </CardSection>
          <Text style={styles.errorTextStyle}>
                   {this.state.error}
               </Text>
          <CardSection>
             {this.renderButton()}
          </CardSection>
         {this.renderDetail()}
      </Card>
    )
}
}
const styles={
    errorTextStyle:{
        fontSize: 17,
        alignSelf: 'center',
        color:'red'
    }
}
export default Search;