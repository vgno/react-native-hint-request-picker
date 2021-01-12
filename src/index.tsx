import { NativeModules } from 'react-native';

type HintRequestPickerType = {
  multiply(a: number, b: number): Promise<number>;
};

const { HintRequestPicker } = NativeModules;

export default HintRequestPicker as HintRequestPickerType;
