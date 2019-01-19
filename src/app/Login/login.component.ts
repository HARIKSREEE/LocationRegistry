import { Component } from '@angular/core';
import { UserDetails } from '../userDetails';

@Component({
    // selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {

    title: string = 'Login';
    userDetails: UserDetails = {
        email: 'hari@test.com',
        password: '12345'
    }

    userEmail: string;
    userPassword: string;
    isValid: boolean = false;
    message: string;

    submitDetails(): void {

        if (this.userEmail == this.userDetails.email && this.userPassword == this.userDetails.password) {
            this.isValid = true;
            this.message = 'Login Success';
        }
        else {
            this.message = 'Login Failed';
        }

    }


}