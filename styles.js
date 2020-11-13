const React = require('react-native');

export default {
    container:{
        flex: 1,
        display:'flex',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
    },
    display:{
        flex: 1.1,
        backgroundColor: '#efefef',
        fontSize: 60,
        fontFamily:'Nunito',
        textAlign: 'right',
        paddingTop: 30,
        paddingRight: 10
    },
    result:{
        flex:0.5,
        backgroundColor: '#cbe1d3',
        fontSize: 25,
        fontFamily:'Nunito',
        textAlign: 'right',
        paddingRight: 10,
        paddingBottom: 10
    },
    buttons:{
        flex:1.05,
        display:'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'flex-start',
        alignContent:'flex-end'

    },
    btn:{
        justifyContent: 'center',
        borderWidth: 1,
        borderColor:'white',
    },
    btnText:{
        textAlign: 'center',
        fontFamily:'Nunito',
        fontSize: 25,
        color: 'white'
    },
};
