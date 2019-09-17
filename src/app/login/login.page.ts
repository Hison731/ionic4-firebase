import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    useremail = '';
    password = '';

    constructor(public afAuth: AngularFireAuth) {
    }

    ngOnInit() {
    }

    async login() {
        const {useremail, password} = this;
        try {
            // TODO: Kind of a hack..
            const res = await this.afAuth.auth.signInWithEmailAndPassword(useremail, password);
            console.log(res);
        } catch (err) {
            console.dir(err);
            if (err.code === 'auth/user-not-found') {
                console.log('User not fount');
            }
        }
    }

    async googlelogin() {
        try {
            const res = this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            console.log(res);
        } catch (err) {
            console.dir(err);
            if (err.code === 'auth/user-not-found') {
                console.log('User not fount');
            }
        }
    }

    async githublogin() {
        try {
        } catch (err) {
            console.dir(err);
            if (err.code === 'auth/user-not-found') {
                console.log('User not fount');
            }
        }
    }
}
