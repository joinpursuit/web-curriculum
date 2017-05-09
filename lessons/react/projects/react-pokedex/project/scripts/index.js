var Pokemon = function(){
  this.name = '';
  this.sprites = {front_default:  ''};
  this.abilites = [];
  this.types = [];
  this.stats = [];
}

var PokemonInfo = React.createClass({
  getInitialState: function() {
    // Creating a blank pokemon since none had been selected
    // when the app starts
    var blankPoke = new Pokemon();
    return {pokemon: blankPoke};
  },
  render: function() {
    var pokemon;
    if (this.props.pokemon){
      pokemon = this.props.pokemon;
    } else {
      pokemon = this.state.pokemon;
    }

      // Use the Pokemon object and create lists 
      // from the the types property (an array)
      // and the stats propery (also an array)

    return (
      <div>
        <h2>{pokemon.name} </h2>
        <img src={pokemon.sprites.front_default} alt="Pokemon Image" />
        <h4> Type: </h4>
        <ul>
        
        </ul>
        <h4> Stats: </h4>
        <ul>
       
        </ul>
      </div>
    )
  }
})

var PokemonSearch = React.createClass({
  getInitialState: function() {
    return { pokemon: ''};
  },
  handlePokemonChange: function(e) {
    // Use props to pass call the appropriate method of Pokedex
  },
  render: function() {
    return (
      <input className="form-control"
        type="text"
        placeholder="Pokemon name"
        value={this.state.pokemon}
        onChange={this.handlePokemonChange}
      />
    )
  }
})

var PokemonList = React.createClass({
  handleClick: function(pokemon){
      // Use props to call the appropriate function of Pokedex
  },
  render: function() {

    if (this.props.data.length === 0){
      return null;
    }
    // Sorting alphabetically
    this.props.data.sort(function(firstPoke, secondPoke){
      return firstPoke.name > secondPoke.name ? 1 : -1;
    });

    // Saving 'this' context for use in the callback function provided for 'onClick'
    // var that = this;
    // Creating an HTML list of all the pokemon
    var pokemonNodes = this.props.data.map(function(pokemon, index){
      return(
        // Add an onClick using bind
        <li className="list-group-item" key = {index}>
           {pokemon.name}
        </li>
      );
    });
    return (
      <ul className = "list-group pokemonList">
        {pokemonNodes}
      </ul>
    )
  }
})

var Pokedex = React.createClass({
  getInitialState: function() {
    return {originalList: [], filteredList: [], selectedPokemon: null};
  },
  componentWillMount: function() {
      this.loadPokemonList();
  },
  loadPokemonList: function(){
    // The initial API call for the full pokemon list
    console.log('loading pokemon list');
    $.ajax({
        url: this.props.url + "?limit=820",
        dataType: 'json',
        cache: true,
        success: function(data){
          console.log("loaded pokemon list from API");
          // The original and filtered lists are the same since no search has been
          // performed at this point
          this.setState({originalList: data.result, filteredList: data.results})
        }.bind(this),
        error: function(xhr, status, err) {
           console.log("error")
           console.error(this.props.url, status, err.toString());
        }.bind(this),
	       timeout:10000
    });
  },

  handlePokemonClick: function(pokemon) {
      // Implement the AJAX calls and state change when an entry in the list is clicked
      //  (add a selectedPokemon variable to the state)
  },

  handlePokemonSearch: function(name){
    // Implement the state change when the user fills an input in the search field
    // If the search field is cleared, set filteredList to be equal to originalList
    // Otherwise use the array filter method to update the filteredList
  },

  render: function(){
    return (
      <div className = "pokedex">
        <h1> ReactJS Pokedex </h1>

 	 <div className="col-md-4">
           <PokemonSearch onChange = {this.handlePokemonSearch} />
           <PokemonList onChange = {this.handlePokemonClick} data = {this.state.filteredList} />
         </div>

 	  <div className="col-md-offset-1 col-md-6">
           <PokemonInfo  pokemon={this.state.selectedPokemon}/>
        </div>
      </div>
    );
  }
});



ReactDOM.render(

  <Pokedex url="http://pokeapi.co/api/v2/pokemon/" />,

  document.getElementById('content')
);
