import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import { TextField } from 'react-native-material-textfield';
import { verticalScale, moderateScale } from '../../utilities/ResponsiveFonts';
import Header from '../../component/Header';
import SubHeader from '../../component/SubHeader';
import { attend_school_20 } from '../../component/SubHeaderTitles'
import AddButton from '../../component/AddButton'
import RemoveButton from '../../component/RemoveButton'
let { width, height } = Dimensions.get('window')
import CustomButton from '../../component/CustomButton'
import ProgressBar from '../../component/ProgressBar'
import { Radio } from 'native-base';
export default class Education_detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            school_name: undefined,
            months_of_fulltimeSchool: undefined,
            amount_Slip: undefined,
            line: [
                {
                    line_Description: undefined,
                    CAD_$: undefined,
                },
            ],
            radio1: false,
        }
    }
    toggleRadio(radio, radioState) {
        switch (radio) {
            case 1:
                this.setState({ radio1: radioState })
        }
    }
    addmore = (line_Description, CAD_$) => {
        console.log("add more");
        let add = (this.state.line)
        add.push({ line_Description, CAD_$ })
        this.setState({ line: add }, () => { console.log(this.state) })
    }
    deleteMore = (index) => {
        console.log("delete")
        let del = this.state.line
        del.splice(index, 1)
        this.setState({ line: del })
    }
    componentDidUpdate() {
        console.log(this.state);
    }
    setInput(input, type, index) {
        var tempData = this.state.line
        if (type == 'desc') {
            tempData[index].line_Description = input
            this.setState({ line: tempData })
        }
        if (type == 'cad') {
            tempData[index].CAD_$ = input
            this.setState({ line: tempData })
        }
    }
    render() {
        const Touchable = Platform.OS == 'android' ? TouchableNativeFeedback : TouchableOpacity;
        const TextFieldStyle = {
            labelFontSize: moderateScale(14),
            fontSize: moderateScale(18),
            tintColor: '#06427b'
        }
        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', flexDirection: 'column' }}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <Header isBack={true} navigation={this.props.navigation} navigateTo='MaritalStatus'/>
                    <SubHeader acetaxTitle={false} customText={attend_school_20} />
                    <ProgressBar status={{ width: 100 }} />
                    <View style={styles.container}>
                            <Text style={styles.para}>Did you attend school?</Text>  
                        <View style={{ flex: 1, flexDirection: 'row', marginVertical: moderateScale(18) }}>
                            <View style={{ flex: 2 }}>
                                <Radio selected={this.state.radio1} color="grey" selectedColor="#06427b"
                                    onPress={() => { this.toggleRadio(1, true) }} />
                            </View>
                            <View style={{ flex: 5 }}>
                                <Text style={styles.radio}>Yes</Text>
                            </View>
                            <View style={{ flex: 2 }}>
                                <Radio selected={!this.state.radio1} color='grey' selectedColor="#06427b"
                                    onPress={() => { this.toggleRadio(1, false) }} />
                            </View>
                            <View style={{ flex: 20 }}>
                                <Text style={styles.radio}>No</Text>
                            </View>
                        </View>
                        {
                            this.state.radio1 &&
                            <View>
                               <View style={{marginVertical:moderateScale(-18)}}>
                                        <TextField label='Name of school' value={this.state.school_name} style={styles.text}
                                            onChangeText={(school_name) => this.setState({ school_name })}{...TextFieldStyle} />
                                            
                                        <TextField label='How many months of full time school?' value={this.state.months_of_fulltimeSchool} style={styles.text}
                                            onChangeText={(months_of_fulltimeSchool) => this.setState({ months_of_fulltimeSchool })}{...TextFieldStyle} />

                                        <TextField label='Total amount on Slip' value={this.state.amount_Slip} style={styles.text}
                                            onChangeText={(amount_Slip) => this.setState({ amount_Slip })} {...TextFieldStyle} />
                                    </View>
                                    <View style={{marginTop:50 }}>
                                        <Text style={styles.para}>Line Other</Text>
                                    </View>
                                    {
                                        this.state.line.map((item, index) => {
                                            const arrayLength = this.state.line.length
                                            return (
                                                <View key={index}>
                                                    <View>
                                                        <TextField label='Line Description' style={styles.text}
                                                            onChangeText={(line_Description) => this.setInput(line_Description, 'desc', index)} {...TextFieldStyle} />
                                                        <Text style={styles.character}>(50 Char)</Text>
                                                        <TextField label='CAD $' style={styles.text}
                                                            onChangeText={(CAD_$) => this.setInput(CAD_$, 'cad', index)} labelHeight={moderateScale(10)} {...TextFieldStyle} />
                                                    </View>
                                                    {
                                                        index == arrayLength - 1 ?
                                                            <TouchableOpacity onPress={() => this.addmore()}>
                                                                <AddButton />
                                                            </TouchableOpacity>
                                                            : <RemoveButton onPress={() => this.deleteMore(index)} />
                                                    }
                                                </View>
                                            )
                                        })
                                    }
                               
                            </View>
                        }
                    </View>
                    <Touchable onPress={() => { this.props.navigation.navigate('IncomeSlip') }}>
                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <CustomButton title={"Proceed"} />
                    </View>
                    </Touchable>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        padding: moderateScale(18),
        backgroundColor: '#fff',
    },
    radio: {
        //: 'Roboto-Regular',
        fontSize: 18,
        color: '#2a2a2a'
    },
    para: {
        alignContent:'center',
        color: '#06427b',
        //: 'Roboto-Medium',
        fontSize: moderateScale(18),
        fontWeight: 'bold',
    },
    text: {
        fontSize: moderateScale(20),
        color: '#000000',
        //: 'Roboto-Regular'
    },
    character: {
        color: '#9b9b9b',
        //: 'Roboto-Regular',
        fontSize: moderateScale(14),
        textAlign: 'right'
    },
}
)
