import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    username = '';
    password = '';
    cpassword = '';

    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    async register() {
        const {username, password, cpassword} = this;
        if (password !== cpassword) {
            return console.error('Passwords don\'t match');
        }
        try {
            const res = await this.afAuth.auth.createUserWithEmailAndPassword(username + '@gmail.com', password);
            console.log(res);
        } catch (err) {
            console.dir(err);
        }


    }

}
