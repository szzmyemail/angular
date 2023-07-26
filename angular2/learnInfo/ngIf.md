```html
//else 绑定指向一个带有 #elseBlock 标签的 <ng-template>
  
<div *ngIf="show; else elseBlock">Text to show</div>
<ng-template #elseBlock>
  Alternate text while primary text is hidden
</ng-template>
```

