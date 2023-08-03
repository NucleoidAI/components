import { v4 as uuid } from "uuid";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function TableView({ data, size = "small" }) {
  data = data || [];
  const headers = data.length > 0 ? Object.keys(data[0]) : [];
  const colWidth = `${100 / headers.length}%`;

  return (
    <Table size={size}>
      <colgroup>
        {headers.map(() => (
          <col style={{ width: colWidth }} key={uuid()} />
        ))}
      </colgroup>
      <TableHead>
        <TableRow>
          {headers.map((header) => (
            <TableCell key={uuid()}>{header}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={uuid()}>
            {headers.map((header) => (
              <TableCell key={uuid()}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableView;
