// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: "https://portal.porsalud.net/Outer/WSRestApiHelp/api",
  message: "PRU"
  
};

export const helpFilesUrlTest = {
  production : false,
  api_url: "https://portal.porsalud.net/Applications/HELP/help_CargaDeArchivos/UploadArchive"
}

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
  production: false,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT 
};

export const environment_test = {
  production: false,
  api_url: 'https://testportal.porsalud.net/Outer/WSRestApiHelp/api'  //this is a test to JWT 
};

export const environment_local = {
  production: false,
  api_url: 'https://localhost:44352/api'  //this is a test to JWT 
}

export const environment_local_files = {
  production: false,
  api_url: 'https://localhost:44352'  //this is a test to JWT 
}

export const environment_local_videos = {
  production: false,
  api_url: 'http://localhost:18951/help_CargaDeArchivos/UploadArchive'  //this is a test to JWT 
}






 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
