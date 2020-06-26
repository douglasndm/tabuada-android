import React from 'react';
import {Dimensions} from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import ResultsComponent from '../../components/results';

function CustonTabBar(props){
    return <TabBar
                {...props}
                scrollEnabled={true}
                style={{backgroundColor: '#00bfff'}} />
}


export default function ({ route, navigation }) {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'sum', title: 'Soma' },
      { key: 'sub', title: 'Subtração' },
      { key: 'multi', title: 'Multiplicação' },
      { key: 'divide', title: 'Divisão' },
      { key: 'square', title: 'Raiz quadrada'}
    ]);

    const { numTabuar } = route.params;
    const { numVezes } = route.params;


    const initialLayout = { width: Dimensions.get('window').width };

    return (

        <TabView
            tabBarPosition="bottom"
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={SceneMap({
                sum: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'sum'} />,
                sub: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'sub'} />,
                multi: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'multi'} />,
                divide: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'divide'} />,
                square: () => <ResultsComponent numTabuar={numTabuar} numVezes={numVezes} resultType={'square'} />,
            })}
            initialLayout={initialLayout}
            renderTabBar={CustonTabBar} />

    );
}
