import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoader = buildCssLoader(isDev);

  const svgLoader = buildSvgLoader();

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const fontsLoader = {
    test: /\.(woff|woff2|ttf|otf|eot)$/,
    type: 'asset/resource',
    generator: {
      filename: 'assets/fonts/[name][ext]'
    }
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  return [fileLoader, fontsLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
};

export default buildLoaders;
