import React, {Component, useEffect} from 'react';
import {evaluate} from 'mathjs';
import SplashScreen from 'react-native-splash-screen'

import {
    StyleSheet,
    Text,
    Dimensions,
    View
} from 'react-native';
import styles from './styles';
import MyTouchableOpacity from './MyTouchableOpacity';

const extendedButtons = [
    {content: 'C', color: '#025959', width: '16.66%'},
    {content: '+/-', color: '#025959', width: '16.66%'},
    {content: ',', color: '#025959', width: '16.66%'},
    {content: '√', color: '#027368', width: '16.66%'},
    {content: 'x!', color: '#027368', width: '16.66%'},
    {content: '%', color: '#027368', width: '16.66%'},

    {content: '+', color: '#025959', width: '16.66%'},
    {content: 'exp', color: '#027368', width: '16.66%'},
    {content: '10^x', color: '#027368', width: '16.66%'},
    {content: '1', color: '#36ad9f', width: '16.66%'},
    {content: '2', color: '#36ad9f', width: '16.66%'},
    {content: '3', color: '#36ad9f', width: '16.66%'},

    {content: '-', color: '#025959', width: '16.66%'},
    {content: 'ln', color: '#027368', width: '16.66%'},
    {content: 'log10', color: '#027368', width: '16.66%'},
    {content: '4', color: '#36ad9f', width: '16.66%'},
    {content: '5', color: '#36ad9f', width: '16.66%'},
    {content: '6', color: '#36ad9f', width: '16.66%'},

    {content: '*', color: '#025959', width: '16.66%'},
    {content: 'e', color: '#027368', width: '16.66%'},
    {content: 'x^2', color: '#027368', width: '16.66%'},
    {content: '7', color: '#36ad9f', width: '16.66%'},
    {content: '8', color: '#36ad9f', width: '16.66%'},
    {content: '9', color: '#36ad9f', width: '16.66%'},
    {content: '/', color: '#025959', width: '16.66%'},

    {content: 'π', color: '#027368', width: '16.66%'},
    {content: 'x^3', color: '#027368', width: '16.66%'},
    {content: '0', color: '#36ad9f', width: '33.32%'},
    {content: '=', color: '#025959', width: '16.66%'},

]
const basicButtons = [
    {content: 'C', color: '#025959', width: '99.99%'},

    {content: '+/-', color: '#025959', width: '49.99%'},
    {content: ',', color: '#025959', width: '49.99%'},

    {content: '+', color: '#025959', width: '49.99%'},
    {content: '-', color: '#025959', width: '49.99%'},

    {content: '*', color: '#025959', width: '49.99%'},
    {content: '/', color: '#025959', width: '49.99%'},

    {content: '1', color: '#36ad9f', width: '33.33%'},
    {content: '2', color: '#36ad9f', width: '33.33%'},
    {content: '3', color: '#36ad9f', width: '33.33%'},


    {content: '4', color: '#36ad9f', width: '33.33%'},
    {content: '5', color: '#36ad9f', width: '33.33%'},
    {content: '6', color: '#36ad9f', width: '33.33%'},


    {content: '7', color: '#36ad9f', width: '33.33%'},
    {content: '8', color: '#36ad9f', width: '33.33%'},
    {content: '9', color: '#36ad9f', width: '33.33%'},


    {content: '0', color: '#36ad9f', width: '99.99%'},
    {content: '=', color: '#025959', width: '99.99%'},
]


var logo = require('./android/app/src/main/res/drawable/splash_icon.png');

export default class App extends Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    constructor() {
        super();
        this.state = {
            display: '',
            result: '',
            orientation: this.isPortrait() ? 'portrait' : 'landscape'
        };
        Dimensions.addEventListener('change', () => {
            this.setState({
                orientation: this.isPortrait() ? 'portrait' : 'landscape'
            });
        });
    }


    factorial = (num) => {
        if (num === 0) {
            return 1;
        } else {
            return num * this.factorial(num - 1);
        }
    }

    isPortrait = () => {
        const dim = Dimensions.get('window');
        return dim.height >= dim.width;
    };

    handleOp = (op) => {
        if (op === 'C') {
            this.setState({
                display: '',
                result: ''
            })
        } else if (op === '=') {
            this.setState({
                display: this.state.result,
                result: ''
            })
        } else if (op === '√') {
            this.setState({
                display: Math.sqrt(this.state.display),
                result: Math.sqrt(this.state.result)
            })
        } else if (op === 'exp') {
            this.setState({
                display: Math.exp(this.state.display),
                result: Math.exp(this.state.result)
            })
        } else if (op === 'ln') {
            this.setState({
                display: Math.log(this.state.display),
                result: Math.log(this.state.result)
            })
        } else if (op === 'log10') {
            this.setState({
                display: Math.log10(this.state.display),
                result: Math.log10(this.state.result)
            })
        } else if (op === 'x!') {
            this.setState({
                display: this.factorial(this.state.display),
                result: this.factorial(this.state.result)
            })
        } else if (op === '10^x') {
            this.setState({
                display: Math.pow(10, this.state.display),
                result: Math.pow(10, this.state.result)
            })
        } else if (op === '+/-') {
            this.setState({
                display: this.state.display * -1,
                result: this.state.result * -1
            })
        } else if (op === '%') {
            this.setState({
                display: this.state.display,
                result: this.state.result / 100
            })
        } else {
            const display = this.state.display + op
            let result = this.state.result
            try {
                let fixedOperaction = display.split(',').join('.')
                fixedOperaction = fixedOperaction.split('÷').join('/')
                fixedOperaction = fixedOperaction.split('π').join(Math.PI)
                fixedOperaction = fixedOperaction.split('e').join(Math.E)
                fixedOperaction = fixedOperaction.split('x^2').join('^2')
                fixedOperaction = fixedOperaction.split('x^3').join('^3')

                console.log(fixedOperaction)
                result = String(evaluate(fixedOperaction)).toString()
            } catch (e) {
            }
            this.setState({
                display,
                result
            })
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.display}>{this.state.display} </Text>
                <Text style={styles.result}>{this.state.result}</Text>
                <View style={styles.buttons}>
                    {
                        this.state.orientation === 'portrait' ?
                            basicButtons.map((op) => {
                                return (
                                    <MyTouchableOpacity key={op.content} content={op.content} color={op.color}
                                                        width={op.width}
                                                        onBtnPress={this.handleOp.bind(this, op.content)}/>
                                );
                            })
                            :
                            extendedButtons.map((op) => {
                                return (
                                    <MyTouchableOpacity key={op.content} content={op.content} color={op.color}
                                                        width={op.width}
                                                        onBtnPress={this.handleOp.bind(this, op.content)}/>
                                );
                            })
                    }
                </View>
            </View>
        );
    }
}
