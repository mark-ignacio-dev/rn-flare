import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import Intro from './Intro';
import WeirdVibes from './WeirdVibes';
import FakeCall from './FakeCall';
import addToContacts from '../AddToContacts';
import UncomfortableDate from './UncomfortableDate';
import TextYourCrew from './TextYourCrew';
import { setScenarioScreen } from '../../actions/regActions';

const Scenarios = () => {
    const dispatch = useDispatch();
    const { screen, didCall, didText } = useSelector(
        ({ user: { scenarios = {} } }) => ({
            screen: scenarios.screen || 'intro',
            didCall:
                typeof scenarios.didCall === 'boolean'
                    ? scenarios.didCall
                    : false,
            didText:
                typeof scenarios.didText === 'boolean'
                    ? scenarios.didText
                    : false,
        })
    );

    const didFirst = didCall || didText;

    const intro = React.useCallback(() => {
        dispatch(setScenarioScreen('intro'));
    }, [dispatch]);
    const weirdVibes = React.useCallback(() => {
        dispatch(setScenarioScreen('weirdVibes'));
    }, [dispatch]);
    const fakeCall = React.useCallback(() => {
        dispatch(setScenarioScreen('fakeCall'));
    }, [dispatch]);
    const textYourCrew = React.useCallback(() => {
        dispatch(setScenarioScreen('textYourCrew'));
    }, [dispatch]);
    const uncomfortableDate = React.useCallback(() => {
        dispatch(setScenarioScreen('uncomfortableDate'));
    }, [dispatch]);
    const currentScenario = React.useCallback(() => {
        dispatch(
            setScenarioScreen(didFirst ? 'uncomfortableDate' : 'weirdVibes')
        );
    }, [didFirst, dispatch]);
    const currentScenarioAgain = React.useCallback(() => {
        dispatch(
            setScenarioScreen(
                didFirst ? 'uncomfortableDateAgain' : 'weirdVibesAgain'
            )
        );
    }, [didFirst, dispatch]);

    return (
        <SafeAreaProvider>
            {(() => {
                switch (screen) {
                    case 'intro':
                        return <Intro onNext={weirdVibes} />;
                    case 'weirdVibes':
                        return (
                            <WeirdVibes
                                onBack={intro}
                                fakeCall={fakeCall}
                                textCrew={textYourCrew}
                            />
                        );
                    case 'weirdVibesAgain':
                        return (
                            <WeirdVibes
                                postDemo
                                nextScenario={uncomfortableDate}
                                addToContacts={addToContacts}
                            />
                        );
                    case 'uncomfortableDate':
                        return (
                            <UncomfortableDate
                                fakeCall={fakeCall}
                                textCrew={textYourCrew}
                            />
                        );
                    case 'uncomfortableDateAgain':
                        return (
                            <UncomfortableDate
                                postDemo
                                addToContacts={addToContacts}
                            />
                        );
                    case 'fakeCall':
                        return (
                            <FakeCall
                                onBack={currentScenario}
                                onSuccess={currentScenarioAgain}
                            />
                        );
                    case 'textYourCrew':
                        return (
                            <TextYourCrew
                                onBack={currentScenario}
                                onSuccess={currentScenarioAgain}
                            />
                        );
                    default:
                        return null;
                }
            })()}
        </SafeAreaProvider>
    );
};

export default Scenarios;
