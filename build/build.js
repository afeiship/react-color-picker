import baseConfig from '.';
import merge from 'webpack-merge';
import {
  configs,
  inputs,
  outputs,
  loaders,
  plugins,
  externals
} from '@feizheng/webpack-lib-kits';

export default merge(baseConfig, {
  entry: inputs.build(),
  output: outputs.build({
    library: 'ReactColorPicker'
  }),
  externals: externals.base({
    '@feizheng/noop': '@feizheng/noop',
    'react-color': 'react-color'
  }),
  plugins: [plugins.clean(), plugins.copyStyles()]
});
