import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { SQLiteConnection, CapacitorSQLite, SQLiteDBConnection, JsonSQLite } from '@capacitor-community/sqlite';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const DB_USERS_N = 'myuserdb';

export interface User {
  id: number,
  name: string,
  active: number
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
private sqliteX : SQLiteConnection = new SQLiteConnection(CapacitorSQLite);

private db : SQLiteDBConnection;
public dbReady : BehaviorSubject<boolean>;
public dbName: string = '';

//private user : signal<User[]>([])

  constructor(private http:HttpClient) { }

  async sqlInit(){
    const sqlite = CapacitorSQLite as any;
    try {
      await sqlite.requestPermissions();
    } catch (error) {
      console.error(error);
    }

    this.setupDatabase();
    
  }

   async setupDatabase(){
    const dbSetup = await Preferences.get({key:'first_setup_key'});
    if (!dbSetup.value) {
      
    }else{
      this.downloadDatabase();
    }
  }
  downloadDatabase() {
    throw new Error('Method not implemented.');
    this.http.get('assets/db/db.json').subscribe(
      async (jsonExport:any) => {
        const jsonString = JSON.stringify(jsonExport);
        this.dbName = jsonExport.database;
        await CapacitorSQLite.createSyncTable({database: this.dbName});
        /*
        
        CapacitorSQLite.importFromJson({ jsonString })
        const isValid =  await CapacitorSQLite.isJsonValid({
          //jsonString
        });
        */
      }
    )
  }
}
