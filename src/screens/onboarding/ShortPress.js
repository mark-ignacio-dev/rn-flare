import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

import Button from '../../bits/Button';
import Colors from '../../bits/Colors';
import CommonBottom from './CommonBottom';
import CommonMiddle from './CommonMiddle';
import CommonTop from './CommonTop';
import FlareAlert from '../../bits/FlareAlert';
import Spacing from '../../bits/Spacing';
import Strings from '../../locales/en';
import Type from '../../bits/Type';

const styles = StyleSheet.create({
    bluetoothConfirm: {
        flex: 2,
        display: 'flex',
        flexDirection: 'column',
    },
    bluetoothImageComponent: {
        display: 'flex',
        width: 292,
        height: 292,
        justifyContent: 'center',
    },
    confirmInstructions: {
        marginBottom: Spacing.medium,
    },
    secondFactorInput: {
        fontSize: Type.size.large,
        padding: Spacing.small,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.theme.pink,
        marginBottom: Spacing.large,
    },
    jewelryPreview: {
        alignSelf: 'center',
        width: 300,
        height: 75,
        maxHeight: 75,
        borderRadius: 16,
    },
    nextButtonArea: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    right: {
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginRight: Spacing.huge,
    },
});

export default function getShortPressPage(props) {
    let image = null;
    let imageSource = null;
    let bottomComponent = null;

    function next(title, onPress) {
        return (
            <View style={[styles.nextButtonArea, styles.right]}>
                <Button secondary title={title} onPress={() => onPress()} />
            </View>
        );
    }

    if (props.receivedShortPress) {
        // one good device transmitting
        imageSource = require('../../assets/lotties/dino-dance.json');
        bottomComponent = (
            <CommonBottom
                right
                bodyText={Strings.onboarding.shortPress.singleDevice.subtitleStart}
                body={next(Strings.onboarding.longPress.proceedAnywayButtonLabel, props.onPressNext)}
            />
        );
    } else if (props.bluetoothEnabled && props.locationEnabled) {
        // no devices found yet
        imageSource = require('../../assets/lotties/ripple.json');
        bottomComponent = (
            <CommonBottom
                right
                bodyText={Strings.onboarding.shortPress.subtitle}
                body={next(Strings.onboarding.shortPress.proceedAnywayButtonLabel, props.onPressNext)}
            />
        );
    } else if (!props.locationEnabled && props.locationPrompted) {
        imageSource = require('../../assets/lotties/ripple.json');
        bottomComponent = (
            <CommonBottom
                center
                bodyText={Strings.onboarding.shortPress.disabled.subtitle}
                body={
                    <View>
                        <Button
                            secondary
                            title={Strings.onboarding.welcome.proceedAnywayButtonLabel}
                            onPress={() => props.onPressNext()}
                        />
                    </View>
                }
            />
        );
    }

    if (imageSource) {
        image = (
            <LottieView
                source={imageSource}
                autoPlay
                loop
                resizeMode="cover"
                style={{
                    width: 292,
                    height: 292,
                }}
            />
        );
    }

    return {
        backgroundColor: Colors.theme.purple,
        image: (
            <View style={styles.imageContainer}>
                <CommonTop />
            </View>
        ),
        title: (
            <View>
                {!props.bluetoothEnabled && (
                    <FlareAlert message={Strings.home.bluetoothDisabledWarning} variant="warning" large centered />
                )}
                {!props.locationEnabled && props.locationPrompted && (
                    <FlareAlert message={Strings.home.locationDisabledWarning} variant="warning" large centered />
                )}
                {props.bluetoothEnabled && (
                    <View style={styles.titleContainer}>
                        <CommonMiddle right image={image} />
                    </View>
                )}
            </View>
        ),
        subtitle: <View style={styles.subtitleContainer}>{bottomComponent}</View>,
    };
}
