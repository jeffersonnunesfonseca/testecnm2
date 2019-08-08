import React, {Component} from 'react';

class App extends Component {
  state = {
	response: ''
  };

  componentDidMount() {
	this.callApiLaravel()
  	.then(res => this.setState({ response: res }))
  	.catch(err => console.log(err));
  }

  callApi = async () => {
	const response = await fetch('/api/mensagem');
	const body = await response.json();
	if (response.status !== 200) throw Error(body.message);

	return body;
	};
	
	callApiLaravel = async () => {
		console.log("response");

		const response = await fetch('/teste');
		console.log("response");
		console.log(response);
		const body = await response.json();

		const result = body.map(function(r,i){
			return <h1>{r.nome}</h1>;
		});

		
		return result;
		};
	

  render() {

	return (
		
  	<div>
			{this.state.response}

  	</div>
	);
  }
}

export default App;