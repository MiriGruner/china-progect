import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Donor } from 'src/app/models/Donor';
import { DonorService } from 'src/app/services/donor.service';

@Component({
  selector: 'app-list-donors',
  templateUrl: './list-donors.component.html',
  styleUrls: ['./list-donors.component.css']
})
export class ListDonorsComponent implements OnInit {

  donorDialog: boolean;

  donors: Donor[];

  donor: Donor=new Donor();

  selecteddonors: Donor[];
  submitted: boolean;


  constructor(private donorService: DonorService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.getAllDonors()

  ///שליפת מערך תורמים
  }
getAllDonors(){
  this.donorService.reloadDonors$.subscribe(x => {
  this.donorService.getDonors().subscribe(data => this.donors = data);
});
}

  openNew() {
      this.donor = new Donor();
      this.submitted = false;
      this.donorDialog = true;
  }

  deleteSelectedDonors() {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete the selected donors?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.donors = this.donors.filter(val => !this.selecteddonors.includes(val));
              this.selecteddonors = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Donors Deleted', life: 3000});
          }
      });
      this.getAllDonors()
  }

  editDonor(donor: Donor) {
      this.donor = {...donor};
      this.donorDialog = true;
  }

  deleteDonor(donor: Donor) {
      this.confirmationService.confirm({
          message: 'Are you sure you want to delete ' + donor.name + '?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.donorService.deleteDonor(donor.id).subscribe(()=>  this.getAllDonors())
              this.donor =new Donor();
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Donor Deleted', life: 3000});
             
          }
      });
        
  }

  hideDialog() {
      this.donorDialog = false;
      this.submitted = false;
  }
  
  savedonor() {
      this.submitted = true;

      if (this.donor.name.trim()) {
          if (this.donor.id) {
            this.donorService.saveDonor(this.donor).subscribe(()=>{
              res=>console.log(res,"res saved")
              this.getAllDonors()  })       
                  
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Donor Updated', life: 3000});
          }
          else {
              this.donorService.addDonor(this.donor).subscribe(()=>{
              res=>console.log(res,"res add")
              this.getAllDonors()  }) 
              
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Donor Created', life: 3000});
          }

          
          this.getAllDonors()
          this.donors = [...this.donors];
          this.donorDialog = false;
          this.donor = new Donor();
      }   
  }

  findIndexById(id: number): number {
      let index = -1;
      for (let i = 0; i < this.donors.length; i++) {
          if (this.donors[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

}
