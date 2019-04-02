webpackJsonp([25],{1817:function(t,n,e){var a=e(1),r=e(87),i=e(407).PageRenderer;i.__esModule&&(i=i.default);var l=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(1902)}},componentWillMount:function(){},render:function(){return a.createElement(i,Object.assign({},this.props,{content:this.state.content}))}});l.__catalog_loader__=!0,t.exports=l},1902:function(t,n){t.exports="### Group Selector with Groups\n\n```react\nshowSource: true\nstate: {\n\tgroups: [{\n\t\tname: 'Michaels Test Church',\n\t\tgroupId: 1,\n\t\tkind: 'church',\n\t\tavatarUrl: 'https://avatars.logoscdn.com/451/6830451_f896e509e7504b33812f0f6bf086ffa8.jpg',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Example Community Church',\n\t\tgroupId: 2,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Jordans Test Church',\n\t\tgroupId: 3,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Cool Test Church',\n\t\tgroupId: 4,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t}\n\t],\n\tselectedGroupId: 1,\n\tmobile: false,\n}\n---\n<GroupSelectorDemo>\n\t<GroupSelector\n\t\tonSearchInputChange={(search) => {\n\t\t\tsetState({ groupSearchResults: [{\n\t\t\t\tname: 'Wrong Kind',\n\t\t\t\tgroupId: 1,\n\t\t\t\tkind: 'general',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Claimable Church',\n\t\t\t\tgroupId: 2,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: true,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Not a Member',\n\t\t\t\tgroupId: 3,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Member but Ain\\'t Admin',\n\t\t\t\tgroupId: 4,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'member',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 5',\n\t\t\t\tgroupId: 5,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 6',\n\t\t\t\tgroupId: 6,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 7',\n\t\t\t\tgroupId: 7,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t}\n\n\t\t\t]});\n\t\t}}\n\t\tonCreateGroup={(name, location) => {\n\t\t\tconst newGroup = {\n\t\t\t\tname,\n\t\t\t\tgroupId: 5,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t};\n\n\t\t\tsetState({\n\t\t\t\tgroups: [...state.groups, newGroup],\n\t\t\t\tselectedGroupId: newGroup.groupId\n\t\t\t});\n\t\t}}\n\t\tonSelectionChange={(groupId, name) => { setState({selectedGroupId: groupId }) }}\n\t\tgroups={state.groups}\n\t\tselectedGroupId={state.selectedGroupId}\n\t\tgroupSearchResults={state.groupSearchResults || state.groups}\n\t\tgroupSelectorView={\"groups\"}\n\t\tonGetStartedClick={() => {alert(\"Lets get started.\")}}\n\t\tonClaimGroupClick={() => {alert(\"Claim the group!\")}}\n\t\tonJoinGroupClick={() => {alert(\"Should Join the group, or request\")}}\n\t\tonAdminRequestClick={() => {alert(\"Admin access requested\")}}\n\t\tisMobile={false}\n\t/>\n</GroupSelectorDemo>\n```\n\n### Group Selector without Groups\n\n```react\nshowSource: true\nstate: {\n\tgroups: [],\n\tselectedGroupId: 1,\n\tmobile: false,\n}\n---\n<GroupSelectorDemo>\n\t<GroupSelector\n\t\tonSearchInputChange={() => {alert(\"handled by application\")}}\n\t\tonCreateGroup={() => {alert(\"handled by application\")}}\n\t\tonSelectionChange={() => {alert(\"handled by application\")}}\n\t\tgroups={state.groups}\n\t\tselectedGroupId={state.selectedGroupId}\n\t\tgroupSearchResults={state.groups}\n\t\tgroupSelectorView={\"no-groups\"}\n\t\tonGetStartedClick={() => {alert(\"handled by application\")}}\n\t\tonClaimGroupClick={() => {alert(\"handled by application\")}}\n\t\tonJoinGroupClick={() => {alert(\"Should Join the group, or request\")}}\n\t\tonAdminRequestClick={() => {alert(\"Admin access requested\")}}\n\t\tisMobile={false}\n\t/>\n</GroupSelectorDemo>\n```\n\n### Group Selector Modal\n\n```react\nshowSource: true\nstate: {\n\tgroups: [{\n\t\tname: 'Michaels Test Church',\n\t\tgroupId: 1,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Example Community Church',\n\t\tgroupId: 2,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Jordans Test Church',\n\t\tgroupId: 3,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Cool Test Church',\n\t\tgroupId: 4,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t}\n\t],\n\tisOpen: false,\n}\n---\n<LargeGroupSelectorDemo>\n\t<LargeGroupSelector\n\t\tisOpen={state.isOpen}\n\t\tonChangeModalState={() => setState({ isOpen: !state.isOpen }) }\n\t\tonSearchInputChange={(search) => {\n\t\t\tsetState({ groupSearchResults: [{\n\t\t\t\tname: 'Wrong Kind',\n\t\t\t\tgroupId: 1,\n\t\t\t\tkind: 'general',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Claimable Church',\n\t\t\t\tgroupId: 2,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: true,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Not a Member',\n\t\t\t\tgroupId: 3,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Member but Ain\\'t Admin',\n\t\t\t\tgroupId: 4,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'member',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 5',\n\t\t\t\tgroupId: 5,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 6',\n\t\t\t\tgroupId: 6,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 7',\n\t\t\t\tgroupId: 7,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t}\n\n\t\t\t]});\n\t\t}}\n\t\tgroups={state.groups}\n\t\tgroupSearchResults={state.groupSearchResults || state.groups}\n\t\tonCreateGroup={(name, location) => {\n\t\t\tconst newGroup = {\n\t\t\t\tname,\n\t\t\t\tgroupId: 5,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t};\n\n\t\t\tsetState({\n\t\t\t\tgroups: [...state.groups, newGroup],\n\t\t\t\tisOpen: false,\n\t\t\t});\n\t\t}}\n\t\tonGetStartedClick={() => {alert(\"Lets get started.\")}}\n\t\tonClaimGroupClick={() => {alert(\"Claim the group!\")}}\n\t\tonJoinGroupClick={() => {alert(\"Should Join the group, or request\")}}\n\t\tonAdminRequestClick={() => {alert(\"Admin access requested\")}}\n\t/>\n\t<Button primary medium onClick={() => {setState({isOpen: true})}}>Open Modal</Button>\n</LargeGroupSelectorDemo>\n```\n\n### In Place Large Group Selector\n\n```react\nshowSource: true\nstate: {\n\tgroups: [{\n\t\tname: 'Michaels Test Church',\n\t\tgroupId: 1,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Example Community Church',\n\t\tgroupId: 2,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Jordans Test Church',\n\t\tgroupId: 3,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Cool Test Church',\n\t\tgroupId: 4,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t},\n\t{\n\t\tname: 'Church With Really Really Really Really Really Really Really Really Long Name',\n\t\tgroupId: 5,\n\t\tkind: 'church',\n\t\tavatarUrl: '',\n\t\trelationshipKind: 'participant',\n\t\tmembershipKind: 'admin',\n\t\tclaimable: false,\n\t}\n\t],\n}\n---\n<LargeGroupSelectorDemo>\n\t<LargeGroupSelector\n\t\tisOpen={false}\n\t\tonChangeModalState={() => {}}\n\t\tonSearchInputChange={(search) => {\n\t\t\tsetState({ groupSearchResults: [{\n\t\t\t\tname: 'Wrong Kind',\n\t\t\t\tgroupId: 1,\n\t\t\t\tkind: 'general',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Claimable Church',\n\t\t\t\tgroupId: 2,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: true,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Not a Member',\n\t\t\t\tgroupId: 3,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'none',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Member but Ain\\'t Admin',\n\t\t\t\tgroupId: 4,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'member',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 5',\n\t\t\t\tgroupId: 5,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 6',\n\t\t\t\tgroupId: 6,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t},\n\t\t\t{\n\t\t\t\tname: 'Search result 7',\n\t\t\t\tgroupId: 7,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t}\n\t\t\t]});\n\t\t}}\n\t\tgroups={state.groups}\n\t\tgroupSearchResults={state.groupSearchResults || state.groups}\n\t\tonCreateGroup={(name, location) => {\n\t\t\tconst newGroup = {\n\t\t\t\tname,\n\t\t\t\tgroupId: 6,\n\t\t\t\tkind: 'church',\n\t\t\t\tavatarUrl: '',\n\t\t\t\trelationshipKind: 'participant',\n\t\t\t\tmembershipKind: 'admin',\n\t\t\t\tclaimable: false,\n\t\t\t};\n\n\t\t\tsetState({\n\t\t\t\tgroups: [...state.groups, newGroup],\n\t\t\t\tisOpen: false,\n\t\t\t});\n\t\t}}\n\t\tonGetStartedClick={() => {alert(\"Lets get started.\")}}\n\t\tonClaimGroupClick={() => {alert(\"Claim the group!\")}}\n\t\tonJoinGroupClick={() => {alert(\"Should Join the group, or request\")}}\n\t\tonAdminRequestClick={() => {alert(\"Admin access requested\")}}\n\t\tshowInPlace\n\t/>\n</LargeGroupSelectorDemo>\n```\n"}});
//# sourceMappingURL=25.145cf87c.chunk.js.map