import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
  ScrollView,
  ProgressBarAndroid,
  Modal,
} from 'react-native';
import React, {Component} from 'react';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {reward} from '../Assets/Img';

export default class ProfilUser extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      allTopic: true,
      ideaTopic: false,
      articleTopic: false,
      pollTopic: false,
      petitionTopic: false,
      modalVisibleCoverPict: false,
    };
  }

  _setmodalVisibleCoverPict = visible => {
    this.setState({modalVisibleCoverPict: visible});
  };

  componentDidMount() {
    axios
      .get('https://62fb224ae4bcaf53517e35ba.mockapi.io/users?name=margaret')
      .then(res => this.setState({data: res.data}));
  }

  render() {
    const {navigation} = this.props;
    const {
      data,
      allTopic,
      ideaTopic,
      pollTopic,
      articleTopic,
      petitionTopic,
      modalVisibleCoverPict,
    } = this.state;
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <LinearGradient
          colors={['#06B1A1', '#06688F']}
          style={styles.header}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <View>
            <TouchableOpacity
            // onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                size={28}
                style={{color: '#FFFFFF'}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#FFFFFF'}}>Profil</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{paddingRight: 20}}>
              <Feather name="share-2" size={23} style={{color: '#FFFFFF'}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{paddingRight: 10}}
              onPress={() => navigation.navigate('ProfilDetail')}>
              <Octicons name="person" size={25} style={{color: '#FFFFFF'}} />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ScrollView showsVerticalScrollIndicator={false}>
          {data.length >= 1 &&
            data.map((value, index) => {
              return (
                <View key={index}>
                  <View style={styles.coverPict}>
                    <Image
                      style={{height: 180}}
                      source={{uri: `${value.avatar}`}}
                    />
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({
                          modalVisibleCoverPict: !modalVisibleCoverPict,
                        })
                      }
                      style={{
                        width: 36,
                        height: 36,
                        backgroundColor: '#05B1A1',
                        borderRadius: 50,
                        position: 'absolute',
                        top: '5%',
                        right: '5%',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Fontisto name="camera" size={16} color="#ffffff" />
                    </TouchableOpacity>
                  </View>
                  <View style={{height: 190}}>
                    <View
                      style={{
                        top: -25,
                        height: 205,
                        backgroundColor: '#FFFFFF',
                        alignSelf: 'center',
                        width: '90%',
                        borderRadius: 7,
                        borderWidth: 0.5,
                        borderColor: 'grey',
                        justifyContent: 'space-between',
                        marginHorizontal: 10,
                      }}>
                      <View style={{flexDirection: 'row', height: 60}}>
                        <View style={{top: -46, paddingHorizontal: 10}}>
                          <Image
                            style={{height: 92, width: 92, borderRadius: 100}}
                            source={{uri: `${value.avatar}`}}
                          />
                        </View>
                        <View style={{paddingLeft: 5, paddingTop: 5}}>
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: '700',
                              color: '#000000',
                            }}>
                            {value.name}
                          </Text>
                          <View style={{flexDirection: 'row', paddingTop: 5}}>
                            <Feather name="star" size={15} color="#DD7F29" />
                            <Feather name="star" size={15} color="#DD7F29" />
                            <Feather name="star" size={15} color="#DD7F29" />
                            <Feather name="star" size={15} color="#DD7F29" />
                            <Feather name="star" size={15} color="#DD7F29" />
                          </View>
                        </View>
                      </View>
                      <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#000000', fontWeight: '400'}}>
                          Penulis | Politisi
                        </Text>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 15,
                            fontWeight: '500',
                          }}>
                          "{value.about}"
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          height: 53,
                          borderBottomLeftRadius: 7,
                          borderBottomRightRadius: 7,
                          justifyContent: 'space-around',
                          backgroundColor: '#05B1A1',
                          paddingVertical: 5,
                        }}>
                        <View>
                          <Text style={{color: '#FFFFFF'}}>Postingan</Text>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: '700',
                            }}>
                            29
                          </Text>
                        </View>
                        <View
                          style={{
                            width: 1,
                            backgroundColor: '#FFFFFF',
                            marginVertical: 5,
                          }}></View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Following')}>
                          <Text style={{color: '#FFFFFF'}}>Mengikuti</Text>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: '700',
                            }}>
                            29
                          </Text>
                        </TouchableOpacity>
                        <View
                          style={{
                            width: 1,
                            backgroundColor: '#FFFFFF',
                            marginVertical: 5,
                          }}></View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Follower')}>
                          <Text style={{color: '#FFFFFF'}}>Pengikut</Text>
                          <Text
                            style={{
                              color: '#FFFFFF',
                              textAlign: 'center',
                              fontSize: 16,
                              fontWeight: '700',
                            }}>
                            29
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      height: 56,
                      flexDirection: 'row',
                      backgroundColor: '#E4E4E4',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingHorizontal: '5%',
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Image style={{width: 28, height: 42}} source={reward} />
                      <View style={{marginLeft: 7}}>
                        <Text style={{fontWeight: '700', color: '#000000'}}>
                          Total Poin Anda
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                          <Text
                            style={{
                              fontWeight: '700',
                              color: '#EA6C00',
                              fontSize: 16,
                            }}>
                            230
                          </Text>
                          <Text style={{fontSize: 12, paddingLeft: 5}}>
                            Klaim Reward
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Feather name="chevron-right" size={30} />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={{paddingHorizontal: '5%', paddingVertical: 5}}>
                    <Text>Lengkapi Profil Anda 2/3</Text>
                    {/* <ProgressBarAndroid
                      styleAttr="Horizontal"
                      indeterminate={false}
                      progress={2/3}
                    /> */}
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 5,
                        backgroundColor: '#E4E4E4',
                        borderWidth: 0.5,
                        borderColor: '#05B1A1',
                        marginTop: 5,
                        alignItems: 'center',
                      }}>
                      <View
                        style={{
                          backgroundColor: '#EA6C00',
                          height: 3,
                          width: '33%',
                        }}></View>
                      <View
                        style={{
                          backgroundColor: '#EA6C00',
                          height: 3,
                          width: '33%',
                        }}></View>
                      <View style={{height: 3, width: '33%'}}></View>
                    </View>
                  </View>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{paddingHorizontal: '5%', marginTop: 10}}>
                    {allTopic == true ? (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#F2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#05B1A1',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                            }}>
                            <Feather color="#ffffff" name="menu" size={20} />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Semua
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: !allTopic,
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                              borderWidth: 0.5,
                              borderColor: 'grey',
                            }}>
                            <Feather color="#05B1A1" name="menu" size={20} />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Semua
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {ideaTopic == true ? (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#F2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: true,
                              ideaTopic: !ideaTopic,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#05B1A1',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                            }}>
                            <Foundation
                              color="#ffffff"
                              name="lightbulb"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Idea
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: false,
                              ideaTopic: !ideaTopic,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                              borderWidth: 0.5,
                              borderColor: 'grey',
                            }}>
                            <Foundation
                              color="#05B1A1"
                              name="lightbulb"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Idea
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {articleTopic == true ? (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#F2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: true,
                              ideaTopic: false,
                              articleTopic: !articleTopic,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#05B1A1',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                            }}>
                            <MaterialIcons
                              color="#ffffff"
                              name="article"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Artikel
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: false,
                              ideaTopic: false,
                              articleTopic: !articleTopic,
                              pollTopic: false,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                              borderWidth: 0.5,
                              borderColor: 'grey',
                            }}>
                            <MaterialIcons
                              color="#05B1A1"
                              name="article"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Artikel
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {pollTopic == true ? (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#F2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: true,
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: !pollTopic,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#05B1A1',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                            }}>
                            <MaterialCommunityIcons
                              color="#ffffff"
                              name="poll"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Poling
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: false,
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: !pollTopic,
                              petitionTopic: false,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                              borderWidth: 0.5,
                              borderColor: 'grey',
                            }}>
                            <MaterialCommunityIcons
                              color="#05B1A1"
                              name="poll"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Poling
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                    {petitionTopic == true ? (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#F2f2f2',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: true,
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: !petitionTopic,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#05B1A1',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                            }}>
                            <Fontisto
                              color="#ffffff"
                              name="persons"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Petisi
                          </Text>
                        </TouchableOpacity>
                      </View>
                    ) : (
                      <View style={{width: 58, height: 71, marginRight: 5}}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onPress={() =>
                            this.setState({
                              allTopic: false,
                              ideaTopic: false,
                              articleTopic: false,
                              pollTopic: false,
                              petitionTopic: !petitionTopic,
                            })
                          }>
                          <View
                            style={{
                              backgroundColor: '#ffffff',
                              width: 45,
                              height: 45,
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius: 7,
                              borderWidth: 0.5,
                              borderColor: 'grey',
                            }}>
                            <Fontisto
                              color="#05B1A1"
                              name="persons"
                              size={20}
                            />
                          </View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Petisi
                          </Text>
                        </TouchableOpacity>
                      </View>
                    )}
                  </ScrollView>
                  <View style={{paddingHorizontal: '5%', marginTop: 5}}>
                    <View style={{flexDirection: 'row'}}>
                      <View>
                        <Image
                          style={styles.avatar}
                          source={{uri: `${value.avatar}`}}
                        />
                      </View>
                      <View style={{paddingLeft: 5}}>
                        <View>
                          <Text
                            style={{
                              fontSize: 16,
                              fontWeight: '700',
                              color: '#000000',
                            }}>
                            {value.name}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={{fontSize: 12}}>19 detik yang lalu</Text>
                          <View
                            style={{
                              backgroundColor: '#797979',
                              width: 1,
                              marginHorizontal: 4,
                              marginVertical: 2,
                            }}></View>
                          <Text style={{fontSize: 12, color: '#05B1A1'}}>
                            Idea
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View>
                      <Text style={{color: '#000000'}}>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney
                        College in Virginia, looked up one of the more obscure
                        Latin words, consectetur,...
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
        </ScrollView>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: '#05B1A1',
            borderRadius: 50,
            position: 'absolute',
            right: '5%',
            bottom: '10%',
            shadowColor: 'black',
            elevation: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <MaterialCommunityIcons name='feather' size={30} color='#FFFFFF' />
          </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent
          visible={modalVisibleCoverPict}
          onRequestClose={() => {
            this._setmodalVisibleCoverPict(!modalVisibleCoverPict);
          }}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF50'}}>
            <View
              style={{
                backgroundColor: '#05B1A1',
                width: 250,
                height: 180,
                borderRadius: 14,
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: 20,
                  borderBottomWidth: 0.5,
                  borderBottomColor: '#ffffff',
                  marginHorizontal: 15,
                }}>
                <TouchableOpacity>
                  <Ionicons name="camera-outline" size={26} color="#ffffff" />
                  <Text style={{color: '#ffffff', fontSize: 13}}>Kamera</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <AntDesign name="picture" size={26} color="#ffffff" />
                  <Text style={{color: '#ffffff', fontSize: 13}}>Galeri</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text
                  style={{color: '#FFFFFF', fontSize: 15, fontWeight: '700'}}>
                  HAPUS GAMBAR BANNER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this._setmodalVisibleCoverPict(!modalVisibleCoverPict);
                }}
                style={{
                  backgroundColor: '#FFFFFF',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 39,
                  borderBottomLeftRadius: 14,
                  borderBottomRightRadius: 14,
                }}>
                <Text
                  style={{color: '#05B1A1', fontSize: 15, fontWeight: '700'}}>
                  BATAL
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
    paddingHorizontal: 10,
  },
  coverPict: {
    height: 180,
  },
  avatar: {
    height: 35,
    width: 35,
    margin: 5,
    borderWidth: 1,
    borderColor: '#05B1A1',
    borderRadius: 35,
  },
});
