import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  ScrollView
} from 'react-native';
import { sampleText } from './sample.js'

function App() {
  const [visible, setVisible] = useState(false)
  
  openMenu = () => setVisible(!visible);
  closeMenu = () => setVisible(false);
  
  
  let menu = (
    <Modal
    visible={visible}
    animationType="slide"
    transparent='true'
    onDismiss={() => this.closeMenu()}
    >
      <TouchableOpacity
          style={styles.menuClose}
          onPress={() => this.closeMenu()}
      >
      </TouchableOpacity>

        <View style={styles.menu}>
          <View style={styles.innerMenu}> 
              <TouchableOpacity 
                  style={styles.menuOption}
                  onPress={() => {
                    this.closeMenu();
                    // ***YOUR FUNCTION HERE
                    }}>
                  <Text style={styles.menuOptionTitle}>Settings</Text>
              </TouchableOpacity>
              <View style={styles.divider}></View>
              <TouchableOpacity 
                  style={styles.menuOption}
                  onPress={() => {
                    this.closeMenu();
                    // ***YOUR FUNCTION HERE
                    }}>
                  <Text style={[styles.menuOptionTitle, styles.red]}>Sign Out</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.cancelMenu}>
              <TouchableOpacity 
                  style={styles.menuOption}
                  onPress={() => {this.closeMenu();
                  }}>
                  <Text style={styles.menuOptionTitle}>Cancel</Text>
              </TouchableOpacity>
          </View>
        </View>
      </Modal>
  )
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.menuButton}>
            <TouchableOpacity
              onPress={() => this.openMenu()}
            >
              <Text>menu</Text>
            </TouchableOpacity>
          </View>
          {menu}
        </View>

        {/* sample content */}
        <ScrollView style={styles.scrollViewWrapper}>
          <View style={styles.sampleWrapper}>
            <Text style={styles.sampleHeader}>A History of Lorem</Text>
            <Text style={styles.sampleContent}>{ sampleText }</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: `white`,
  },
  header: {
    height: 50,
    width: `100%`,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },
  menuButton: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 20,
  },
  menuClose: {
    flex: 1,
  },
  menu: {
    alignItems: 'center',
    marginBottom: 20,
  },
  innerMenu: {
    alignItems: 'center',
    marginBottom: 20,
    width: `90%`,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  menuOption: {
    height: 20,
    alignItems: `center`,
    margin: 20,
    width: `100%`,
  },
  divider: {
    width: `100%`,
    height: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#efefef',
  },
  cancelMenu: {
    width: `90%`,
    alignSelf: 'center',
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  red: {
  color:`red`
  },

  // sample styling
  scrollViewWrapper: {
    height: `90%`,
  },
  sampleWrapper: {
    width: `90%`,
    alignSelf: `center`
  },
  sampleHeader: {
    fontSize: 30,
    fontFamily: `Iowan Old Style`
  },
  sampleContent: {
    fontSize: 18,
    fontFamily: `GillSans`
  }

});

export default App;
