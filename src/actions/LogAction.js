import { Timber } from '@timberio/node';
import DeviceInfo from 'react-native-device-info';
import {
    check,
    checkNotifications,
    PERMISSIONS,
} from 'react-native-permissions';
import NetInfo from '@react-native-community/netinfo';
import { BluetoothStatus } from 'react-native-bluetooth-status';
import FlareDeviceID from '../bits/FlareDeviceID';

const apiKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2FwaS50aW1iZXIuaW8vIiwiZXhwIjpudWxsLCJpYXQiOjE1ODM4NTEzMjYsImlzcyI6Imh0dHBzOi8vYXBpLnRpbWJlci5pby9hcGlfa2V5cyIsInByb3ZpZGVyX2NsYWltcyI6eyJhcGlfa2V5X2lkIjo2ODUzLCJ1c2VyX2lkIjoiYXBpX2tleXw2ODUzIn0sInN1YiI6ImFwaV9rZXl8Njg1MyJ9.fZ3YCnCQ8v3_yTQvNe9WaT0DRkEfFxyY07Pe6YgjSII';
const sourceId = '34447';
let logger;
let usernameStr = '';

function generateMetaData(deviceSerialNum): Promise {
    return new Promise(resolve => {
        Promise.all([
            check(PERMISSIONS.IOS.CONTACTS),
            check(PERMISSIONS.IOS.LOCATION_ALWAYS),
            checkNotifications(),
            NetInfo.fetch('cellular'),
            NetInfo.fetch('wifi'),
            BluetoothStatus.state(),
        ]).then(
            ([
                contactsPermissionStatus,
                locationPermissionStatus,
                notificationStatus,
                cellularState,
                wifiState,
                bluetoothState,
            ]) => {
                resolve({
                    phone_state: {
                        permissions: {
                            location: locationPermissionStatus,
                            contacts: contactsPermissionStatus,
                            notifications: notificationStatus.status,
                            bluetooth: bluetoothState ? 'enabled' : 'disabled',
                        },
                        connectivity: {
                            wifi: wifiState.isConnected
                                ? 'connected'
                                : 'disconnected',
                            cellular: cellularState.isConnected
                                ? 'connected'
                                : 'disconnected',
                            bluetooth: bluetoothState ? 'enabled' : 'disabled',
                        },
                    },
                    user_info: {
                        bracelet_serial_number: deviceSerialNum,
                        user_id: usernameStr,
                    },
                    timestamp: new Date().toString(),
                });
            }
        );
    });
}

export const FlareLoggerCategory = {
    wake: 'WAKE',
    button: 'BUTTON',
    send: 'API_SEND',
    receive: 'API_RECEIVE',
};

export class FlareLogger {
    static initLogging() {
        logger = new Timber(apiKey, sourceId);
        async function addDeviceInfo(log: ITimberLog): Promise<ITimberLog> {
            return {
                ...log,
                user: {
                    deviceId: DeviceInfo.getDeviceId(),
                    model: DeviceInfo.getModel(),
                    appVersion: DeviceInfo.getReadableVersion(),
                    systemVersion: DeviceInfo.getSystemVersion(),
                    uniqueId: DeviceInfo.getUniqueId(),
                },
            };
        }
        logger.use(addDeviceInfo);
    }

    static setLoginInfo(username) {
        usernameStr = username;
    }

    static removeLoginInfo() {
        usernameStr = '';
    }

    static error(categoryStr, logString, optionalBraceletId) {
        const braceletId = optionalBraceletId
            ? FlareDeviceID.getJewelryLabelFromDeviceID(optionalBraceletId)
            : '';
        generateMetaData(braceletId).then(metaData => {
            console.debug('Metadata', metaData);
            logger.error(logString, { category: categoryStr }, metaData);
        });
    }

    static warn(categoryStr, logString, optionalBraceletId) {
        const braceletId = optionalBraceletId
            ? FlareDeviceID.getJewelryLabelFromDeviceID(optionalBraceletId)
            : '';
        generateMetaData(braceletId).then(metaData => {
            console.debug('Metadata', metaData);
            logger.warn(logString, { category: categoryStr }, metaData);
        });
    }

    static debug(categoryStr, logString, optionalBraceletId) {
        const braceletId = optionalBraceletId
            ? FlareDeviceID.getJewelryLabelFromDeviceID(optionalBraceletId)
            : '';
        generateMetaData(braceletId).then(metaData => {
            console.debug('Metadata', metaData);
            logger.debug(logString, { category: categoryStr }, metaData);
        });
    }

    static info(categoryStr, logString, optionalBraceletId) {
        const braceletId = optionalBraceletId
            ? FlareDeviceID.getJewelryLabelFromDeviceID(optionalBraceletId)
            : '';
        generateMetaData(braceletId).then(metaData => {
            console.debug('Metadata', metaData);
            logger.info(logString, { category: categoryStr }, metaData);
        });
    }
}
