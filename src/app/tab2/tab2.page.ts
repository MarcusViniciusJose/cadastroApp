import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../services/usuarios.service';
import { AlertController } from '@ionic/angular';
import { ComparacaoValidator } from '../validators/comparacao-validators';
import { Usuario } from '../models/Usuario';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  public formRegistro: FormGroup;

  public mensagens_validacao = {
    nome: [
      {tipo: 'required', mensagem: 'O campo nome é obrigatório!' },
      {tipo: 'minlength', mensagem: 'O nome deve ter pelo menos 3 caracteres!'  }
    ],
    dataNascimento: [
      {tipo: 'required', mensagem: 'O campo data de nascimento é obrigatório!' }
    ],

    genero: [
      {tipo: 'required', mensagem: 'O campo gênero é obrigatório!' }
    ],

    celular: [
      {tipo: 'required', mensagem: 'O campo celular é obrigatório!' },
      {tipo: 'maxlength', mensagem: 'O celular deve ter no máximo 16 números!'  }
    ],

    email: [
      {tipo: 'required', mensagem: 'O campo e-mail é obrigatório!' },
      {tipo: 'email', mensagem: 'E-mail inválido!' }
    ],

    senha: [
      {tipo: 'required', mensagem: 'O campo senha é obrigatório!' },
      {tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres!' }
    ],

    confirmarsenha: [
      {tipo: 'required', mensagem: 'Confirme a senha' },
      {tipo: 'minlength', mensagem: 'A senha deve ter pelo menos 6 caracteres!' },
      {tipo: 'comparacao', mensagem: 'As senhas não conferem!' }
    ]
  };


  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private usuariosService: UsuariosService,
    public alertController: AlertController) {

    this.formRegistro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      dataNascimento: ['', Validators.compose([Validators.required])],
      //genero: ['', Validators.compose([Validators.required])],
      celular: ['', Validators.compose([Validators.required, Validators.maxLength(16)])],
      email: ['', Validators.compose([Validators.required])],
      senha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmarsenha: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    }, {
      validator: ComparacaoValidator('senha', 'confirmarsenha')
    });
   }


  async ngOnInit() {
    await this.usuariosService.buscarTodos();
    console.log(this.usuariosService.listaUsuarios);
  }

  public registro() {
    if(this.formRegistro.valid) {
      console.log('Formulário válido!');
    } else {
      console.log('Formulário inválido!');
    }
  }

  public async salvarFormulario() {
    if(this.formRegistro.valid) {

      let usuario = new Usuario();
      usuario.nome = this.formRegistro.value.nome;
      usuario.dataNascimento = new Date(this.formRegistro.value.dataNascimento);
      //usuario.genero = this.formRegistro.value.genero;
      usuario.celular = this.formRegistro.value.celular;
      usuario.email = this.formRegistro.value.email;
      usuario.senha = this.formRegistro.value.senha;

      if(await this.usuariosService.salvar(usuario)) {
        this.exibirAlerta('SUCESSO!', 'Usuário salvo com sucesso!');
        this.router.navigateByUrl('/login');
      } else {
        this.exibirAlerta('ERRO!', 'Erro ao salvar usuário!');
      }

    } else {
      this.exibirAlerta('ADVERTENCIA!', 'Formulário inválido<br/>Verifique os campos do seu formulário!');
    }
  }

  async exibirAlerta(titulo: string, mensagem: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();
  }

}

