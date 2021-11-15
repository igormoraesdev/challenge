import path from 'path';

export default {
  process(_src: string, filename: string) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
