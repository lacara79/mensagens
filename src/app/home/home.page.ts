import { Component } from '@angular/core';
import { AlertController, LoadingController , ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alert: AlertController, private loading: LoadingController ,private toast: ToastController) {}


  async mensagemAlert(){
        const alert = await this.alert.create({
          message: "Você clicou em Alert.",
          buttons: ['ok']
        }) 
    
        await alert.present();
  }

  async mensagemLoading(){
    const load = await this.loading.create({
      message: 'Carregando...',
      duration: 3000,
      spinner: 'circles'
    });
    
    load.present();
  }

  async mensagemToast(){
    const toast = await this.toast.create({
      message: 'Sem Conexão',
      duration: 3000,
      icon: 'wifi',
    });
    
    await toast.present();
  }

}
