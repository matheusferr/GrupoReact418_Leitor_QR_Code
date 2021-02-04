import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { BarcodeMask } from '@nartc/react-native-barcode-mask';
import styles from './styles';

class Camera extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cameraWidth: 0,
      cameraHeight: 0,
    };
  }

  onCameraViewLayout = ({ nativeEvent: { layout: { width, height } } }) => {
    this.setState({
      cameraWidth: width,
      cameraHeight: height,
    });
  }

  render() {
    const { cameraWidth, cameraHeight } = this.state;
    const {
      isCameraVisible, onBarCodeRead, flashEnabled, canRead,
    } = this.props;
    if (!isCameraVisible) return (<View style={styles.container} />);

    return (
      <RNCamera
        style={styles.camera}
        onLayout={this.onCameraViewLayout}
        type={RNCamera.Constants.Type.back}
        flashMode={flashEnabled ? RNCamera.Constants.FlashMode.torch
          : RNCamera.Constants.FlashMode.off}
        barCodeTypes={canRead ? [RNCamera.Constants.BarCodeType.qr] : []}
        onBarCodeRead={onBarCodeRead}
        cameraViewDimensions={{
          width: cameraWidth,
          height: cameraHeight,
        }}
        captureAudio={false}
        rectOfInterest={{
          x: 0.25,
          y: 0.25,
          width: 0.5,
          height: 0.5,
        }}
      >
        <BarcodeMask
          edgeRadius={15}
          edgeBorderWidth={5}
          edgeColor="#379936"
          maskOpacity={0}
          animatedLineColor="red"
          animatedLineThickness={3.5}
        />
      </RNCamera>
    );
  }
}

Camera.propTypes = {
  onBarCodeRead: PropTypes.func.isRequired,
  isCameraVisible: PropTypes.bool.isRequired,
  flashEnabled: PropTypes.bool.isRequired,
  canRead: PropTypes.bool.isRequired,
};

export default Camera;
