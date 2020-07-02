import React from 'react';
import { Dimensions } from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';

import { AdContainer } from './styles';

import ResultsComponent from '../../components/results';

const adunit = __DEV__ ? TestIds.BANNER : 'ca-app-pub-3394292244951932/1748093801';

function CustonTabBar(props){
    return <TabBar
                {...props}
                scrollEnabled={true}
                style={{backgroundColor: '#00bfff'}} />
}




export default function ({ route, navigation }) {
    const [displayAd, setDisplayAd] = React.useState(true);

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'sum', title: 'Soma' },
      { key: 'sub', title: 'Subtração' },
      { key: 'multi', title: 'Multiplicação' },
      { key: 'divide', title: 'Divisão' },
      { key: 'square', title: 'Raiz quadrada'}
    ]);

    const initialLayout = { width: Dimensions.get('window').width };

    const { numTabuar } = route.params;
    const { numVezes } = route.params;



    function handleAdFailedToLoad() {
        setDisplayAd(false);
    }

    return (

        <>
            <TabView
                tabBarPosition="bottom"
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                lazyPreloadDistance={5}
                renderScene={SceneMap({
                    sum: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'sum'} />,
                    sub: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'sub'} />,
                    multi: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'multi'} />,
                    divide: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'divide'} />,
                    square: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'square'} />,
                })}
                initialLayout={initialLayout}
                renderTabBar={CustonTabBar} />

            <AdContainer displayAd={displayAd}>
                <BannerAd unitId={adunit} size={BannerAdSize.BANNER} onAdFailedToLoad={handleAdFailedToLoad} />
            </AdContainer>
        </>

    );
}
