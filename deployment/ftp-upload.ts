const FTP_CONFIG = require('./deployment-config.json');

const FtpDeploy = require('ftp-deploy');
const ftpDeploy = new FtpDeploy();

const config = {
  user: FTP_CONFIG.user,
  // Password optional, prompted if none given
  password: FTP_CONFIG.password,
  host: FTP_CONFIG.host,
  port: 21,
  localRoot: __dirname + `/../${FTP_CONFIG.localPath}`,
  remoteRoot: FTP_CONFIG.remotePath,
  include: ['*', '**/*'], // this would upload everything except dot files
  //   include: ['*.php', 'dist/*', '.*'],
  // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
  exclude: ['dist/**/*.map', 'node_modules/**', 'node_modules/**/.*', '.git/**'],
  // delete ALL existing files at destination before uploading, if true
  deleteRemote: true,
  // Passive mode is forced (EPSV command is not sent)
  forcePasv: true,
  // use sftp or ftp
  sftp: FTP_CONFIG.host.toLowerCase().includes('sftp'),
};

ftpDeploy
  .deploy(config)
  .then((res: any) => console.log('Deployment finished'))
  .catch((err: any) => console.log(err));
