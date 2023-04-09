import { Component, OnInit } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { Stage } from 'src/app/interfaces/stage';
import { ObjectInfo } from 'src/app/interfaces/object-info';

const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.scss'],
})
export class AddCardComponent implements OnInit {
  listOfFields: string[] = ['ЮЗАО', 'ЮВАО', 'СЗАО'];
  listOfSelectedFields = [];
  listOfDistricts: string[] = ['Можайский', 'Кунцевский', 'Тропарево-Никулино'];
  listOfSelectedDistricts = [];
  listOfTypes: string[] = ['Снос', 'Реставрация', 'Продажа'];
  listOfSelectedTypes = [];
  listOfResponsibles: string[] = [
    'Вася Пупкин',
    'Иван Иванович',
    'Петр Петрович',
  ];
  listOfSelectedResponsibles = [];
  listOfSelectedStageResponsibles:string[][] = [];
  listOfStatus: string[] = ['process', 'wait', 'finish', 'error'];
  listOfSelectedStatus: string[] = [];
  listOfStageStatus: string[] = ['process', 'wait', 'finish', 'error'];
  listOfSelectedStageStatus:string[][] = [];
  space = 0;
  fileList: NzUploadFile[] = [];
  previewImage: string | undefined = '';
  previewVisible = false;
  curStep = 0;
  selectedStage = 0;
  date = null;
  inputDesc?: string;

  cardInput: ObjectInfo = {
    _id: '',
    name: '',
    desc: '',
    status: 'process',
    stages: [],
    firstdate: new Date(),
    lastdate: new Date(),
    field: '',
    district: '',
    address: '',
    pictures: [],
    type: '',
    owner: {
      _id: '',
      name: '',
      picture: '',
    },
    fact_us: [],
    documents: [],
    area: 0,
  };

  stages: Stage[] = [
    {
      stage_id: 0,
      documents: [],
      photos: [],
      name: '',
      desc: '',
      limit_date: new Date(),
      current_date: new Date(),
      status: 'error',
      responsibles: '',
    },
    {
      stage_id: 1,
      documents: [],
      photos: [],
      name: '',
      desc: '',
      limit_date: new Date(),
      current_date: new Date(),
      status: 'process',
      responsibles: '',
    },
  ];

  constructor(private msg: NzMessageService) {}

  onChange(result: Date): void {
    console.log('onChange: ', result);
    this.stages[this.selectedStage].limit_date = result;
  }

  onStageChange(event: number): void {
    this.selectedStage = event;
  }

  addStage(selectedStage: number) {
    this.stages.splice(selectedStage + 1, 0, {
      stage_id: selectedStage + 1,
      documents: [],
      photos: [],
      name: 'Новый Этап',
      desc: '',
      limit_date: new Date(),
      current_date: new Date(),
      status: '',
      responsibles: '',
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

  onIndexChange(event: number) {
    this.curStep = event;
  }

  ngOnInit(): void {}

  submitForm(): void {
    this.cardInput.field = this.listOfSelectedFields[0];
    this.cardInput.district = this.listOfSelectedDistricts[0];
    this.cardInput.type = this.listOfSelectedTypes[0];
    // this.cardInput.owner.name = this.listOfSelectedResponsibles[0];
    this.cardInput.status = this.listOfSelectedStatus[0];
    this.cardInput.stages = this.stages.map((item, index) => {
      return {
        ...item,
        responsibles: this.listOfSelectedStageResponsibles[index] == undefined ? "" : this.listOfSelectedStageResponsibles[index][0],
        status: this.listOfSelectedStageStatus[index] == undefined ? "" : this.listOfSelectedStageStatus[index][0],
      }
    });
    this.cardInput.area = this.space;
    this.cardInput.fact_us = this.listOfSelectedResponsibles.map((item) => {
      return { _id: '', name: item, picture: '' };
    });

    console.log(this.selectedStage);

    console.log(this.cardInput);
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
