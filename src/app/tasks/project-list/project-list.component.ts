import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WizardComponent } from 'angular-archwizard';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
projectListData = {
  location: '',
}
  editable = true;
  eventDetail = {
    "date": "",
    "title": "",
    "description": "",
    "location": "",
    "time_start": "",
    "time_end": "",
    "status": null,
  }
  eventSandbox;
  currentTab = true;
  @ViewChild(WizardComponent)
  public wizard: WizardComponent;
  wizardStep = 0;
  spinnerLoading = false;
  eventListData
  page = 0;
  pageSize = 10;
  pageSizes = [10, 20, 30];
  count = 500;

  config
  constructor(private httpClient: HttpClient,  public generalService: GeneralService, private router: Router,private _location: Location) { }

  ngOnInit(): void {
    this.gData();
  }
  seeDetail(obj) {
    this.editable = true;
    this.eventDetail = { ...obj }
  }
  editEvent() {
    this.editable = false;
    this.eventSandbox = { ...this.eventDetail }
  }
  cancelEditEvent() {
    this.editable = true;
    this.eventDetail = { ...this.eventSandbox }
  }
  changeTabs(tab) {
    this.currentTab = tab;
    this.page = 0;
    this.count = 0;
    this.pageSize = 10;
    this.gData();
  }
  async gData() {
    this.spinnerLoading = true;
    this.httpClient.get('https://62fde3c541165d66bfb3a622.mockapi.io/api/projectlist').subscribe(i => {
      this.eventListData = i;
      this.config = {
        id: 'paging',
        itemsPerPage: this.pageSize,
        currentPage: this.page,
        totalItems: this.eventListData.length
      }
      this.spinnerLoading = false;
    })
  }
  handlePageChange(event): void {
    this.page = event;
    this.gData();
  }

  handlePageSizeChange(event): void {
    this.pageSize = event.target.value;
    this.page = 0;
    this.gData();
  }
  goBack() {
    this._location.back();
  }

}
