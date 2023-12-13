import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donor } from '../models/Donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  constructor(private httpClient: HttpClient) { }
  private reloadDonorsSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  reloadDonors$: Observable<boolean> = this.reloadDonorsSubject.asObservable();

  getDonors(): Observable<Donor[]>{
    let url = 'https://localhost:7136/api/Donor';
    return this.httpClient.get<Donor[]>(url);
  }

  getDonorById(id: number) : Observable<Donor>{
    let url = 'https://localhost:7136/api/Donor' + id;
    return this.httpClient.get<Donor>(url);
  }

  saveDonor(donor: Donor) :Observable<boolean>{
    let url = 'https://localhost:7136/api/Donor';
    return this.httpClient.put<boolean>(url, donor);
  }

  addDonor(donor: Donor) :Observable<number> {
    let url = 'https://localhost:7136/api/Donor';
    return this.httpClient.post<number>(url, donor)
  }

  deleteDonor(id: number) :Observable<boolean> {
    let url = 'https://localhost:7136/api/Donor/' + id;
    return this.httpClient.delete<boolean>(url)
  }

  setReloadDonor(){
    let flag = this.reloadDonorsSubject.value;
    this.reloadDonorsSubject.next(!flag);
  }
}