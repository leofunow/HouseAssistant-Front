import { Component } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})
export class XmlComponent {
  fileList: NzUploadFile[] = [];
  data: NzUploadFile | undefined;

  nullUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
    this.fileList = [file]
    return false;
  };

  myUpload = (file: NzUploadFile) => {
    return "success"
  }

}
