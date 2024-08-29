import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features24',
  templateUrl: 'features24.component.html',
  styleUrls: ['features24.component.css'],
})
export class Features24 {
  @Input()
  feature1ImgAlt: string = 'Website Creation'
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1632823469121-218dce1a15f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1701009796009-381d273bd38a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'Custom Designs'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Responsive Layout'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  activeTab: number = 0
  constructor() {}
}
