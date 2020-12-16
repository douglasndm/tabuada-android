import React from 'react';
import { Dimensions, View } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { useTheme } from 'react-native-paper';
import EnvConfig from 'react-native-config';

import { AdContainer } from './styles';

import ResultsComponent from '../../Components/Results';

const adunit = __DEV__
    ? TestIds.BANNER
    : EnvConfig.ANDROID_ADMOB_RESULTPAGE_BANNER;

function CustonTabBar(props) {
    return (
        <TabBar
            {...props}
            scrollEnabled
            style={{ backgroundColor: '#00bfff' }}
        />
    );
}

export default ({ route, navigation }) => {
    const [displayAd, setDisplayAd] = React.useState(true);

    const theme = useTheme();

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

    const { numTabuar } = route.params;
    const { numVezes } = route.params;

    function handleAdFailedToLoad() {
        setDisplayAd(false);
    }

    return (
        <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
            <TabView
                tabBarPosition="bottom"
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                lazyPreloadDistance={5}
                renderScene={SceneMap({
                    sum: () => (
                        <ResultsComponent
                            numTabuar={numTabuar}
                            numVezes={numVezes}
                            resultType="sum"
                        />
                    ),
                    sub: () => (
                        <ResultsComponent
                            numTabuar={numTabuar}
                            numVezes={numVezes}
                            resultType="sub"
                        />
                    ),
                    multi: () => (
                        <ResultsComponent
                            numTabuar={numTabuar}
                            numVezes={numVezes}
                            resultType="multi"
                        />
                    ),
                    divide: () => (
                        <ResultsComponent
                            numTabuar={numTabuar}
                            numVezes={numVezes}
                            resultType="divide"
                        />
                    ),
                    square: () => (
                        <ResultsComponent
                            numTabuar={numTabuar}
                            numVezes={numVezes}
                            resultType="square"
                        />
                    ),
                })}
                initialLayout={initialLayout}
                renderTabBar={CustonTabBar}
            />

            <AdContainer displayAd={displayAd}>
                <BannerAd
                    unitId={adunit}
                    size={BannerAdSize.BANNER}
                    onAdFailedToLoad={handleAdFailedToLoad}
                />
            </AdContainer>
        </View>
    );
};
