import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Stage } from 'src/app/interfaces/stage';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss']
})



export class AddCardComponent implements OnInit {
  listOfFields: string[] = [];
  listOfSelectedFields = ['ЮЗАО', 'ЮВАО','СЗАО'];
  listOfDistricts: string[] = [];
  listOfSelectedDistricts = ['Можайский', 'Кунцевский','Тропарево-Никулино'];
  listOfTypes: string[] = [];
  listOfSelectedTypes = ['Снос', 'Реставрация','Продажа'];
  listOfResponsibles: string[] = [];
  listOfSelectedResponsibles = ['Вася Пупкин', 'Иван Иванович','Петр Петрович'];
  listOfStatus: string[] = [];
  listOfSelectedStatus = ['Заморожен', 'В процессе','Отменен', 'В планах'];
  listOfStageStatus: string[] = [];
  listOfSelectedStageStatus = ['process', 'wait','finish', 'error'];
  space = 0;
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  curStep = 0
  selectedStage = 0;
  date = null;
  inputDesc?: string;

  stages: Stage[] = [
    {
      stage_id: 0,
      documents: [],
      photos: [],
      name: "Новый Этап",
      desc: "",
      limit_date: new Date(),
      current_date: new Date(),
      status: "error",
      responsibles: ""
    },
    {
      stage_id: 1,
      documents: [],
      photos: [],
      name: "Новый Этап",
      desc: "",
      limit_date: new Date(),
      current_date: new Date(),
      status: "process",
      responsibles: ""
    },
    {
      stage_id: 2,
      documents: [],
      photos: [],
      name: "Новый Этап",
      desc: "",
      limit_date: new Date(),
      current_date: new Date(),
      status: "wait",
      responsibles: ""
    },
    {
      stage_id: 3,
      documents: [],
      photos: [],
      name: "Новый Этап",
      desc: "",
      limit_date: new Date(),
      current_date: new Date(),
      status: "finish",
      responsibles: ""
    }
    
  ];

  constructor(private msg: NzMessageService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onStageChange(event: number): void {
    this.selectedStage = event;
  }

  addStage(selectedStage: number) {
    this.stages.splice(selectedStage + 1, 0, {
      "stage_id": selectedStage + 1,
      "documents": [],
      "photos": [],
      "name": "Новый Этап",
      "desc": "",
      "limit_date": new Date(),
      "current_date": new Date(),
      "status": "",
      "responsibles": ""
    });
  }

  deleteStage(index: number) {
    this.stages.splice(index, 1);
  }

  handlePreview = async (file: NzUploadFile): Promise<void> => {
    if (!file.url && !file['preview']) {
      file['preview'] = await getBase64(file.originFileObj!);
    }
    this.previewImage = file.url || file['preview'];
    this.previewVisible = true;
  };




  onIndexChange(event: number){
    this.curStep = event
  }

  ngOnInit(): void {
    const children1: string[] = [];
    const children2: string[] = [];
    const children3: string[] = [];
    const children4: string[] = [];
    const children5: string[] = [];
    const children6: string[] = [];
    for (let i = 0; i < this.listOfSelectedFields.length; i++) {
      children1.push(this.listOfSelectedFields[i]);
    }
    for (let i = 0; i < this.listOfSelectedDistricts.length; i++) {
      children2.push(this.listOfSelectedDistricts[i]);
    }
    for (let i = 0; i < this.listOfSelectedTypes.length; i++) {
      children3.push(this.listOfSelectedTypes[i]);
    }
    for (let i = 0; i < this.listOfSelectedResponsibles.length; i++) {
      children4.push(this.listOfSelectedResponsibles[i]);
    }
    for (let i = 0; i < this.listOfSelectedStatus.length; i++) {
      children5.push(this.listOfSelectedStatus[i]);
    }
    for (let i = 0; i < this.listOfSelectedStageStatus.length; i++) {
      children6.push(this.listOfSelectedStageStatus[i]);
    }
    this.listOfFields = children1;
    this.listOfDistricts = children2;
    this.listOfTypes = children3;
    this.listOfResponsibles = children4;
    this.listOfStatus = children5;
    this.listOfStageStatus = children6;
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}