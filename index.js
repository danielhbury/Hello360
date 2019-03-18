import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-360';


export default class Hello360 extends React.Component {
  constructor() {
    super();

    this.state = {
      focused: null,
    }
    this.focusClick = this.focusClick.bind(this);
  }

  focusClick(focused){
    this.setState({
      focused,
    });
  };

  render() {
    const { focused } = this.state;
    return (
      <View style={styles.panel}>
        <View
          onEnter={() => this.focusClick(1)}
          onExit={() => this.focusClick(null)}
          style={focused === 1 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 1
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(2)}
          onExit={() => this.focusClick(null)}
          style={focused === 2 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 2
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(3)}
          onExit={() => this.focusClick(null)}
          style={focused === 3 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 3
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(4)}
          onExit={() => this.focusClick(null)}
          style={focused === 4 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 4
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(5)}
          onExit={() => this.focusClick(null)}
          style={focused === 5 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 5
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(6)}
          onExit={() => this.focusClick(null)}
          style={focused === 6 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 6
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(7)}
          onExit={() => this.focusClick(null)}
          style={focused === 7 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 7
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(8)}
          onExit={() => this.focusClick(null)}
          style={focused === 8 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 8
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(9)}
          onExit={() => this.focusClick(null)}
          style={focused === 9 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 9
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(10)}
          onExit={() => this.focusClick(null)}
          style={focused === 10 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 10
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(11)}
          onExit={() => this.focusClick(null)}
          style={focused === 11 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 11
          </Text>
        </View>
        <View
          onEnter={() => this.focusClick(12)}
          onExit={() => this.focusClick(null)}
          style={focused === 12 ? styles.greetingBoxFocused : styles.greetingBox}
        >
          <Text style={styles.greeting}>
            Benefit longer description 12
          </Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greetingBoxFocused: {
    padding: 50,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 4,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('Hello360', () => Hello360);
