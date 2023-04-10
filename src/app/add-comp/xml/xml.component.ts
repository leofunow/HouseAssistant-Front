import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { Observable } from 'rxjs';
import { UserHttpService } from 'src/app/services/user-http.service';

@Component({
  selector: 'app-xml',
  templateUrl: './xml.component.html',
  styleUrls: ['./xml.component.scss']
})
export class XmlComponent {
  fileList: NzUploadFile[] = [];
  fileList2: NzUploadFile[] = [];
  data: NzUploadFile | undefined;

  constructor(private userHttp: UserHttpService, private msg: NzMessageService, private router: Router) { }

  nullUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
    this.fileList = [file]
    return false;
  };

  filesUpload = (file: NzUploadFile, fileList: NzUploadFile[]): boolean => {
    this.fileList2 = this.fileList2.concat(fileList);
    return false;
  }

  submit() {
    var formData = new FormData();
    this.fileList.forEach((file: any) => {
      formData.append('xml', file);
    })
    this.fileList2.forEach((file: any) => {
      formData.append('file', file);
    })
    this.userHttp.sendXml(formData).then((res: any) => {
      this.msg.success('Результат успешно обновлен');
      this.router.navigate(['/profile'], { queryParams: { menu: "meetings" } });
    })
  }

}
