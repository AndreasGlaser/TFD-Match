import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import {SelectionModel} from '@angular/cdk/collections';
import {HttpClient} from '@angular/common/http';
import SmtpClient from 'emailjs-smtp-client';

export interface PeriodicElement {
  Bewerbungsnummer: string;
  Anrede: string;
  Accountname: string;
  'Stadt (Postanschrift)': string;
  'Bundesland (Postanschrift)': string;
  'Land (Postanschrift)': string;
  '1. Bundesland': string;
  '2. Bundesland': string;
  '3. Bundesland': string;
  Einsatzbereiche: string;
  Programmschwerpunkt: string;
}




@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [0.99], label: 'Grundschule Frankfurt' },
    { data: [0.75], label: 'Grundschule Hamburg' },
    { data: [0.60], label: 'Hauptschule München' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(private http: HttpClient) {
  }

  match() {

    this.sendEmail();
/*
    var newUrl = baseUrl + "&pageName=" + pageName;
    newUrl += "&$filter=Industries/Industry eq '" + filterValue + "'";


    var report = document.getElementById("iFrame")

    report.src = newUrl;*/

  }

  onChartClick(event) {
    console.log(event);
  }

  ngOnInit(): void {

  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.Bewerbungsnummer + 1}`;
  }


  sendEmail() {
/*
    const client = new SmtpClient('smtp.gmail.com');
    client.connect();

    client.useEnvelope({
      from: 'me@example.com',
      to: ['receiver1@example.com', 'receiver2@example.com']
    });

    client.send('Subject: test\r\n');
    client.send('\r\n');
    client.send('Message body');
    client.end();

    client.ondone = function(success){
      if(success){
        console.log('The message was transmitted successfully');
      }
    };*/

    /*const body = {
      key: 'ed38b9cb08c4aad763216f5a9ac94192-us20',
      message: {
        from_email: 'YOUR@EMAIL.HERE',
        to: [
          {
            email: 'andreasglaser7@gmail.com',
            name: '',
            type: 'to'
          }],
        autotext: 'true',
        subject: 'YOUR SUBJECT HERE!',
        html: 'YOUR EMAIL CONTENT HERE! YOU CAN USE HTML!'
      }
    };
    this.http.post('https://mandrillapp.com/api/1.0/messages/send.json', body);

    console.log("test");*/
  }

}
