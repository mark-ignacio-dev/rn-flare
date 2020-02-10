import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaProvider, useSafeArea } from 'react-native-safe-area-context';
import { Navigation } from 'react-native-navigation';

import * as actions from '../actions';
import { LEFT_NAVIGATION_WIDTH } from '../constants/Config';
import Colors from '../bits/Colors';
import RandomImage from '../bits/RandomImage';
import Strings from '../locales/en';
import contactSupport from '../bits/contactSupport';

import iconCrew from '../assets/menu-item-crew.png';
import iconHome from '../assets/menu-item-home.png';
import iconProfile from '../assets/menu-item-profile.png';
import iconSettings from '../assets/menu-item-settings.png';
import iconContact from '../assets/menu-item-contact.png';
import iconInfo from '../assets/menu-item-info.png';
import iconShare from '../assets/menu-item-share.png';

import menuPhoto1 from '../assets/menu-photo-1.jpg';
import menuPhoto2 from '../assets/menu-photo-2.jpg';
import menuPhoto3 from '../assets/menu-photo-3.jpg';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.theme.cream,
        paddingHorizontal: 32,
        width: LEFT_NAVIGATION_WIDTH,
    },
    menuItem: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        height: 36,
        alignItems: 'center',
    },
    padded: {
        marginTop: 36,
    },
    menuItemIcon: {
        width: 36,
        height: 36,
        resizeMode: 'center',
        marginRight: 12,
        tintColor: Colors.theme.black,
    },
    menuItemText: {
        fontFamily: 'Nocturno Display Std',
        fontSize: 16,
        color: Colors.theme.black,
    },
    topImage: {
        width: 180,
        height: 300,
        marginBottom: 'auto',
        alignSelf: 'center',
        resizeMode: 'contain',
    },
});

const imageSources = [menuPhoto1, menuPhoto2, menuPhoto3];

const MenuItem = ({ onPress, label, icon, style }) => (
    <TouchableOpacity style={[styles.menuItem, style]} onPress={onPress}>
        <Image source={icon} style={styles.menuItemIcon} />
        <Text style={styles.menuItemText}>{label}</Text>
    </TouchableOpacity>
);

const LeftDrawer = ({ changeAppRoot, shareFlare, devices, referralKey }) => {
    const insets = useSafeArea();

    const handleHome = React.useCallback(() => {
        changeAppRoot('secure');
    }, [changeAppRoot]);

    const handleCrew = React.useCallback(() => {
        changeAppRoot('secure-crew');
    }, [changeAppRoot]);

    const handleSettings = React.useCallback(() => {
        changeAppRoot('secure-settings');
    }, [changeAppRoot]);

    const handleAccount = React.useCallback(() => {
        changeAppRoot('secure-account');
    }, [changeAppRoot]);

    const handleShare = React.useCallback(() => {
        shareFlare(referralKey);
    }, [referralKey, shareFlare]);

    const handleSupport = React.useCallback(() => {
        contactSupport(devices);
    }, [devices]);

    const howFlareWorks = React.useCallback(() => {
        Navigation.showModal({
            component: {
                name: 'com.flarejewelry.howitworks',
            },
        });
    }, []);

    return (
        <View
            style={[
                styles.container,
                {
                    paddingTop: insets.top + 32,
                    paddingBottom: insets.bottom + 32,
                },
            ]}
        >
            <RandomImage sources={imageSources} style={styles.topImage} />
            <View>
                <MenuItem
                    onPress={handleHome}
                    label={Strings.leftDrawer.home}
                    icon={iconHome}
                />
                <MenuItem
                    onPress={handleCrew}
                    label="My Crew"
                    icon={iconCrew}
                />
                <MenuItem
                    onPress={handleSettings}
                    label={Strings.leftDrawer.settings}
                    icon={iconSettings}
                />
                <MenuItem
                    onPress={handleAccount}
                    label="My Account"
                    icon={iconProfile}
                />
                <MenuItem
                    onPress={handleShare}
                    label="Share Flare"
                    icon={iconShare}
                />
                <MenuItem
                    style={styles.padded}
                    onPress={howFlareWorks}
                    label="How Flare Works"
                    icon={iconInfo}
                />
                <MenuItem
                    onPress={handleSupport}
                    label="Contact Support"
                    icon={iconContact}
                />
            </View>
        </View>
    );
};

const mapStateToProps = ({ user: { devices, referralKey } }) => ({
    devices,
    referralKey,
});

const mapDispatchToProps = {
    changeAppRoot: actions.changeAppRoot,
    shareFlare: actions.shareFlare,
};

const ConnectedLeftDrawer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftDrawer);

const WrappedDrawer = ({ ...props }) => (
    <SafeAreaProvider>
        <ConnectedLeftDrawer {...props} />
    </SafeAreaProvider>
);

export default WrappedDrawer;
