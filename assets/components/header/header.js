angular.module('wpAngularTheme')
.component('headerMenu', {
	templateUrl: components + 'header/header.html',
	controller: [function() {
		var vm = this;

		vm.menu = {
			"Home": "main",
			"Awards": "awards",
			"Resume": "resume",
			"Blog": "blog",	
			"Projects": "projects",		
			"Contact": "contact",
			"About The Site": "aboutSite"
		};

		vm.social = {
			"LinkedIn": {
				link: "https://www.linkedin.com/in/austinstewart",
				icon: "fa-linkedin-square"
			},
			"Email": {
				link: "mailto:hello@austinthedeveloper.com",
				icon: "fa-envelope"
			},
			"GitHub": {
				link: "https://github.com/austinthedeveloper/",
				icon: "fa-github-square"
			},
			"Stack Overflow": {
				link: "http://stackoverflow.com/users/2404112/austinthedeveloper",
				icon: "fa-stack-overflow"
			},
			"Phone": {
				link: "tel:8304562261",
				icon: "fa-phone"
			},
		}
	}]
})