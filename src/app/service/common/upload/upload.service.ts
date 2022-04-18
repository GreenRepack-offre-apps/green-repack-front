import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AdminProfils, UserProfils } from '../../../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  //uploadTask: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  imagesProductToStorage(profil: UserProfils | AdminProfils, idProduit:string, files: File[]) {
    const basePath = `/upload/${profil.type.toLowerCase()}/${idProduit}/images`;
    let results:any = [];
    for(let i = 0; i < files.length; i++) {
      const name = `/image_${i}`;
      const filePath = `${basePath}/${name}`;
      //const storageRef = this.storage.ref(filePath);
      const uploadTask = this.storage.upload(filePath, files[i]);

      // uploadTask.snapshotChanges().subscribe(obs => {
      //   //do sommething
      // });

      /**
       * get url of uploaded /or file
       */
      // uploadTask.then(obs => {
      //   obs?.ref.getDownloadURL()
      //   .then(data => {
      //     console.log('File metadata searched: ' + JSON.stringify(data));
      //     product.urls_image?.push(data);
      //   })
      //   .catch(err => console.log(`error : fichier ${idProduit}/${name} not found : ${err}`));
      // })
      // .catch(err => console.log(' Error during upload: '+err));


    }
    /**
     * Add in produit to database
     */
    //this.database.list(profil.type.toLowerCase()+'/products').push(product);
  }
}

