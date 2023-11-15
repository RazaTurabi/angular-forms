import { Component } from '@angular/core';
import { UserModel } from '../user';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent {

  userModel = new UserModel()

  collect_user_data() {
    console.log(this.userModel);
    
  }

}
