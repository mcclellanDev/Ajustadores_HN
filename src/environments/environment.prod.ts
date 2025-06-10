
export const environment = {
  production: false,
  api_url: "https://portal.porsalud.net/Outer/WSRestApiHelp/api",
  message: "PRO"
};

export const helpFilesUrl = {
  production : true,
  api_url: "https://portal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive"
}

export const environment_local = {
  production: false,
  api_url: 'https://localhost:44352/api'  //this is a test to JWT 
}
/*
export const environment = {
  production: true,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT 
};

export const environment_production = {
  production: false,
  api_url: 'https://portal.porsalud.net/Outer/WSRestApiHelp/api'  //this production

};

*/
