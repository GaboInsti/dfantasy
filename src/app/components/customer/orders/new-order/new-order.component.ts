import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Category } from '../../../../shared/models/category.interface';
import { Subscription } from 'rxjs';
import { MobiliarioService } from '../../../../shared/services/mobiliario.service';
import { Mobiliario } from '../../../../shared/models/mobiliario.interface';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css'],
})
export class NewOrderComponent implements OnInit, OnDestroy {
  mobile: boolean = false;

  categories: Category[];
  categorySub: Subscription;

  mobiliarios: Mobiliario[];
  mobiliarioSub: Subscription;

  orderForm: FormGroup;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private formBuilder: FormBuilder,
    private mobiliarioService: MobiliarioService
  ) {}

  ngOnInit(): void {
    this.onInitForm();
    this.mediaQuery();
    this.categorySub = this.mobiliarioService.categories$.subscribe(
      (categories) => (this.categories = categories)
    );
    this.mobiliarioSub = this.mobiliarioService.mobiliario$.subscribe(
      (mobiliarios) => (this.mobiliarios = mobiliarios)
    );
  }

  mediaQuery() {
    const medium = '(min-width: 768px)';
    this.breakpointObserver
      .observe(medium)
      .subscribe((state) => (this.mobile = !state.matches));
  }

  onInitForm() {
    this.orderForm = this.formBuilder.group({
      mobiliarios: this.formBuilder.array([]),
      eventDescription: this.formBuilder.control('', [Validators.required]),
      date: this.formBuilder.group({
        startDate: this.formBuilder.control('', [Validators.required]),
        endDate: this.formBuilder.control('', [Validators.required]),
      }),
      address: this.formBuilder.group({
        colonia: this.formBuilder.control('', [Validators.required]),
        street1: this.formBuilder.control('', [Validators.required]),
        street2: this.formBuilder.control('', [Validators.required]),
        noInterior: this.formBuilder.control('', [Validators.required]),
        noExterior: this.formBuilder.control('', [Validators.required]),
        codigoPostal: this.formBuilder.control('', [Validators.required]),
        description: this.formBuilder.control('', [Validators.required]),
      }),
      customer: this.formBuilder.group({
        customerName: this.formBuilder.control('', [Validators.required]),
        customerLastName: this.formBuilder.control('', [Validators.required]),
        customerEmail: this.formBuilder.control('', [Validators.required]),
        customerPhoneNumber: this.formBuilder.control('', [
          Validators.required,
        ]),
        customerBirthday: this.formBuilder.control('', [Validators.required]),
        genre: this.formBuilder.control('', [Validators.required]),
      }),
    });
    this.onAddMobiliario();
  }

  onAddMobiliario() {
    (<FormArray>this.orderForm.get('mobiliarios')).push(
      this.formBuilder.group({
        category: this.formBuilder.control('', [Validators.required]),
        nameMobiliario: this.formBuilder.control('', [Validators.required]),
        priceMobiliario: this.formBuilder.control('', [Validators.required]),
        quantityMobiliario: this.formBuilder.control('', [Validators.required]),
      })
    );
  }

  onRemoveMobiliario(index: number) {
    (<FormArray>this.orderForm.get('mobiliarios')).removeAt(index);
  }

  get mobiliariosControls() {
    return (<FormArray>this.orderForm.get('mobiliarios')).controls;
  }

  onChangeCategory() {}

  onNewOrder() {
    console.log(this.orderForm.value);
  }

  ngOnDestroy(): void {
    if (this.categorySub) this.categorySub.unsubscribe();
    if (this.mobiliarioSub) this.mobiliarioSub.unsubscribe();
  }
}
