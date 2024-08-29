import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-navbar8',
  templateUrl: 'navbar8.component.html',
  styleUrls: ['navbar8.component.css'],
})
export class Navbar8 {
  @Input()
  linkUrlPage4: string = 'https://www.teleporthq.io'
  @Input()
  link2Url: string = 'https://www.teleporthq.io'
  @ContentChild('page4Description')
  page4Description: TemplateRef<any>
  @Input()
  page1ImageSrc: string =
    'https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  page2ImageAlt: string = 'Image for Portfolio page'
  @ContentChild('link2')
  link2: TemplateRef<any>
  @Input()
  linkUrlPage2: string = 'https://www.teleporthq.io'
  @Input()
  logoAlt: string = 'Freelancing Website Logo'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  page3ImageAlt: string = 'Image for Services page'
  @Input()
  linkUrlPage1: string = 'https://www.teleporthq.io'
  @ContentChild('page1')
  page1: TemplateRef<any>
  @ContentChild('link1')
  link1: TemplateRef<any>
  @Input()
  page4ImageSrc: string =
    'https://images.unsplash.com/photo-1541664387156-a9c04696ff01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzNHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  linkUrlPage3: string = 'https://www.teleporthq.io'
  @ContentChild('page4')
  page4: TemplateRef<any>
  @ContentChild('page2')
  page2: TemplateRef<any>
  @ContentChild('link4')
  link4: TemplateRef<any>
  @Input()
  page4ImageAlt: string = 'Image for Contact page'
  @ContentChild('page1Description')
  page1Description: TemplateRef<any>
  @Input()
  page2ImageSrc: string =
    'https://images.unsplash.com/photo-1705147293087-9e183bf149ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  page3ImageSrc: string =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzMzNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @ContentChild('page2Description')
  page2Description: TemplateRef<any>
  @ContentChild('link3')
  link3: TemplateRef<any>
  @ContentChild('page3')
  page3: TemplateRef<any>
  @Input()
  link1Url: string = 'https://www.teleporthq.io'
  @ContentChild('page3Description')
  page3Description: TemplateRef<any>
  @Input()
  page1ImageAlt: string = 'Image for Home page'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @Input()
  link3Url: string = 'https://www.teleporthq.io'
  link5AccordionOpen: boolean = false
  link5DropdownVisible: boolean = false
  constructor() {}
}
