import { MatFormFieldModule } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  editor = ClassicEditor;
  editorConfig = {};
  form = this.fb.group({
    text: ['']
  });

  constructor(
    private fb: FormBuilder
  ) { }

  public onReady(editor): void {
    editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
      return new MyUploadAdapter( loader );
    };
  }

  ngOnInit(): void {
  }
}

class MyUploadAdapter {
  xhr: XMLHttpRequest;
  loader: any;
  url: string;
  constructor( loader: any ) {
      // CKEditor 5's FileLoader instance.
      this.loader = loader;

      // URL where to send files.
      this.url = `${environment.dataserviceUrl}/api/image`;
  }

  // Starts the upload process.
  upload(): any {
    return this.loader.file
      .then( file => new Promise( ( resolve, reject ) => {
        this._initRequest();
        this._initListeners(resolve, reject, file);
        this._sendRequest(file);
      }));
  }

  // Aborts the upload process.
  abort(): void {
      if ( this.xhr ) {
          this.xhr.abort();
      }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest(): void {
      const xhr = this.xhr = new XMLHttpRequest();

      xhr.open( 'POST', this.url, true );
      xhr.responseType = 'json';
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners( resolve, reject, file ): void {
      const xhr = this.xhr;
      const loader = this.loader;
      const genericErrorText = `Couldn't upload file: ${ file.name }.`;

      xhr.addEventListener( 'error', () => reject( genericErrorText ) );
      xhr.addEventListener( 'abort', () => reject() );
      xhr.addEventListener( 'load', () => {
          const response = xhr.response;

          if ( !response || response.error ) {
              return reject( response && response.error ? response.error.message : genericErrorText );
          }

          // If the upload is successful, resolve the upload promise with an object containing
          // at least the "default" URL, pointing to the image on the server.
          resolve( response.url ? { default: response.url } : response.urls );
      } );

      if ( xhr.upload ) {
          xhr.upload.addEventListener( 'progress', evt => {
              if ( evt.lengthComputable ) {
                  loader.uploadTotal = evt.total;
                  loader.uploaded = evt.loaded;
              }
          } );
      }
  }

  // Prepares the data and sends the request.
  _sendRequest( file ): void {
    const data = new FormData();
    data.append('upload', file);
    this.xhr.send(data);
  }
}
