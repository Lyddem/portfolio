//mini framework

(function(global,$) {

	var Greetr = function(fristName,lastName,language){
		return new Greetr.init(firstName,lastName,language)//will return a new object
	}

//building an object that will be returned by the greeter function above
		Greeter.init = function(firstName,lastName,language){
			
			return {
			firstName = this.firstName;
			lastName = this.lastName;
			language = this.language;
			}
		}

} (window,jQuery)())