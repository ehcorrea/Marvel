import '@testing-library/jest-native/extend-expect';
import '@testing-library/jest-native';
import 'jest-styled-components';

const reanimatedJestUtils = require('react-native-reanimated/lib/reanimated2/jestUtils');
reanimatedJestUtils.setUpTests();

jest.useFakeTimers()


