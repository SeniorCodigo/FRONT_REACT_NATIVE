import React from 'react';
import { Text, TouchableOpacity, View, Modal, StyleSheet, } from 'react-native';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import color from '../utils/Color';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
SimpleLineIcons.loadFont()


const ModalComponent = (props) => {

  const setModalVisible = props.setModalVisible;


  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={[styles.centeredView, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
          <View style={styles.modalView}>
            <View style={{ width: '95%', alignItems: 'flex-end', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => { setModalVisible(false) }}
              >
                <SimpleLineIcons name={'close'} size={responsiveScreenHeight(3)} color={color.darkGray} />
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    position: 'absolute',
    bottom: responsiveScreenHeight(-5),
    backgroundColor: color.white,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(60),
  },
  modalViewRecycle: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: color.white,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    paddingHorizontal: 20,
    width: responsiveScreenWidth(100),
    height: responsiveScreenHeight(75),
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ModalComponent;