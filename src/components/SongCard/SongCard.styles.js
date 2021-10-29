import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    margin: 10,
    height: 84,
    width: 84,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'red',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
  },
  content_container: {
    flexDirection: 'row',
  },
});
