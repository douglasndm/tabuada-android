import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import { ResultItem, ResultText } from './styles';

function ResItem({ result }) {
    return (
        <ResultItem>
            <ResultText>{result}</ResultText>
        </ResultItem>
    );
}

function Results(props) {
    const [results, setResults] = useState([]);

    const { numTabuar, numVezes, resultType } = props;

    useEffect(() => {
        for (let i = 0; i <= numVezes; i++) {
            switch (resultType) {
                case 'sum':
                    setResults((prevState) => [
                        ...prevState,
                        `${numTabuar} + ${i} = ${
                            parseInt(numTabuar) + parseInt(i)
                        }`,
                    ]);
                    break;
                case 'sub':
                    setResults((prevState) => [
                        ...prevState,
                        `${numTabuar} - ${i} = ${numTabuar - i}`,
                    ]);
                    break;
                case 'multi':
                    setResults((prevState) => [
                        ...prevState,
                        `${numTabuar} x ${i} = ${numTabuar * i}`,
                    ]);
                    break;
                case 'divide':
                    if (i !== 0)
                        setResults((prevState) => [
                            ...prevState,
                            `${numTabuar} / ${i} = ${(numTabuar / i).toFixed(
                                3
                            )}`,
                        ]);
                    break;
                case 'square':
                    if (i !== 0)
                        setResults((prevState) => [
                            ...prevState,
                            `√${i} = ${Math.sqrt(i).toFixed(4)}`,
                        ]);
                    break;
                default:
                    break;
            }
        }
    }, [numTabuar, numVezes]);

    return (
        <View>
            <FlatList
                data={results}
                keyExtractor={(result) => result}
                renderItem={({ item }) => <ResItem result={item} />}
            />
        </View>
    );
}

export default Results;
