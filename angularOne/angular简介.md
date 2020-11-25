AngularJs 版本1.0是在2012年发布的

AngularJs是由Google的员工Misko Hevery从2009年开始着手开发的

```html
	<div ng-app="">
    <input type="text" ng-model="name">
    <h1>{{name}}</h1>
  </div>
<!--如果您移除了 ng-app 指令，HTML 将直接把表达式显示出来，不会去计算表达式的结果。--->
<h1>{{name}}</h1>
```

ng-app指令定义一个AngularJS应用程序。此指令告诉AngularJS,<div>元素是AngularJS应用程序的“所有者”。

ng-modle指令把输入域的值绑定到应用程序变量name.

ng-bind指令把应用程序变量name绑定到h1的innerHTML。



#####AngularJS模块定义应用；

#####AngularJS控制器控制应用；

```js
angular
    .module('myApp', [])
    .controller('myCtrl', function($scope) {
       $scope.name = 'lily';
       $scope.age = 100;
    });
```





##### AngularJS Scope(作用域)

Scope是应用在HTML（视图）和JavaScript（控制器）之间的纽带。

Scope是一个对象，有可用的方法和属性。

Scope可应用在视图和控制器上。

AngularJS应用组成：

- View（视图），即HTML。
- Model（模型），当前视图中可用的数据。
- Controller（控制器），即JS函数，可以添加或修改属性。

###### 谈谈MVC模式

- 如何设计一个程序的结构，这是一门专门的学问，叫做“架构模式“，属于编程的方法论。

- MVC模式就是架构模式的一种。

- 这个模式认为，程序不论简单还是复杂，从结构上看，都可以分为三层：

  - 最上面的一层，是直接面向用户的“视图层”（View）。它是提供给用户的操作界面，是程序的外壳。
  - 最底下的一层，是核心的“数据层”（Model），也就是程序需要操作的数据或信息。
  - 中间的一层，是“控制层”（Controller），它负责根据用户从视图层输入的指令，选取数据层中的数据，然后对其进行相应的操作，产生最终结果。

  这三层是紧密联系在一起的，但又是互相独立的，每一层内部的变化不影响其他层。每一层都对外提供接口（Interface），供上面一层调用。这样一来，软件就可以实现模块化，修改外观或者变更数据都不用修改其他层，大大方便了维护和升级。

  MVC 最重要的目的并不是规定各个模块应该如何交互和联系，而是将原有的混乱的应用程序划分出合理的层级，把一团混乱的代码，按照展示层和领域层分成两个部分。

在大型项目中，HTML DOM中有多个作用域，此时就要知道你使用的scope对应的作用域是哪一个。

###### 根作用域

所有的应用都有一个 **$rootScope**，它可以作用在 **ng-app** 指令包含的所有 HTML 元素中。

**$rootScope** 可作用于整个应用中。是各个 controller 中 scope 的桥梁。用 rootscope 定义的值，可以在各个 controller 中使用。

####AngularJS控制器

AngularJS控制器控制AngularJS应用程序的数据。

Ng-controller指令定义了应用程序控制器。

控制器中的$scope(作用域)用来保存AngularJS Model(模型)的对象。

#### AngualrJS 过滤器

过滤器可以使用一个管道字符（|）添加到表达式和指令中。

内置过滤器

currency

filter

lowercase

uppercase

orderBy

自定义过滤器

![image-20200713143118406](/Users/lilysong/Library/Application Support/typora-user-images/image-20200713143118406.png)

##### AngularJS服务（service）

AngularJS中，可以使用内建服务，也可以创建自己的服务。

在angularJS中，服务是一个函数或对象，可在AngularJS应用中使用。

AngularJS内建了30多个服务。比如：

$http  

$location

$timeout

$interval

创建自定义服务

<img src="/Users/lilysong/Library/Application Support/typora-user-images/image-20200713162755213.png" alt="image-20200713162755213" style="zoom:200%;" />

