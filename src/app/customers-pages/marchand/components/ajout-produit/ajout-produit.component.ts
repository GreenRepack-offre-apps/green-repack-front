import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProduitMarchandService } from '../../../../service/produit/produit-marchand.service';
import { AuthService } from 'src/app/service/auth.service';
import { MarchandProfils } from 'src/app/model/auth.model';
import { UploadService } from '../../../../service/common/upload.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {

  constructor(private fbuilder: FormBuilder,
    private produitService: ProduitMarchandService,
    private authService: AuthService,
    private uploadService: UploadService,
    private readonly router: Router) { }

  produitForm = this.fbuilder.group({
    categorie: ['', Validators.required],
    marque: ['', Validators.required],
    model: ['', Validators.required],
    carac_tech: ['', [Validators.required, Validators.maxLength(300)]],
    carac_esth: ['', [Validators.required, Validators.maxLength(300)]]
  });

  formValid = () => this.produitForm.valid
  && this.images.length <= 6 && this.images.length > 0;

  images: File[] = [];

  ngOnInit(): void {
    this.produitForm.valueChanges.subscribe(vals => {

    });
  }

  onUploadSelected(files:File[]) {
    for(var f of files) {
      console.log('f :'+ f);
      this.images.push(f);
    }

    console.log('files nb: '+ this.images.length);
    console.log("validity = "+ this.formValid);
    //console.log('files :' + JSON.stringify(event) + '' + typeof event);
  }

  onUploadRemove(file: File) {
    this.images = this.images.filter(img => img !== file);
    console.log('files nb: '+ this.images.length);
    console.log("validity = "+ this.formValid);
  }

  onClearAll(){
    this.images = [];
    console.log('files nb: '+ this.images.length);
    console.log("validity = "+ this.formValid());
  }

  onSubmit() {
    const {categorie, marque, model, carac_tech, carac_esth} = this.produitForm.value;

    this.authService.currentUser(new MarchandProfils()).subscribe(r => {
      if(!this.authService.isFetch) {
        this.router.navigateByUrl('connexion');
      } else {
        console.log('produits :' + JSON.stringify(this.produitForm.value) + ' user-email: ' +r.email);
        this.produitService.addProduit({user_email: r.email, marque: marque, model: model, categorie: categorie, info_tech: carac_tech, info_esth: carac_esth})
        .subscribe(res => {
          const idProduit = res.id;
          if(res.status === 'SUCCES' && idProduit && r.email !== null) {
            this.uploadService.imagesProductToStorage(new MarchandProfils(), idProduit, this.images);
          }
        });
      }
    });
  }

}
