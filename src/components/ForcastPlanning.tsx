import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Radio,
  Box,
  TextField,
  Button,
} from "@mui/material";

interface Measure {
  id: string;
  name: string;
  trend: string | null;
}

interface Customer {
  id: string;
  name: string;
  ppg: string;
  measures: Measure[];
}

export default function ForecastPlanningTable() {
  const [selectedRows, setSelectedRows] = useState<Record<string, boolean>>({});
  const [selectedRadios, setSelectedRadios] = useState<Record<string, string>>(
    {}
  );

  const toggleCheckbox = (id: string) => {
    setSelectedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const selectRadio = (groupId: string, rowId: string) => {
    setSelectedRadios((prev) => ({
      ...prev,
      [groupId]: rowId,
    }));
  };

  const Weeks = ["Week 01", "Week 02", "Week 03", "Week 04", "Week 05"];
  const measures: Measure[] = [
    {
      id: "bp-actual-1",
      name: "Baseline - BP Actual (TH - Lift)",
      trend: null,
    },
    { id: "circana-1", name: "Baseline - Circana Actual YAG", trend: null },
    { id: "wisdom-1", name: "Baseline - Wisdom Forecast", trend: null },
    {
      id: "projected-1",
      name: "Projected Consumption w/ Trend",
      trend: "5.0%",
    },
  ];

  const customers: Customer[] = [
    { id: "walmart-1", name: "Walmart", ppg: "PPG2788", measures: measures },
    { id: "walmart-2", name: "Walmart", ppg: "PPG2788", measures: measures },
  ];
  const inputPositions = [3, 3, 3, 3, 3]; // हर हफ्ते में किस कॉलम पर TextField होगा


  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 2,
        width: "100%",
        border: "1px solid #e0e0e0",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <CardHeader
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              Forecast Planning for PPG & Customer Accounts
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography variant="body2" color="text.secondary">
                View Draft
              </Typography>
              <Typography color="blue" fontWeight="medium">
                12
              </Typography>
            </Box>
          </Box>
        }
        sx={{
          borderBottom: "1px solid #e0e0e0",
          padding: 2,
          "& .MuiCardHeader-content": {
            width: "100%",
          },
        }}
      />
      <CardContent sx={{ padding: 0 }}>
        <TableContainer component={Paper} elevation={0}>
          <Table
            sx={{ minWidth: 650, borderCollapse: "collapse" }}
            size="small"
          >
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                <TableCell
                  sx={{ fontWeight: 500, borderRight: "1px solid #e0e0e0" }}
                >
                  Customer (CA)
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 500, borderRight: "1px solid #e0e0e0" }}
                >
                  PPG (Product Group)
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 500, borderRight: "1px solid #e0e0e0" }}
                ></TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "start",
                  }}
                >
                  Measure
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  Trend (%)
                </TableCell>
                <TableCell
                  sx={{
                    fontWeight: 500,
                    borderRight: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  Selection
                </TableCell>
                {Weeks.map((week) => (
                  <TableCell
                    key={week}
                    sx={{ fontWeight: 500, borderRight: "1px solid #e0e0e0" }}
                    align="center"
                  >
                    {week}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.map((customer) =>
                customer.measures.map((measure, measureIndex) => (
                  <TableRow key={`${customer.id}-${measure.id}`} sx={{ borderBottom: "1px solid #e0e0e0" }}>
                    {measureIndex === 0 && (
                      <TableCell rowSpan={customer.measures.length} sx={{ verticalAlign: "top", py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                        {customer.name}
                      </TableCell>
                    )}
                    {measureIndex === 0 && (
                      <TableCell rowSpan={customer.measures.length} sx={{ verticalAlign: "top", py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                        {customer.ppg}
                      </TableCell>
                    )}
                    <TableCell sx={{ py: 1.5, textAlign: "center", borderRight: "1px solid #e0e0e0" }}>
                      <Checkbox size="small" checked={!!selectedRows[measure.id]} onChange={() => toggleCheckbox(measure.id)} />
                    </TableCell>
                    <TableCell sx={{ py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                      <Typography variant="body2">{measure.name}</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                      <Typography variant="body2" align="center">{measure.trend}</Typography>
                    </TableCell>
                    <TableCell sx={{ py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                      <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Radio size="small" checked={selectedRadios[customer.id] === measure.id} onChange={() => selectRadio(customer.id, measure.id)} name={`radio-group-${customer.id}`} />
                      </Box>
                    </TableCell>

                    {Weeks.map((week, weekIndex) => (
                      <TableCell key={week} align="center" sx={{ py: 1.5, borderRight: "1px solid #e0e0e0" }}>
                        {inputPositions[weekIndex] === measureIndex ? (
                          <TextField
                            variant="outlined"
                            size="small"
                            defaultValue="106,084"
                            onChange={(e) => console.log(`Week ${weekIndex + 1}, Value:`, e.target.value)}
                            sx={{ width: "100px" }}
                          />
                        ) : (
                          <Typography variant="body2">106,084</Typography>
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}

            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 1,
          padding: 2,
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Button variant="outlined">Cancel</Button>
        <Button variant="contained" color="primary">Save</Button>
        <Button variant="contained" color="secondary">Update</Button>
        <Button variant="contained" color="success">Approve</Button>
        <Button variant="contained" color="error">Reject</Button>
      </Box>

    </Card>
  );
}
