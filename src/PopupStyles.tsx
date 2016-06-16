import {StyleSheet} from 'react-native';
import assign from 'object-assign';

const textStyle = {
  color: '#0ae',
  fontSize: 18,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  headerItem: {
    flex: 1,
  },
  actionText: textStyle,
  title: assign({}, textStyle, {
    color: '#666',
  }),
});

export default styles;
