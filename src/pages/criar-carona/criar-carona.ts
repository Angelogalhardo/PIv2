import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-criar-carona',
  templateUrl: 'criar-carona.html',
})
export class CriarCaronaPage {
  carona: any = {
   idCarona: 0,
   localDeSaida: '',
   LocalDeChegada: '',
   email: '',
   senha: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public http : Http) {}
  home(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarCaronaPage');
  }

  cadastrarCarona (){
   var caronas = JSON.stringify(this.carona);
   var headers = new Headers();
   headers.append('Accept', 'application/json');
   headers.append('Content-Type', 'application/json' );
   let options = new RequestOptions({ headers: headers });


     this.http.post("https://carona-hfernan.c9users.io/carona", caronas, options).subscribe(data =>{
     let alert = this.alertCtrl.create({
       title: 'Carona cadastrada com sucesso !',
       buttons: ["OK"]
     });
     alert.present();
     }, error =>{
     let alert = this.alertCtrl.create({
       title: 'Não foi possivel criar sua carona !',
       buttons: ["OK"]
     });
     alert.present();
     });
  }

}
