import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    public alertController: AlertController,
    private usuarioService: UsuariosService,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    const usuarioLogado = await this.usuarioService.buscarUsuarioLogado();

    if(!usuarioLogado) {
      this.router.navigateByUrl('/login');
    }
  }

  async exibirAlertLogout() {
    const alert = await this.alertController.create({
      header: 'Confirmação!',
      message: 'Deseja realmente sair?!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Sim, desejo sair.',
          handler: () => {
           this.usuarioService.removerUsuarioLogado();
           this.router.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }

  
}
