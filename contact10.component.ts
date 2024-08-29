import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1707592434705-672e9909b7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  location2ImageAlt: string = 'Email Icon'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @Input()
  location1ImageAlt: string = 'Office Location Image'
  @ContentChild('location1')
  location1: TemplateRef<any>
  @ContentChild('location2')
  location2: TemplateRef<any>
  constructor() {}
}
