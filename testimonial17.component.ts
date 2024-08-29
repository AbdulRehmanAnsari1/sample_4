import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @ContentChild('author2Position')
  author2Position: TemplateRef<any>
  @ContentChild('author1Position')
  author1Position: TemplateRef<any>
  @Input()
  author3Alt: string = 'Image of David Johnson'
  @ContentChild('author1Name')
  author1Name: TemplateRef<any>
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1444210971048-6130cf0c46cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('author3Name')
  author3Name: TemplateRef<any>
  @ContentChild('review2')
  review2: TemplateRef<any>
  @ContentChild('author2Name')
  author2Name: TemplateRef<any>
  @ContentChild('author4Position')
  author4Position: TemplateRef<any>
  @ContentChild('author4Name')
  author4Name: TemplateRef<any>
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1508184964240-ee96bb9677a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of John Doe'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1529946179074-87642f6204d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1680965422767-26d1b1dd6763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Jane Smith'
  @Input()
  author4Alt: string = 'Image of Sarah Lee'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('author3Position')
  author3Position: TemplateRef<any>
  @ContentChild('review1')
  review1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('review3')
  review3: TemplateRef<any>
  @ContentChild('review4')
  review4: TemplateRef<any>
  constructor() {}
}
