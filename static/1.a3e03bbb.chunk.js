webpackJsonp([1],{1801:function(t,e,n){var a=n(1),o=n(87),r=n(407).PageRenderer;r.__esModule&&(r=r.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1886)}},componentWillMount:function(){},render:function(){return a.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,t.exports=i},1886:function(t,e){t.exports="A typeahead control with keyboard navigation.\n\n```hint|warning\nThis is a deprecated control! It won't receive any more updates. Please migrate to the new Autocomplete control.\n```\n\n```hint|directive\nThese components require the [Faithlife Bootstrap base stylesheet](/bootstrap/stylesheet) to be loaded globally in your app.\n```\n\nSource: [`react-bootstrap-typeahead`](https://github.com/Faithlife/react-bootstrap-typeahead)\n\n[Component documentation](https://github.com/Faithlife/react-bootstrap-typeahead/blob/master/docs/Usage.md)\n[More component demos](http://ericgio.github.io/react-bootstrap-typeahead/)\n\n```\nimport { Typeahead } from '@faithlife/styled-ui/dist/text-input';\nimport '@faithlife/styled-ui/dist/text-input.css';\n```\n\n```react\nshowSource: true\nstate: { selection: '' }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Current selection: {state.selection}</Label>\n\t\t<Typeahead\n\t\t\tonChange={value => { setState({ selection: value })}}\n\t\t\toptions={['Washington','California','Texas']}\n\t\t\tplaceholder=\"Choose a state...\"\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n### Tags demo\n```react\nshowSource: true\nstate: { tags: [] }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Current tags: {JSON.stringify(state.tags)}</Label>\n\t\t<Typeahead\n\t\t\tmultiple\n\t\t\tallowNew\n\t\t\tonChange={value => { setState({ tags: value })}}\n\t\t\toptions={['very cool','outrageous','slick']}\n\t\t\tplaceholder=\"Add some tags...\"\n\t\t\tnewSelectionPrefix=\"New entry: \"\n\t\t\tselectHintOnEnter\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n### Legacy infered typeahead\n\n```react\nshowSource: false\nstate: { value: 'Washington', confirmed: false }\n---\n<div>\n\t<div>\n\t\t<Label>Current selection: {state.value}</Label>\n\t\t<InferredTypeahead\n\t\t\tconfidence={state.confirmed ? null : 0.9}\n\t\t\tonChange={value => { setState({ value, confirmed: true })}}\n\t\t\tonConfirm={value => { setState({ confirmed: true })}}\n\t\t\toptions={['Washington','California','Texas']}\n\t\t\tplaceholder=\"Choose a state...\"\n\t\t\tdefaultInputValue={state.value}\n\t\t/>\n\t</div>\n</div>\n```\n"}});
//# sourceMappingURL=1.a3e03bbb.chunk.js.map