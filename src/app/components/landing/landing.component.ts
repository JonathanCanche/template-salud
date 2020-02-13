import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import{WebData} from 'src/app/interface'

import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data:WebData;
  show = false;
  
  private itemDoc: AngularFirestoreDocument<WebData>;
  item: Observable<any>;

  @ViewChild('buttonmenu') buttonmenu: ElementRef;
  @ViewChild('home_li') homeLi: ElementRef;
  @ViewChild('servicios_li') serviciosLi: ElementRef;
  @ViewChild('about_li') aboutLi: ElementRef;
  @ViewChild('contact_li') contactLi: ElementRef;

  constructor(private afs: AngularFirestore,private router: Router, private routes: ActivatedRoute) { 
    this.itemDoc=afs.doc<WebData>('webs/pruebasalud');
    this.item=this.itemDoc.valueChanges();
    
    //this.cargardatos(this.data);
  }

  cargardatos(item:WebData){
    this.itemDoc.set(item);
  }
  ngOnInit() {
    this.routes.paramMap.subscribe(params => {
      const id = params.get('id');
      this.itemDoc = this.afs.doc<any>(`webs/${id}`);
      this.item = this.itemDoc.valueChanges();
      this.item.subscribe((data) => {
        // console.log('data', data);
        if (data === undefined || data.tipo != 5) {
          this.router.navigateByUrl('/404');
        } else {
         this.data = data;
        this.show = true;
        }
      });
    });
  }

  scrollToElement($element, activeElement: string, preventClick?: boolean): void {
    if (preventClick) {
      this.buttonmenu.nativeElement.click();
    }
    $element.scrollIntoView({behavior: 'smooth', block: 'start'});
    this.activesToogle(activeElement);
  }

  activesToogle( el: string) {
    switch (el) {
      case 'home':
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        break;
      case 'servicios':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.add('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        break;
      case 'about':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.add('active');
        this.contactLi.nativeElement.classList.remove('active');
        break;
      case 'contact':
        this.homeLi.nativeElement.classList.remove('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.add('active');
        break;
      default:
        this.homeLi.nativeElement.classList.add('active');
        this.serviciosLi.nativeElement.classList.remove('active');
        this.aboutLi.nativeElement.classList.remove('active');
        this.contactLi.nativeElement.classList.remove('active');
        break;
    }
  }
}
