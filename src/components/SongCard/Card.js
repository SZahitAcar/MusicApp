import React from 'react';
import {View, Text, Image} from 'react-native';
import style from './SongCard.styles';

const Card = props => {
  return (
    <View style={style.container}>
      <View>
        <Image style={style.image} source={{uri: props.song.imageUrl}} />
      </View>
      <View style={style.inner_container}>
        <View>
          <Text style={style.title}>{props.song.title}</Text>
        </View>
        <View style={style.content_container}>
          <View style={style.info_container}>
            <Text>{props.song.artist}</Text>
            <Text style={style.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={style.soldout_container}>
              <Text style={style.soldout_title}> Tukendi </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;
