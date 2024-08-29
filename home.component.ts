import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raw29k2: string = ' '
  rawaemv: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Bold Dearest Cobra')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Bold Dearest Cobra',
      },
    ])
  }
}
