var _jsxFileName="__tests__/basic/Typography.ios.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Content=require("./../../src/basic/Content");
var _H=require("./../../src/basic/H1");
var _H2=require("./../../src/basic/H2");
var _H3=require("./../../src/basic/H3");
var _Text=require("./../../src/basic/Text");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="ios";
return Platform;
});

it("renders Typography",function(){
var tree=_reactTestRenderer2.default.
create(
_react2.default.createElement(_Content.Content,{__source:{fileName:_jsxFileName,lineNumber:21}},
_react2.default.createElement(_H.H1,{__source:{fileName:_jsxFileName,lineNumber:22}},"Header One"),
_react2.default.createElement(_H2.H2,{__source:{fileName:_jsxFileName,lineNumber:23}},"Header Two"),
_react2.default.createElement(_H3.H3,{__source:{fileName:_jsxFileName,lineNumber:24}},"Header Three"),
_react2.default.createElement(_Text.Text,{__source:{fileName:_jsxFileName,lineNumber:25}},"Default"))).


toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Typography.ios.js.map