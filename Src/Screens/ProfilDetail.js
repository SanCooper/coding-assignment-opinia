import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {bg} from '../Assets/Img';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class ProfilDetail extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <View style={styles.header}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back"
                size={30}
                style={{color: '#212121'}}
              />
            </TouchableOpacity>
          </View>
        </View>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}>
          <View style={styles.section}>
            <View>
              <Text style={{fontSize: 16, color: '#05B1A1', fontWeight: '700'}}>
                Pekerjaan
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <Feather name='briefcase' size={15} color='#05B1A1'/>
              </View>
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{fontSize: 16, color: '#000000', fontWeight: '400'}}>
                  Graphic Design
                </Text>
                <Text
                  style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
                  Opinia
                </Text>
                <Text
                  style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
                  (2008-Sekarag)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={{fontSize: 16, color: '#05B1A1', fontWeight: '700'}}>
                Pendidikan
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name='user-graduate' size={15} color='#05B1A1'/>
              </View>
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{fontSize: 16, color: '#000000', fontWeight: '400'}}>
                  Design Engineering
                </Text>
                <Text
                  style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
                  Politeknik Manufaktur Negeri Bandung
                </Text>
                <Text
                  style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
                  (2011-2013)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={{fontSize: 16, color: '#05B1A1', fontWeight: '700'}}>
                Tempat Tinggal
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <FontAwesome5 name='user-graduate' size={15} color='#05B1A1'/>
              </View>
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{fontSize: 16, color: '#000000', fontWeight: '400'}}>
                  Kota Bekasi
                </Text>
                <Text
                  style={{fontSize: 14, color: '#000000', fontWeight: '400'}}>
                  (2011-2013)
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={{fontSize: 16, color: '#05B1A1', fontWeight: '700'}}>
                Hobi
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <Feather name='pen-tool' size={15} color='#05B1A1'/>
              </View>
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{fontSize: 16, color: '#000000', fontWeight: '400'}}>
                  Musik
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <View>
              <Text style={{fontSize: 16, color: '#05B1A1', fontWeight: '700'}}>
                Website
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <View style={{alignContent: 'center', justifyContent: 'center'}}>
                <AntDesign name='earth' size={15} color='#05B1A1'/>
              </View>
              <View style={{paddingLeft: 15}}>
                <Text
                  style={{fontSize: 16, color: '#000000', fontWeight: '400'}}>
                  www.gdsashsda.com
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 45,
    paddingLeft: 20,
    paddingTop: 10,
    marginBottom: 10
  },
  container: {
    marginHorizontal: 20,
  },
  section: {
    marginTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#797979',
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
