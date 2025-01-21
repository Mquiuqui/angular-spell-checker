const fs = require('fs');
const dotenv = require('dotenv');

// Carrega o arquivo .env
dotenv.config();

const envFiles = [
  './src/environments/environment.ts',
  './src/environments/environment.prod.ts'
];

// Configuração do ambiente
const envConfig = `
export const environment = {
  production: ${process.env.PRODUCTION || false},
  openAiApiKey: '${process.env.API_KEY}',
  otherSecret: '${process.env.OTHER_SECRET}'
};
`;

// Gera os arquivos de ambiente
envFiles.forEach((filePath) => {
  fs.writeFileSync(filePath, envConfig, { encoding: 'utf8' });
  console.log(`Environment file generated at ${filePath}`);
});
