import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features25',
  templateUrl: 'features25.component.html',
  styleUrls: ['features25.component.css'],
})
export class Features25 {
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'Customized Website Design Image Alt Text'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'SEO Optimization Image Alt Text'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1582787264488-a0baa3ca997e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature2ImgAlt: string = 'Responsive Web Development Image Alt Text'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
