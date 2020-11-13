import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles'

class MyTouchableOpacity extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
    }

    render() {
        const {color, content, width, onBtnPress} = this.props;

        return (
            <TouchableOpacity style={[styles.btn, {
                width: width,
                backgroundColor: color,
            }]}
                              onPress={() => onBtnPress({content})}>
                <Text style={styles.btnText}>{content}</Text>
            </TouchableOpacity>
        );
    }
}

export default MyTouchableOpacity;
