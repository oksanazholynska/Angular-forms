import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-reacrive',
  templateUrl: './reacrive.component.html',
  styleUrls: ['./reacrive.component.scss'],
})
export class ReacriveComponent {
  public person: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]),
    password: new FormControl(null, [Validators.required, this.passwordValidator()]),
    emails: new FormArray([])
  });

  get emailsFormArray(): FormArray {
    return this.person.get('emails') as FormArray;
  }

  addEmail(): void {
    this.emailsFormArray.push(new FormControl(null, [Validators.required, Validators.email]));
  }

  removeControl(index: number): void {
    this.emailsFormArray.removeAt(index);
  }

  public onSubmit(): void {
    console.log(this.person.getRawValue());
  }

  private passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/.test(control.value) && control.value) {
        return { passwordIncorrect: true };
      }
      return null;
    };
  }
}
