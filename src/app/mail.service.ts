import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text:`You're now friends with blah`},
    {id: 1, text:`Blah liked your tweet`},
    {id: 2, text:`You'll never believe what blah said...`}
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id ? {id, text} : m)
  }

  constructor() { }

}
