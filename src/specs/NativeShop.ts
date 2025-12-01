import type {TurboModule} from 'react-native';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getItem(key: string): string | null;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeShop',
);