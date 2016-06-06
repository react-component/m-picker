import { StyleSheet } from 'react-native';

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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerItem: {
    flex: 1,
  },
  actionText: textStyle,
  title: {
    ...textStyle,
    color: '#666',
  },
});

export default styles;
