import { HttpClient } from '@angular/common/http';
import { Component, effect, computed, signal, inject } from '@angular/core';

@Component({
  selector: 'app-best-practices-examples',
  imports: [],
  template: ``
})
export class DeriveStateCorrectWay {
  firstName = signal('');
  lastName = signal('');
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);
}

export class DeriveStateWrongWay {
  firstName = signal('Evert');
  lastName = signal('t reve');
  fullName = signal('');

  constructor(){
    effect(() => {
      this.fullName.set(`${this.firstName()} ${this.lastName()}`);
    });
  }
}

export class WhenToUseEffect {
  firstName = signal('Evert');
  constructor(){
    const canvas = document.getElementById("my-canvas") as HTMLCanvasElement
    const ctx = canvas?.getContext("2d")
    effect(() => {
      // Logging
      console.log(`firstName: ${this.firstName()}`);

      // Localstorage
      window.localStorage.setItem('firstName', this.firstName());

      // Canvas
      ctx?.strokeText(this.firstName(), 10, 50);
    })
  }
}

export class BussinessLogicInEffect {
  httpClient = inject(HttpClient);
  firstName = signal('Evert');
  constructor(){
    effect(() => {
      this.httpClient.patch('/user', {
        firstName: this.firstName()
      })
    })
  }
}
  
