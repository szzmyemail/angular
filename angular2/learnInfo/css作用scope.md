![image-20220802170426388](/Users/lilysong/Library/Application Support/typora-user-images/image-20220802170426388.png)



encapsulation属性用来设置css的作用范围。默认只对当前组件有效。

ViewEncapsulation.None  表示对全局有效，可穿透该组件。但如果在css里面加了selector，依旧是对该selector下的元素有效。



ViewEncapsulation.Emulated 表示只对当前组件有效。默认值。



ViewEncapsulation.ShadowDom 表示只对当前组件有效。But only works on browsers that have built-in support for the shadow DOM。

