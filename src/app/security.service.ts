import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private secretKey: string = 'QQ11bb-22-CC33'; 

  encryptData(data: string | undefined): string {
    try {
      if(data != undefined){
      return CryptoJS.AES.encrypt(data, this.secretKey).toString();
      }else{
        return '';
      }
    } catch (error) {
      console.error('Encryption Error:', error);
      return '';
    }
  }

  
  decryptData(encryptedData: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(encryptedData, this.secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('Decryption Error:', error);
      return '';
    }
  }
}
