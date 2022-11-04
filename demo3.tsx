(function (System, SystemJS) {
  (function (
    require,
    exports,
    module,
    __filename,
    __dirname,
    global,
    GLOBAL,
    process,
    Buffer
  ) {
    'use strict';
    var __createBinding =
      (this && this.__createBinding) ||
      (Object.create
        ? function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            var desc = Object.getOwnPropertyDescriptor(m, k);
            if (
              !desc ||
              ('get' in desc
                ? !m.__esModule
                : desc.writable || desc.configurable)
            ) {
              desc = {
                enumerable: true,
                get: function () {
                  return m[k];
                },
              };
            }
            Object.defineProperty(o, k2, desc);
          }
        : function (o, m, k, k2) {
            if (k2 === undefined) k2 = k;
            o[k2] = m[k];
          });
    var __setModuleDefault =
      (this && this.__setModuleDefault) ||
      (Object.create
        ? function (o, v) {
            Object.defineProperty(o, 'default', { enumerable: true, value: v });
          }
        : function (o, v) {
            o['default'] = v;
          });
    var __importStar =
      (this && this.__importStar) ||
      function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null)
          for (var k in mod)
            if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
      };
    var __read =
      (this && this.__read) ||
      function (o, n) {
        var m = typeof Symbol === 'function' && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error: error };
        } finally {
          try {
            if (r && !r.done && (m = i['return'])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
    var __importDefault =
      (this && this.__importDefault) ||
      function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
    Object.defineProperty(exports, '__esModule', { value: true });
    var React = __importStar(require('react'));
    var Box_1 = __importDefault(require('@mui/material/Box'));
    var Collapse_1 = __importDefault(require('@mui/material/Collapse'));
    var IconButton_1 = __importDefault(require('@mui/material/IconButton'));
    var Table_1 = __importDefault(require('@mui/material/Table'));
    var TableBody_1 = __importDefault(require('@mui/material/TableBody'));
    var TableCell_1 = __importDefault(require('@mui/material/TableCell'));
    var TableContainer_1 = __importDefault(
      require('@mui/material/TableContainer')
    );
    var TableHead_1 = __importDefault(require('@mui/material/TableHead'));
    var TableRow_1 = __importDefault(require('@mui/material/TableRow'));
    var Paper_1 = __importDefault(require('@mui/material/Paper'));
    var Button_1 = __importDefault(require('@mui/material/Button'));
    var KeyboardArrowDown_1 = __importDefault(
      require('@mui/icons-material/KeyboardArrowDown')
    );
    var KeyboardArrowUp_1 = __importDefault(
      require('@mui/icons-material/KeyboardArrowUp')
    );
    function createData(name, calories, client, rut) {
      return {
        name: name,
        calories: calories,
        client: client,
        rut: rut,
        history: [
          {
            med: 'Paracetamol 500 Mg x 16 comprimidos',
            quantity: 3,
            price: '1.250',
          },
          {
            med: 'Ibuprofeno 200 Mg x 20 comprimidos',
            quantity: 5,
            price: '25.300.000',
          },
          {
            med: 'Ibuprofeno 200 Mg x 20 Comprimidos Recubiertos',
            quantity: 10,
            price: '2.990',
          },
        ],
      };
    }
    function Row(props) {
      var row = props.row;
      var _a = __read(React.useState(false), 2),
        open = _a[0],
        setOpen = _a[1];
      return React.createElement(
        React.Fragment,
        null,
        React.createElement(
          TableRow_1.default,
          { sx: { '& > *': { borderBottom: 'unset' } }, selected: open },
          React.createElement(
            TableCell_1.default,
            null,
            React.createElement(
              IconButton_1.default,
              {
                'aria-label': 'expand row',
                size: 'small',
                onClick: function () {
                  return setOpen(!open);
                },
              },
              open
                ? React.createElement(KeyboardArrowUp_1.default, null)
                : React.createElement(KeyboardArrowDown_1.default, null)
            )
          ),
          React.createElement(
            TableCell_1.default,
            { component: 'th', scope: 'row' },
            row.name
          ),
          React.createElement(
            TableCell_1.default,
            { align: 'left' },
            row.client
          ),
          React.createElement(TableCell_1.default, { align: 'left' }, row.rut),
          React.createElement(
            TableCell_1.default,
            { align: 'left' },
            row.calories
          ),
          React.createElement(
            TableCell_1.default,
            { align: 'right' },
            React.createElement(
              Button_1.default,
              { variant: 'contained', color: 'success' },
              'Retirar'
            )
          )
        ),
        React.createElement(
          TableRow_1.default,
          null,
          React.createElement(
            TableCell_1.default,
            { style: { paddingBottom: 0, paddingTop: 0 }, colSpan: 6 },
            React.createElement(
              Collapse_1.default,
              { in: open, timeout: 'auto', unmountOnExit: true },
              React.createElement(
                Box_1.default,
                { sx: { margin: 1 } },
                React.createElement(
                  Table_1.default,
                  { size: 'small', 'aria-label': 'purchases' },
                  React.createElement(
                    TableHead_1.default,
                    null,
                    React.createElement(
                      TableRow_1.default,
                      null,
                      React.createElement(
                        TableCell_1.default,
                        { size: 'medium' },
                        'Medicamento'
                      ),
                      React.createElement(
                        TableCell_1.default,
                        { align: 'left' },
                        'Cantidad'
                      )
                    )
                  ),
                  React.createElement(
                    TableBody_1.default,
                    null,
                    row.history.map(function (historyRow) {
                      return React.createElement(
                        TableRow_1.default,
                        { key: historyRow.med },
                        React.createElement(
                          TableCell_1.default,
                          { component: 'th', scope: 'row', size: 'medium' },
                          historyRow.med
                        ),
                        React.createElement(
                          TableCell_1.default,
                          { align: 'left' },
                          historyRow.quantity
                        )
                      );
                    })
                  )
                )
              )
            )
          )
        )
      );
    }
    var rows = [
      createData('#2543', '19-10-2022', 'Jacques Hasard', '19.454.448-0'),
      createData('#2548', '20-10-2022', 'Ricardo Susaeta', '19.238.553-K'),
      createData('#2549', '20-10-2022', 'Nancy Raticas', '14.650.756-5'),
    ];
    function CollapsibleTable() {
      return React.createElement(
        'div',
        { style: { padding: '100px' } },
        React.createElement(
          TableContainer_1.default,
          { component: Paper_1.default },
          React.createElement(
            Table_1.default,
            { 'aria-label': 'collapsible table' },
            React.createElement(
              TableHead_1.default,
              null,
              React.createElement(
                TableRow_1.default,
                {
                  sx: {
                    backgroundColor: '#011b48',
                  },
                },
                React.createElement(TableCell_1.default, null),
                React.createElement(
                  TableCell_1.default,
                  { style: { color: 'white' } },
                  'Pedido'
                ),
                React.createElement(
                  TableCell_1.default,
                  { align: 'left', style: { color: 'white' } },
                  'Cliente'
                ),
                React.createElement(
                  TableCell_1.default,
                  { align: 'left', style: { color: 'white' } },
                  'Rut'
                ),
                React.createElement(
                  TableCell_1.default,
                  { align: 'left', style: { color: 'white' } },
                  'Fecha'
                ),
                React.createElement(TableCell_1.default, {
                  align: 'right',
                  style: { color: 'white' },
                })
              )
            ),
            React.createElement(
              TableBody_1.default,
              null,
              rows.map(function (row) {
                return React.createElement(Row, { key: row.name, row: row });
              })
            )
          )
        )
      );
    }
    exports.default = CollapsibleTable;
  }.apply(__cjsWrapper.exports, __cjsWrapper.args));
})(System, System);
//# sourceURL=https://react-xrygqr.stackblitz.io/~/demo3.tsx
