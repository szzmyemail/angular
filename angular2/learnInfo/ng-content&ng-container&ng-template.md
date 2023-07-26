#### Ng-content

如果一个组件能够接受外部投射进来的内容，也就是说组件最终呈现的内容不仅仅是本身定义的那些，就需要用到ng-content. 

内容映射时用到，方便定制可复用的组件，可以很好的扩充组件的功能。

ng-content提供select属性，方便选择投影的内容（组件或者html里面的标签），如果ng-content没有设置select属性，则所有的内容都可以投影上来。

select的三种规则

 - select="xx"选择，xx对应html里面标签或者组件的名字。比如select="div"表示ng-content位置只会放div标签。

   ```html
   <ng-content select="div"></ng-content>
   ```

   

 - select=".xx"选择，xx对应html标签或者组件的class名字。比如select=".select-class"表示ng-content位置只会放设有class="select-class"的html标签或者组件。

   

   ```html
   <ng-content select=".select-class"></ng-content>
   ```

   

- select="[key=value]"选择，key-value的形式。选择设置了属性key="value“的html标签或者组件。比如select="[name=test]"表示ng-content位置只会放设置了属性name=”test“的html标签或者组件。

  

  ```html
  <ng-content select="[name=test]"></ng-content>
  
  <div name="test">我是第一号位置 div[name="test"]</div>
  ```

  **强调一点select的值不能设置为动态的**

	####      ngProjectAs

​		通过ng-content的select属性可以指定投射到ng-content的内容，但是不管是html标签还是class还是属性都是作用在组件的直接子节点上。如果投射的内容不是直接子节点，就需要用到ngProjectAs。

```js
// 我们先自定义一个组件app-content-section 里面会使用ng-content

import {Component} from '@angular/core';

@Component({
    selector: 'app-content-section',
    template: `
        <div>
            <h1>ng content</h1>
            <div style="background-color: #039be5">
                <ng-content select="app-content-child"></ng-content>
            </div>
        </div>
    `,
    styleUrls: ['./content-section.component.less']
})
export class ContentSectionComponent {

}

// 下面中情况下 ng-content没有投射到对应的内容

<app-content-section>
    <ng-container>
        <app-content-child></app-content-child>
    </ng-container>
</app-content-section>

// 通过使用 ngProjectAs 让ng-content的内容能正确的投射过来。

<app-content-section>
    <ng-container ngProjectAs="app-content-child">
        <app-content-child></app-content-child>
    </ng-container>
</app-content-section>
```



 ng-conent提供了@ContentChild和@ContentChildren来获取ng-conent里面包含的组件(类似@ViewChild和@ViewChildren)。



#### ng-template



#### ng-container

