import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { connect } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import Colors from '../bits/Colors';
import RandomImage from '../bits/RandomImage';
import Spacing from '../bits/Spacing';
import Strings from '../locales/en';
import Type from '../bits/Type';

import { signOut } from '../actions/authActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: Colors.backgrounds.pink,
        padding: Spacing.medium,
        width: 280,
        paddingTop: Spacing.large,
    },
    menuItem: {
        paddingTop: Spacing.medium,
        paddingBottom: Spacing.medium,
        fontSize: Type.size.medium,
    },
    topImage: {
        width: 140,
        height: 140,
        alignSelf: 'center',
        marginTop: Spacing.large,
    },
});

// eslint-disable-next-line react/prefer-stateless-function
class LeftDrawer extends React.Component {
    static handleSettings() {
        Navigation.push('MAIN_UI_STACK', {
            component: {
                name: 'com.flarejewelry.app.Settings',
            },
        });
    }

    static handleJewelry(bleManager) {
        Navigation.push('MAIN_UI_STACK', {
            component: {
                name: 'com.flarejewelry.app.Jewelry',
                passProps: {
                    bleManager,
                },
            },
        });
    }

    handleSignOut() {
        this.props.dispatch(signOut());
    }

    goToPushedView = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'com.flarejewelry.app.LeftDrawer',
            },
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <RandomImage
                    sources={[
                        { uri: 'flower' },
                        { uri: 'notsorry' },
                        { uri: 'vibe' },
                        { uri: 'bolt' },
                    ]}
                    style={styles.topImage}
                />
                <View>
                    <TouchableOpacity onPress={() => LeftDrawer.handleJewelry(this.props.bleManager)}>
                        <Text style={styles.menuItem}>
                            {Strings.leftDrawer.jewelry}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => LeftDrawer.handleSettings()}>
                        <Text style={styles.menuItem}>
                            {Strings.leftDrawer.settings}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.handleSignOut()}>
                        <Text style={styles.menuItem}>
                            {Strings.leftDrawer.signOut}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.user.token,
        cancelingActiveFlare: state.user.cancelingActiveFlare,
        hasActiveFlare: state.user.hasActiveFlare,
    };
}

export default connect(mapStateToProps)(LeftDrawer);
