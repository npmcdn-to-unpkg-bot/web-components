"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeShiit = function TimeShiit(_ref) {
    var rows = _ref.rows;
    var onchange = _ref.onchange;
    var addrow = _ref.addrow;

    var timeRows = rows.map(function (row, idx) {
        var props = { row: row, onchange: onchange };
        var key = "row-" + row.id;
        return _react2.default.createElement(TimeRow, _extends({ key: key }, props));
    });
    return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
            "h3",
            null,
            "TimeShiit - React"
        ),
        timeRows,
        _react2.default.createElement(
            "button",
            { onClick: addrow },
            "Add Row"
        )
    );
};

var TimeRow = function TimeRow(_ref2) {
    var row = _ref2.row;
    var onchange = _ref2.onchange;

    var days = Object.keys(row.days);
    var timeFields = days.map(function (day) {
        var id = "field-" + row.id + "-" + day;
        var props = { onchange: onchange, rowId: row.id, day: day, value: row.days[day] };
        return _react2.default.createElement(TimeField, _extends({ key: id }, props));
    });
    var sum = days.map(function (day) {
        return row.days[day];
    }).reduce(function (p, n) {
        return p + n;
    }, 0);
    return _react2.default.createElement(
        "div",
        null,
        timeFields,
        _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
                "strong",
                null,
                "SUMMA: ",
                sum
            )
        )
    );
};

var TimeField = function TimeField(_ref3) {
    var onchange = _ref3.onchange;
    var rowId = _ref3.rowId;
    var day = _ref3.day;
    var value = _ref3.value;

    var change = function change(event) {
        var newVal = event.target.value;
        var delta = newVal - value;
        onchange(delta, rowId, day);
    };
    return _react2.default.createElement("input", { type: "number", onChange: change, value: value, title: day });
};

exports.default = TimeShiit;