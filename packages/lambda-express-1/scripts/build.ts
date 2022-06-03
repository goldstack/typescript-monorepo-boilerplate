import { build } from 'esbuild';
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp';

build({
  plugins: [pnpPlugin()],
  bundle: true,
  entryPoints: ['src/lambda.ts'],
  external: ['aws-sdk', 'mock-aws-s3', 'testcontainers'], // mock-aws-s3 from s3 template, testcontainers from dynamodb template
  minify: true,
  format: 'cjs',
  platform: 'node',
  target: 'node16.0',
  sourcemap: true,
  outfile: 'distLambda/lambda.js',
}).catch((e) => {
  console.log('Build not successful', e.message);
  process.exit(1);
});
