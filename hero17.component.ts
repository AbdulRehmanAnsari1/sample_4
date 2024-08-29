import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero17',
  templateUrl: 'hero17.component.html',
  styleUrls: ['hero17.component.css'],
})
export class Hero17 {
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1707593405369-eff78be13da9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0NHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image8Alt: string = 'Responsive Design'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1457131760772-7017c6180f05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0NXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Contact Us'
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0Nnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Client Testimonials'
  @Input()
  image1Alt: string = 'Website Creation'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1618297044573-2aca2476ab72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image7Alt: string = 'Order Now'
  @Input()
  image12Alt: string = 'Professional Services'
  @Input()
  image2Alt: string = 'Web Design'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1651631757740-f13f1c54513e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1649091245823-18be815da4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0N3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Web Development'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1707198134558-202f99242d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image11Alt: string = 'Customized Websites'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  image8Src: string =
    'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1582787264299-66a617fcc6bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM0OXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image10Alt: string = 'SEO Optimization'
  @Input()
  image4Alt: string = 'Portfolio Showcase'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM1MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image9Alt: string = 'E-commerce Solutions'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1680458841513-68fac46fe0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNDk0MzM1Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
