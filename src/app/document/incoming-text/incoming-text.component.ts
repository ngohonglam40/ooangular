import { Component, OnInit } from '@angular/core';
import data from './incoming-text.language'
import { Router } from '@angular/router';;

@Component({
  selector: 'app-incoming-text',
  templateUrl: './incoming-text.component.html',
  styleUrls: ['./incoming-text.component.css']
})
export class IncomingTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.taoDuLieu()
    this.tinhNam()

  }
  editable = true;
  incomingtextsData = []
  incomingnamMoi = []
  incomingtextDuLieu=['Giám đốc','Trưởng phòng','Nhân viên CNTT']
  documentSandbox;
  currentTab = true;

  spinnerLoading = false;

  page = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];
  count = 500;

  config

  taoDuLieu(){
    for (let i = 0; i < this.count; i++) {
      let GiaTriMoi = {
      'numerical_order':i+1,
      'text_number': 'Số VB',
      'abstract': 'Trích yếu',
      'recipients': 'Nơi nhận',
      'release_date': 'Ngày phát hành',
      'drafting_place': 'Nơi soạn thảo',
      
      }
      this.incomingtextsData.push(GiaTriMoi)
    };
    this.config = {
      id: 'paging',
      itemsPerPage: this.pageSize,
      currentPage: this.page,
      totalItems: this.incomingtextsData.length
    }
}
  tinhNam(){
    for ( let i=0; i<=20; i++){
      this.incomingnamMoi.push(2022-i)
    }

  }

   
  
handlePageChange(event): void {
  this.page = event;
  this.taoDuLieu();
}
handlePageSizeChange(event): void {
  this.pageSize = event.target.value;
  this.page = 0;
  this.taoDuLieu();
}

}
