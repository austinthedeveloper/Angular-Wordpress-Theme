angular.module('wpAngularTheme')
.component('dummy', {
	templateUrl: components + 'dummy-text/dummy-text.html',
	controller: [function(){
		var vm = this;

		vm.header = "Lorem Ipsum";
		vm.content = "Bacon ipsum dolor amet bresaola cupim brisket sausage, spare ribs sirloin landjaeger chicken flank hamburger turducken ham hock filet mignon salami. Ground round tenderloin cow short ribs biltong picanha. Chuck pancetta flank pork belly tongue andouille ribeye. Cow pork belly picanha, chuck kevin tenderloin kielbasa brisket drumstick shankle jowl spare ribs. Landjaeger drumstick meatball beef ribs spare ribs picanha pork belly pig beef prosciutto pancetta turducken. Doner ground round kielbasa, leberkas bresaola ham hock pork loin turducken. Meatloaf venison ham hock tongue, beef frankfurter drumstick chuck jerky andouille.";
	}]
})
