'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _TimeShiit = require('./TimeShiit');

var _TimeShiit2 = _interopRequireDefault(_TimeShiit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

        _this.state = { rows: [] };
        _this.state.rows.push(_this.newRow());
        return _this;
    }

    _createClass(App, [{
        key: 'newRow',
        value: function newRow() {
            return {
                id: this.state.rows.length,
                days: { Mon: 0, Tis: 0, Ons: 0, Tor: 0, Fre: 0 }
            };
        }
    }, {
        key: 'addRow',
        value: function addRow() {
            this.state.rows.push(this.newRow());
            this.setState(this.state);
        }
    }, {
        key: 'handleChange',
        value: function handleChange(delta, rowId, dayId) {
            var row = this.state.rows[rowId];
            row.days[dayId] += delta;
            this.setState(this.state);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var props = {
                rows: this.state.rows,
                onchange: function onchange(diff, row, day) {
                    return _this2.handleChange(diff, row, day);
                },
                addrow: function addrow() {
                    return _this2.addRow();
                }
            };
            return _react2.default.createElement(_TimeShiit2.default, props);
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('mount-node'));