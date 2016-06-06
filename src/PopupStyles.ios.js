import { StyleSheet } from 'react-native';

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
  okText: {
    color: '#0ae',
    fontSize: 18,
    textAlign: 'center',
  },
  dismissText: {
    color: '#0ae',
    fontSize: 18,
  },
  title: {
    color: '#666',
    fontSize: 18,
  },
});

export default styles;
