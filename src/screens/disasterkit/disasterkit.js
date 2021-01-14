import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
} from 'react-native';

import ImageProp from '../../assets/kit.png';

export default class DisasterKit extends Component {
  constructor(props) {
    super(props);
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <Image
              style={styles.productImg}
              source={require('../../assets/kit.png')}
            />
            <Text style={styles.name}>Basic Disaster Supplies Kit</Text>
            {/* <Text style={styles.price}>$ 12.22</Text> */}
            <Text style={styles.description}>
              To assemble your kit store items in airtight plastic bags and put
              your entire disaster supplies kit in one or two easy-to-carry
              containers such as plastic bins or a duffel bag. A basic emergency
              supply kit could include the following recommended items:
            </Text>
            <View>
              <Text style={{marginBottom: 5}}>
                1.Water (one gallon per person per day for at least three days,
                for drinking and sanitation)
              </Text>
              <Text style={{marginBottom: 5}}>
                2.Food (at least a three-day supply of non-perishable food)
              </Text>
              <Text style={{marginBottom: 5}}>
                3.Battery-powered or hand crank radio and a NOAA Weather Radio
                with tone alert
              </Text>
              <Text style={{marginBottom: 5}}>4.Flashlight</Text>
              <Text style={{marginBottom: 5}}>5.First aid kit</Text>
              <Text style={{marginBottom: 5}}>6.Extra batteries</Text>
              <Text style={{marginBottom: 5}}>
                7.Whistle (to signal for help)
              </Text>
              <Text style={{marginBottom: 5}}>
                8.Dust mask (to help filter contaminated air)
              </Text>
              <Text style={{marginBottom: 5}}>
                9.Plastic sheeting and duct tape (to shelter in place)
              </Text>
              <Text style={{marginBottom: 5}}>
                10.Moist towelettes, garbage bags and plastic ties (for personal
                sanitation)
              </Text>
              <Text style={{marginBottom: 5}}>
                11.Wrench or pliers (to turn off utilities)
              </Text>
              <Text style={{marginBottom: 5}}>
                12.Manual can opener (for food)
              </Text>
              <Text style={{marginBottom: 5}}>13.Local maps</Text>
              <Text style={{marginBottom: 5}}>
                14.Cell phone with chargers and a backup battery
              </Text>
            </View>
            <Text style={styles.description}>
              Consider adding the following items to your emergency supply kit
              based on your individual needs:
            </Text>

            <View>
              <Text style={{marginBottom: 5}}>
                15.Masks (for everyone ages 2 and above), soap, hand sanitizer,
                disinfecting wipes to disinfect surfaces
              </Text>
              <Text style={{marginBottom: 5}}>16.Prescription medications</Text>
              <Text style={{marginBottom: 5}}>
                17.Non-prescription medications such as pain relievers,
                anti-diarrhea medication, antacids or laxatives
              </Text>
              <Text style={{marginBottom: 5}}>
                18.Infant formula, bottles, diapers, wipes and diaper rash cream
              </Text>
              <Text style={{marginBottom: 5}}>19.Cash </Text>
              <Text style={{marginBottom: 5}}>
                20.Important family documents such as copies of insurance
                policies, identification and bank account records saved
                electronically or in a waterproof, portable container
              </Text>
              <Text style={{marginBottom: 5}}>
                21.Sleeping bag or warm blanket for each person
              </Text>
              <Text style={{marginBottom: 5}}>
                22.Complete change of clothing appropriate for your climate and
                sturdy shoes
              </Text>
              <Text style={{marginBottom: 5}}>
                23.Feminine supplies and personal hygiene items
              </Text>
              <Text style={{marginBottom: 5}}>
                24.Matches in a waterproof container
              </Text>
              <Text style={{marginBottom: 5}}>25.Fire extinguisher</Text>
              <Text style={{marginBottom: 5}}>
                26.Mess kits, paper cups, plates, paper towels and plastic
                utensils
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
});
