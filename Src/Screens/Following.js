import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import axios, {Axios} from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bg} from '../Assets/Img';

export default class Following extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get('https://62fb224ae4bcaf53517e35ba.mockapi.io/users')
      .then(res => this.setState({data: res.data}));
  }
  render() {
    const {data} = this.state;
    const {navigation} = this.props
    return (
      <View>
        <LinearGradient
          colors={['#06B1A1', '#06688F']}
          style={styles.header}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={28}
                style={{color: '#FFFFFF'}}
              />
            </TouchableOpacity>
          </View>
          <View style={{width: '80%'}}>
            <Text style={{fontSize: 18, color: '#FFFFFF', textAlign: 'center'}}>Mengikuti</Text>
          </View>
        </LinearGradient>
        <View style={styles.bgImg1}>
          <Image
            style={{width: 116, height: 113, transform: [{rotate: '5deg'}]}}
            source={bg}
          />
        </View>
        <View style={styles.bgImg2}>
          <Image
            style={{width: 40, height: 39, transform: [{rotate: '-10deg'}]}}
            source={bg}
          />
        </View>
        <View style={styles.bgImg3}>
          <Image style={{width: 52, height: 51}} source={bg} />
        </View>
        <View style={styles.bgImg4}>
          <Image style={{width: 114, height: 110}} source={bg} />
        </View>
        <View style={styles.bgImg5}>
          <Image style={{width: 94, height: 110}} source={bg} />
        </View>
        <View style={styles.bgImg6}>
          <Image style={{width: 57, height: 55}} source={bg} />
        </View>
        <View style={styles.bgImg7}>
          <Image style={{width: 52, height: 50}} source={bg} />
        </View>
        <View style={styles.bgImg8}>
          <Image
            style={{width: 40, height: 39, transform: [{rotate: '-30deg'}]}}
            source={bg}
          />
        </View>
        <View style={styles.bgImg9}>
          <Image
            style={{width: 116, height: 113, transform: [{rotate: '-20deg'}]}}
            source={bg}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} style={{padding: 15}}>
          {data.length > 0 &&
            data.map((value, i) => {
              return (
                <View style={styles.list} key={i}>
                  <View>
                    <Image
                      style={styles.avatar}
                      source={{uri: `${value.avatar}`}}
                    />
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingLeft: 10,
                      alignItems: 'flex-start',
                    }}>
                    <Text style={{fontSize: 15, color: '#000000'}}>
                      {value.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      flexDirection: 'row-reverse',
                      paddingRight: 10,
                    }}>
                    <TouchableOpacity style={styles.button}>
                      <Text style={{color: '#FFFFFF'}}>Mengikuti</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    paddingHorizontal: 10,
  },
  list: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'white',
    // opacity: 0.7,
    borderWidth: 1,
    borderColor: '#05B1A1',
    borderRadius: 35,
    height: 42,
    backgroundColor: '#FFFFFF50',
  },
  avatar: {
    height: 30,
    width: 30,
    margin: 5,
    borderWidth: 1,
    borderColor: '#05B1A1',
    borderRadius: 35,
  },
  button: {
    backgroundColor: '#46B29C',
    height: 30,
    width: 106,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    margin: 5,
  },
  bgImg1: {
    position: 'absolute',
    width: 116,
    height: 113,
    top: 83,
    left: 4,
  },
  bgImg2: {
    position: 'absolute',
    width: 40,
    height: 39,
    top: 132,
    left: 267,
  },
  bgImg3: {
    position: 'absolute',
    width: 52,
    height: 51,
    top: 266,
    left: 45,
  },
  bgImg4: {
    position: 'absolute',
    width: 114,
    height: 110,
    top: 232,
    left: 287,
  },
  bgImg5: {
    position: 'absolute',
    width: 98,
    height: 120,
    top: 394,
    left: -42,
  },
  bgImg6: {
    position: 'absolute',
    width: 57,
    height: 55,
    top: 516,
    left: 52,
  },
  bgImg7: {
    position: 'absolute',
    width: 52,
    height: 50,
    top: 583,
    left: 93,
  },
  bgImg8: {
    position: 'absolute',
    width: 40,
    height: 39,
    top: 552,
    left: 174,
  },
  bgImg9: {
    position: 'absolute',
    width: 116,
    height: 113,
    top: 565,
    left: 238,
  },
});
