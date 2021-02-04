import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import {
  Button, Paragraph, Dialog, Portal,
} from 'react-native-paper';
import styles from './styles';

class Modal extends PureComponent {
  render() {
    const { code, onCopy, onOpen } = this.props;
    return (
      <Portal>
        {
          code ? (
            <Dialog {...this.props}>
              <Dialog.Title>Resultado</Dialog.Title>
              <Dialog.ScrollArea>
                <ScrollView style={styles.scrollView}>
                  <Paragraph>{code}</Paragraph>
                </ScrollView>
              </Dialog.ScrollArea>
              <Dialog.Actions>
                <Button onPress={onOpen}>Abrir</Button>
                <Button onPress={onCopy}>Copiar</Button>
              </Dialog.Actions>
            </Dialog>
          ) : null
        }
      </Portal>
    );
  }
}

Modal.propTypes = {
  code: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
};

export default Modal;
