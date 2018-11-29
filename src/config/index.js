import devConfig from './development';
import prodConfig from './production';

var config;

if (process.env.NODE_ENV === 'development') {
    config = devConfig;
} else {
    config = prodConfig;
}

export default config;