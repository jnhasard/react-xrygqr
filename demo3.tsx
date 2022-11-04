import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CancelIcon from '@mui/icons-material/Cancel';

function createData(
  name: string,
  calories: string,
  client: string,
  rut: string
) {
  return {
    name,
    calories,
    client,
    rut,
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

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} selected={open}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.client}</TableCell>
        <TableCell align="left">{row.rut}</TableCell>
        <TableCell align="left">{row.calories}</TableCell>
        <TableCell align="right">
          <Button variant="contained" color="success">
            Retirar
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell size="medium">Medicamento</TableCell>
                    <TableCell align="left">Cantidad</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.med}>
                      <TableCell component="th" scope="row" size="medium">
                        {historyRow.med}
                      </TableCell>
                      <TableCell align="left">{historyRow.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData('#2543', '19-10-2022', 'Jacques Hasard', '19.454.448-0'),
  createData('#2548', '20-10-2022', 'Ricardo Susaeta', '19.238.553-K'),
  createData('#2549', '20-10-2022', 'Nancy Raticas', '14.650.756-5'),
];

export default function CollapsibleTable() {
  return (
    <div style={{ padding: '100px' }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: '#011b48',
              }}
            >
              <TableCell />
              <TableCell style={{ color: 'white' }}>Pedido</TableCell>
              <TableCell align="left" style={{ color: 'white' }}>
                Cliente
              </TableCell>
              <TableCell align="left" style={{ color: 'white' }}>
                Rut
              </TableCell>
              <TableCell align="left" style={{ color: 'white' }}>
                Fecha
              </TableCell>
              <TableCell align="right" style={{ color: 'white' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
