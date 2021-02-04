import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'react-native-paper';
import styles from './styles';

class FlashButton extends PureComponent {
  render() {
    const { icon, onFlashPress, disabled } = this.props;

    if (disabled) return null;

    return (
      <IconButton
        style={[styles.toggleButton,
          icon === 'flashlight' ? styles.toggleButtonEnabled
            : styles.toggleButtonDisabled]}
        icon={icon}
        color="white"
        size={30}
        animated
        onPress={onFlashPress}
      />
    );
  }
}

FlashButton.propTypes = {
  icon: PropTypes.string.isRequired,
  onFlashPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default FlashButton;
