import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-showdata',
  templateUrl: './showdata.component.html',
  styleUrls: ['./showdata.component.scss']
})
export class ShowdataComponent implements OnInit {

  storedData: any[] = []; 

    constructor(private router: Router) {}

  ngOnInit(): void {
    
    const storedData = localStorage.getItem('formData');

    if (storedData) {
      this.storedData = JSON.parse(storedData);
    } else {
      console.log('No data ');
    }
  }

    editData(index: number): void {
    const selectedData = this.storedData[index];
    this.router.navigate(['/manage'], { state: { dataToEdit: selectedData, indexToEdit: index } });
  } 

  deleteData(index: number): void {
    this.storedData.splice(index, 1);
    localStorage.setItem('formData', JSON.stringify(this.storedData));
    this.ngOnInit(); 
  }

    create() {
    this.router.navigate(['/manage']);
  }

}
