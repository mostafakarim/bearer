# LibDemo

Run `npm install` to install dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Test Bearer 

To install the lib for Angular in any project : 
- Run `npm install ng-bearer --save`
- Import BearerModule in your module manager 
- Use `<ng-bearer [config]="BEARER_CONFIG"></ng-bearer>`in your template.
- Declare your BEARER_CONFIG somewhere : 
{
  BEARER_CLIENT_ID: string;
  INTEGRATION_NAME: string;
  INTEGRATION_SETUP_ID: string;
  REFERENCE_ID: string;
}
- Your bearer plugin is ready for Angular ! 