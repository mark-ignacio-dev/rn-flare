const Strings = {
    auth: {
        loading: 'Loading af',
    },
    beacons: {
        lastReceived: 'Latest beacon',
        notYetReceived: 'No beacons detected',
    },
    contacts: {
        add: {
            title: 'Choose your Crew',
        },
        chooseInstruction: 'Click on the name of a contact to add them to your Crew',
        choosePrompt: 'Choose up to 5 contacts',
        crewNamePlaceholder: 'My Crew',
    },
    crewEventTimeline: {
        headings: {
            cancel: '🚫 You canceled the Flare.',
            create: '📣 You started the Flare.',
            join: 'is available.',
            notify: '💌 We reached out to',
            unknown: '🤮 Something got mixed up on our end',
        },
        title: 'You held down the button so we reached out to your crew.',
    },
    dev: {
        sendTestFlare: 'Send test flare',
    },
    deviceSelector: {
        enterDeviceCodePrompt: 'Enter the code printed on your jewelry',
        errorAddingDevice: 'Please enter a valid code',
    },
    generic: {
        idPrefix: '#',
        signOut: 'Sign Out',
    },
    home: {
        bluetoothDisabledWarning: {
            body: 'Please enable Bluetooth on this device so that Flare can work.',
            title: 'OMG Bluetooth is off!!',
        },
        cancelActiveFlare: 'Cancel Flare',
        chooseLanguage: 'Choose language',
        contactsButtonLabelAdd: 'Choose Your Crew',
        contactsButtonLabelEdit: 'Edit Your Crew',
        lastBeacon: {
            absent: 'No beacons received',
            present: 'Last beacon received',
        },
        title: 'Welcome',
    },
    jewelry: {
        addNew: 'Add New',
        addNewAuto: {
            prompt: 'Please press the button on your new jewelry 3 times in a row.',
        },
        addNewConfirm: {
            fccMessage: 'CONTAINS FCC ID: RYYEYSLSN',
            placeholderTwoFactor: 'Last 3 digits',
            prompt: 'Got it! Please look at the bottom of your jewelry and type the last 3 digits of the code you see.',
            sampleDigits: '???',
            secondFactorError: 'Wrong code? Please try again.',
        },
        addNewManual: {
            buttonLabel: 'Add Manually',
            cameraPermissionMessage: 'Please let us use your camera so we can scan your jewelry',
            cameraPermissionTitle: 'Permission to use camera',
            placeholderDeviceID: 'Jewelry code, eg XXX123',
            prompt:
                'Please point your camera at the QR code on the bottom of your jewelry. ' +
                'If you prefer, type the jewelry code into the field below.',
        },
        addNewTryAgain: 'Start over',
        addThisButtonLabel: 'Add this Jewelry',
        cuffV1: {
            name: 'Flare Prototype',
        },
        cuffV2: {
            name: 'Flare Cuff',
        },
        emptyList: "You don't have any jewelry. Press the Add New button to add some jewelry to your account",
        remove: 'Remove',
        removeConfirm: {
            cancelLabel: 'No, keep it',
            confirmLabel: 'Yes, remove it',
            promptBegin: 'After you remove the jewelry with label ',
            promptEnd: ", pressing its button won't do anything. " + ' You will not get calls and your crew will not receive alerts.\n\n' + 'Are you sure you want to remove it?',
        },
    },
    leftDrawer: {
        home: 'Home',
        jewelry: 'Jewelry',
        settings: 'Settings',
    },
    manufacturing: {
        title: 'Device Provisioning',
        /* Stages -- must match server enum */
        stages: {
            New: 'New',
            Added: 'Added',
            BurnIn: 'Burn In',
            Ready: 'Ready',
        },
        testBeacon: 'Test',
    },
    notifications: {
        bluetoothDisabled: 'Please turn on bluetooth so that Flare can work! 💔',
        events: {
            flare: {
                defaultMessage: 'Get that thing done',
            },
        },
    },
    onboarding: {
        welcome: {
            title: 'Welcome!',
            subtitle: "We're so excited that you're using Flare.",
            alwaysAllow: 'Always allow',
        },
        location: {
            title: 'Location',
            subtitle:
                'To let your jewelry work, Flare needs permission to access your location ' +
                "even when it's running in the background.",
        },
        noBluetooth: {
            title: 'Enable Bluetooth',
            subtitle: 'Please enable Bluetooth before using your jewelry.',
        },
        shortPress: {
            title: 'Short Press',
            subtitle: 'Press the button on your jewelry briefly a few times in a row.',
            multipleDevices: {
                title: 'Wait a sec',
                subtitle: "It's noisy in here. Wait a sec and try again, or maybe move to a different room.",
            },
            singleDevice: {
                title: 'Short Press',
                subtitleStart: 'OMG we heard something! Look at the label on your jewelry. Does it start with this?',
                buttonLabel: "That's Mine",
            },
            chosenDevice: {
                title: 'Confirm Jewelry',
                subtitle: 'Check the label on your jewelry. Enter the last 3 characters in the code.',
            },
            deviceClaimed: {
                title: 'All Yours',
                subtitle:
                    "Your new piece of jewelry is connected to your account. Next we'll show you another " +
                    'type of button press.',
            },
        },
        longPress: {
            waiting: {
                title: 'Long Press',
                subtitle: 'Now hold the button down for longer, about 3 seconds, and let go',
            },
            success: {
                title: 'Long Press 😎🎉✨',
                subtitle:
                    'After a long press, we reach out to a group of your contacts that you choose. ' +
                    'They receive a text message telling them where you are and how to reach you. ' +
                    'You can see their group messages in the app. Press Next to learn how to cancel ' +
                    "your flare and tell your crew that you're okay.",
            },
        },
        longPressCancel: {
            initial: {
                title: 'Cancel your Flare',
                subtitle:
                    "Once you're feeling comfortable, cancel your Flare so that your contacts know that " +
                    "you're okay. To stop other people from canceling your Flare, it's protected by a secret " +
                    'pin code that you choose. Go ahead and choose your PIN here:',
                buttonLabel: 'Set PIN',
            },
            hasSetPin: {
                title: 'Good to Go',
                subtitle:
                    'Great! You pressed the button to get a call. You held the button to start a test Flare. ' +
                    "Finally, you canceled the test Flare. Next you'll choose the people who we'll reach out to " +
                    'when you really need it.',
            },
            pinPlaceholder: 'Secret code',
        },
        contacts: {
            title: 'Contacts',
            subtitle: "Please give us permission to access your contacts. You'll choose which contacts we reach out to when you hold the button.",
        },
    },
    permissions: {
        coarseLocation: {
            message: 'Please give Flare permission to use your location. We only share your ' + 'location with your selected contacts when you need backup.',
            title: 'Flare wants your general location',
        },
        contacts: {
            message: 'Please give Flare permission to read your contacts. We display your ' + 'contacts so that you can choose your crew.',
            title: 'Flare wants to read your contacts',
        },
        fineLocation: {
            message: 'Please give Flare permission to use your location. We only share ' + 'your location with your selected contacts when you need backup.',
            title: 'Flare wants your precise location',
        },
    },
    pin: {
        failure: 'Invalid PIN',
        prompt: 'Enter your Flare PIN',
        title: 'Cancel Flare',
    },
    settings: {
        config: {
            title: 'Configuration',
        },
        notifications: {
            customOption: 'Custom',
            customPromptPlaceholder: 'Your custom popup text',
            defaultMessage: 'Reminder: 8am appt tomorrow',
            defaultOption: 'Default',
            promptSelectionBody: "When you press and hold the button on your bracelet to send out a flare, we'll send you a push " + "notification. It's your secret message! That's how you'll know that your flare was sent out " + 'successfully. Customize the message below.',
            promptSelectionTitle: 'Custom popup message',
            saveButtonLabel: 'Save popup',
            title: 'Notifications',
        },
        title: 'Settings',
    },
    signin: {
        forgotPassword: 'Forgot Password',
        invalid: 'Please enter a valid username and password.',
        passwordPrompt: 'Password',
        signInLabel: 'Sign In',
        usernamePrompt: 'Email',
        warning: 'You need to sign in so Flare can work! 🔥',
    },
};

export default Strings;
