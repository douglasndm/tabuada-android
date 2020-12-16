import React from 'react';
import { Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import EnvConfig from 'react-native-config';

import { Container, AdContainer } from './styles';

import ResultsComponent from '../../Components/Results';

const adunit = __DEV__
    ? TestIds.BANNER
    : EnvConfig.ANDROID_ADMOB_ADUNIT_RESULTSBANNER;

function CustonTabBar(props) {
    return (
        <TabBar
            {...props}
            scrollEnabled
            style={{ backgroundColor: '#00bfff' }}
        />
    );
}

interface Props {
    numberToCalc: number;
    howManyTimesCalc: number;
}

const Results: React.FC = () => {
    const [displayAd, setDisplayAd] = React.useState(true);

    const { params } = useRoute();
    const routeParams = params as Props;

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {
            key: 'sum',
            title: 'Soma',
            accessibilityLabel: 'Exibir resultados de soma',
        },
        {
            key: 'sub',
            title: 'Subtração',
            accessibilityLabel: 'Exibir resultados de subtração',
        },
        {
            key: 'multi',
            title: 'Multiplicação',
            accessibilityLabel: 'Exibir resultados de multiplicação',
        },
        {
            key: 'divide',
            title: 'Divisão',
            accessibilityLabel: 'Exibir resultados de divisão',
        },
        {
            key: 'square',
            title: 'Raiz quadrada',
            accessibilityLabel: 'Exibir resultados de raiz quadrada',
        },
    ]);

    const initialLayout = { width: Dimensions.get('window').width };

    function handleAdFailedToLoad() {
        setDisplayAd(false);
    }

    return (
        <Container>
            <TabView
                tabBarPosition="bottom"
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                lazyPreloadDistance={5}
                renderScene={SceneMap({
                    sum: () => (
                        <ResultsComponent
                            numTabuar={routeParams.numberToCalc}
                            numVezes={routeParams.howManyTimesCalc}
                            resultType="sum"
                        />
                    ),
                    sub: () => (
                        <ResultsComponent
                            numTabuar={routeParams.numberToCalc}
                            numVezes={routeParams.howManyTimesCalc}
                            resultType="sub"
                        />
                    ),
                    multi: () => (
                        <ResultsComponent
                            numTabuar={routeParams.numberToCalc}
                            numVezes={routeParams.howManyTimesCalc}
                            resultType="multi"
                        />
                    ),
                    divide: () => (
                        <ResultsComponent
                            numTabuar={routeParams.numberToCalc}
                            numVezes={routeParams.howManyTimesCalc}
                            resultType="divide"
                        />
                    ),
                    square: () => (
                        <ResultsComponent
                            numTabuar={routeParams.numberToCalc}
                            numVezes={routeParams.howManyTimesCalc}
                            resultType="square"
                        />
                    ),
                })}
                initialLayout={initialLayout}
                renderTabBar={CustonTabBar}
            />

            {displayAd && (
                <AdContainer>
                    <BannerAd
                        unitId={adunit}
                        size={BannerAdSize.BANNER}
                        onAdFailedToLoad={handleAdFailedToLoad}
                    />
                </AdContainer>
            )}
        </Container>
    );
};

export default Results;
