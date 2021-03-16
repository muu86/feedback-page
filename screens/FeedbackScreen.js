import * as React from 'react';
import {
    StatusBar,
    StyleSheet,
    View,
    Text,
    Image,
    Animated,
    Dimensions,
    FlatList,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const ITEM_SIZE = width * 0.7;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) * 0.5;

const Info = ({ data, scrollX }) => {
    const good = Object.keys(data)
                    .filter(key => (
                        data[key][0] == 2
                    ))
                    .map((key, index) => ({
                        key: index,
                        info: data[key][2],
                    }));

    console.log(good);
    
    return (
        <Animated.FlatList
            data={good}
            keyExtractor={item => item.key.toString()}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
            )}
            renderItem={({ item }) => (
                <Text>{item.info}</Text>
            )}
        />
    )
}

const InfoList = ({ data, scrollX }) => {

    data = [{ key: 'empty-left' }, ...data, { key: 'empty-right' }];

    return (
        <View style={{ flex: 1 }}>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.key}
                horizontal
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                renderItem={({ item , index }) => {
                    if (!item.image) {
                        return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                    }

                    return (
                        <View style={{ width: ITEM_SIZE }}>
                        <Animated.View
                            style={{
                                // marginHorizontal: 10,
                                marginVertical: 30,
                                // padding: 2,
                                alignItems: 'center',
                                borderRadius: 30,
                                backgroundColor: 'blue',
                                // transform: [{ scale }],
                            }}
                        >
                            <Text>{item.key}</Text>
                        </Animated.View>
                    </View>    
                    )
                }}
            />
        </View>
    )
}

const ImageList = ({ data, scrollX }) => {

    data = [{ key: 'empty-left' }, ...data, { key: 'empty-right' }];

    return (
        <View style={{ flex: 1 }}>
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={data}
                keyExtractor={item => item.key}
                horizontal
                bounces={false}
                decelerationRate={20}
                // contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                renderItem={({ item, index }) => {
                    if (!item.image) {
                        return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                    }

                    const inputRange = [
                        (index - 2) * ITEM_SIZE,
                        (index - 1) * ITEM_SIZE,
                        index * ITEM_SIZE,
                    ];

                    const scale = scrollX.interpolate({
                        inputRange,
                        outputRange: [0.9, 1, 0.9],
                        // extrapolate: 'clamp',
                    })

                    console.log(item);
                    return (
                        <View style={styles.viewContainer}>
                            <Animated.View
                                style={{
                                    // marginHorizontal: 10,
                                    // marginVertical: 0,
                                    margin: 0,
                                    padding: 0,
                                    // alignItems: 'center',
                                    borderRadius: 30,
                                    // backgroundColor: 'black',
                                    transform: [{ scale }],
                                }}
                            >
                                <Image
                                    style={styles.poseImage}
                                    source={{ uri: item.image }}
                                />
                                <Text>{item.key}</Text>
                                <Info data={item.feedback} scrollX={scrollX} />
                            </Animated.View>
                        </View>    
                    )
                }}
            />
        </View>
    )
}

const FeedbackScreen = ({ route }) => {
    const data = route.params.data;
    const scrollX = React.useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <ImageList data={data} scrollX={scrollX} />
            {/* <InfoList data={data} scrollX={scrollX} /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    viewContainer: {
        width: ITEM_SIZE,
    },
    poseImage: {
        width: '100%',
        height: height * 0.5,
        resizeMode: 'contain',
        // backgroundColor: 'blue',
        borderRadius: 30,
        marginHorizontal: 0,
        paddingHorizontal: 0,
    }
})

export default FeedbackScreen;