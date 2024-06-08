// QuestionBank.js

const qBank = [
	{
		id: 1,
		question: "How are state and props different in React?",
		options: ["State is internal and controlled by the component itself, while props are external and controlled by whatever renders the component",
		"State and props are the same",
	"Props are internal and state is external" ,
"State can only be used in functional components"],
		answer: "State is internal and controlled by the component itself, while props are external and controlled by whatever renders the component"
	},
	{
		id: 2,
		question: "Which of the following is used in React.js to increase performance?",
		options: ["virtual dom", "orignal dom", "Both A & B", "None of the above"],
		answer: "orignal dom",
	},
	{
		id: 3,
		question: "Which of the following is true about React components?",
		options: ["They must always be written as ES6 classes","They can only return one root element","They can return multiple root elements","They cannot handle events"],
		answer: "They can only return one root element"

		
	},
	{
		id: 4,
		question: "What will be the output of this code snippet?class MyComponent extends React.Component constructor(props) {super(props);this.state = { count: 1 };} render() {return{this.state.count}; } }",
		options: ["1", "0", "undefined", "An error message"],
		answer: "1"
	}
	,{
		id: 5,
		question: "What is a potential issue with this setState usage this.setState({value: this.state.value + 1});",
		options: ["It directly mutates the state","It may lead to outdated values due to the asynchronous nature of setState", "It's the correct way to update state","None of the above"],
		answer: "It may lead to outdated values due to the asynchronous nature of setState"
	},
	{
		id: 6,
		question: "What is wrong with this lifecycle method usage?componentDidMount() { this.setState({value: this.props.initialValue}); }",
		options: ["Props should not be used to set state" , "componentDidMount should not call setState" ,"No issue","The method is deprecated"],
		answer: "Props should not be used to set state"
	},
	{
		id: 7,
		question: "What is a potential issue with this setState usage this.setState({value: this.state.value + 1});",
		options: ["It directly mutates the state","It may lead to outdated values due to the asynchronous nature of setState", "It's the correct way to update state","None of the above"],
		answer: "It may lead to outdated values due to the asynchronous nature of setState"
	}
	,{
		id: 8,
		question: "In React, how do you attach an event handler to an element?",
		options: ["Using the onEvent attribute", "Using the addEventListener method","Using the handleEvent method","None of the above"],
		answer: "Using the onEvent attribute"
	},
	{
		id: 9,
		question: "What is the correct way to bind a method to a component instance in a React class component?",
		options: ["this.method = this.method.bind(this) in the constructor","this.method.bind(this) in the render method","Using an arrow function in the method definition","All of the above"],
		answer: "this.method = this.method.bind(this) in the constructor"
	},
	{
		id: 10,
		question: "Why is it generally a good idea to bind event handler methods in a class component's constructor?",
		options: ["To improve performance","To allow access to the 'this' keyword","To prevent memory leaks","To ensure the method is only called once"],
		answer: "To allow access to the 'this' keyword"
	},
	{
		id: 11,
		question: "Which of the following is true about event handling in React?",
		options: ["React events are named using camelCase","React event handlers can return false to prevent default behavio","React wraps the native event into a SyntheticEvent","All of the above"],
		answer: "All of the above"
	}
]
	

export default qBank;
