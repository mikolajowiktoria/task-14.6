

var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    
    increment: function() {
        this.setState ({
            counter: this.state.counter +1
        });
    },
    
    decrement: function() {
        this.setState ({
            counter: this.state.counter -1
        });
    },

    shouldComponentUpdate: function() {
        return true;
    },
    
    
    render: function() {
        return React.createElement('div', {},
            React.createElement('h2', {}, 'COUNTER'),
            React.createElement('button', {
                className: 'btn btn-lg btn-warning',
                onClick: this.decrement
            }, 'decrement +'),
            React.createElement('span', {}, 'counter: ' + this.state.counter),
            React.createElement('button', {
                className: 'btn btn-lg btn-primary',
                onClick: this.increment
            }, 'increment +'),
        );
    }
});
                 
var element =
    React.createElement('div', {},
        React.createElement(Counter, {}),
        React.createElement(Counter, {}),
        React.createElement(Counter, {})
    );

ReactDOM.render(element, document.getElementById('app'));
