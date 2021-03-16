import * as React from 'react';
import {
    View, 
    Text,
    Button,
} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { useNavigation } from '@react-navigation/core';

const POSE_NAME = ["address", "take away", "back swing", "top", "down swing", "impact", "release", "follow through"];

const PickVideoScreen = () => {
    const [video, setVideo] = React.useState(null);
    // const [videoWidth, setVideoWidth] = React.useState(0);
    // const [videoHeight, setVideoHeight] = React.useState(0);
    const navigation = useNavigation();

    React.useEffect(() => {
        (async () => {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('미디어 라이브러리에 대한 권한을 얻지 못 했습니다.');
            }
        })();
    }, []);

    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            quality: 1,
        })

        console.log(result);

        if (!result.cancelled) {
            setVideo(result.uri);
            // setVideoWidth(result.width);
            // setVideoHeight(result.height);
        }
    }

    const sendVideo = async () => {
        const formData = new FormData();
        const videoName = video.split('/').slice(-1)[0]
        console.log('send Video: ', video);
        formData.append("video", {
            name: videoName,
            type: 'video/mp4',
            uri: video,
        })

        const result = await fetch("http://121.138.83.4:80/uploads", {
            method: 'POST',
            headers: {
                'Content-Type': "multipart/form-data",
            },
            body: formData,
        })
            .then(res => res.json())
            .catch(err => console.log(err));

        console.log(result);

        let imageNumber = Object.keys(result);
        // Array.splice => imageNumber 는 "image_path" 제외된 숫자로 된 Array
        const imagePath = result[imageNumber.splice(-1, 1)];

        await FileSystem.makeDirectoryAsync(
            FileSystem.documentDirectory + imagePath
        );

        let images = imageNumber.map(index => (
            FileSystem.downloadAsync(
                `http://121.138.83.4:80/images/${imagePath}/${index}`,
                FileSystem.documentDirectory + imagePath + `/${index}.png`
            )
        ));
        images = await Promise.all(images);

        const data = Object.keys(result)
                        .filter(key => (
                            key !== 'image_path'
                        ))
                        .map(key => ({
                            key: POSE_NAME[key],
                            feedback: result[key],
                            image: images[key].uri,
                        }));
        
        console.log(images);
        console.log('Feedback 페이지로 이동');

        navigation.navigate('Feedback', {
            data: data,
        })
    }

    return (
        <View style={{flex: 1, width: '100%', backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center' }}>
            <Button title='동영상을 선택해주세요' onPress={pickVideo} />
            <Video
                style={{ width: 300, height: 400, resizeMode: 'cover', backgroundColor: 'blue', alignSelf: 'center' }}
                source={{ uri: video }}
            />
            <Button title="분석 하기" onPress={sendVideo} />
        </View>
    )
}

export default PickVideoScreen;