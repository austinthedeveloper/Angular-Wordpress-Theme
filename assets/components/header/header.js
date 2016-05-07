angular.module('wpAngularTheme')
.component('headerMenu', {
	templateUrl: components + 'header/header.html',
	controller: [function() {
		var vm = this;

		vm.menu = {
			"Home": "main",
			"About": "about",
			"Awards": "awards",
			"Resume": "resume",
			"Blog": "list",			
			"Contact": "contact",
			"About The Site": "aboutSite"
		};

		vm.social = {
			"LinkedIn": {
				link: "#",
				icon: "fa-linkedin-square"
			},
			"Email": {
				link: "#",
				icon: "fa-envelope"
			},
			"GitHub": {
				link: "#",
				icon: "fa-github-square"
			},
			"Stack Overflow": {
				link: "#",
				icon: "fa-stack-overflow"
			},
		}
	}]
})