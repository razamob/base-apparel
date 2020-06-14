import '../styles/styles.css';
import EmailValid from './modules/EmailValid';

let emailValid = new EmailValid();

if(module.hot){
    module.hot.accept()
}