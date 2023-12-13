import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserImageModel } from '../domain/user-image.model';
import { ImageSnippet } from '../domain/image-snippet.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  prefix: string;
  reloadFlag: BehaviorSubject<boolean>;
  reloadFlag$: Observable<boolean>;
  //baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.prefix = baseUrl + 'api/Image/';
    this.reloadFlag = new BehaviorSubject<boolean>(false);
    this.reloadFlag$ = this.reloadFlag.asObservable();
  }

  saveImage(imageSrc: ImageSnippet): Observable<boolean> {

    const formData = new FormData();

    formData.append('image', imageSrc.file);
    //let temp = 12;
    return this.http.post<boolean>(this.prefix + 'SaveImage', formData);
  }

  getImagesForUser(): Observable<UserImageModel[]> {
    let userId = 1; // get the user id from user service

    let searchParams: URLSearchParams = new URLSearchParams();
    searchParams.set('userId', userId.toString());
    return this.http.get<UserImageModel[]>(this.prefix + 'GetImagesForUser?' + searchParams);
  }

  //getImageUrl(filePath: string) {
    //return this.baseUrl + filePath;
  //}

  setReloadFlag(flag: boolean) {
    this.reloadFlag.next(flag);
  }
}
