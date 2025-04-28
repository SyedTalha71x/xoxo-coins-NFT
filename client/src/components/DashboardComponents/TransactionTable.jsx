import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
  Chip,
} from "@mui/material";
import { FireApi } from "../../utils/FireApi";

const TransactionTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const formatAmount = (amount) => {
    return `$${amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "Rejected":
        return "error";
      case "Pending":
        return "warning";
      default:
        return "default";
    }
  };

  const GetWalletDetails = async () => {
    try {
      setLoading(true);
      const getRes = await FireApi("/get-transaction-details", "GET");
      setTransactions(getRes);
    } catch (error) {
      console.error(error);
      // toast.error(error.message || "Failed to load transactions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetWalletDetails();
  }, []);

  return (
    <div className="col-span-1 lg:col-span-3">
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#18181b",
          borderRadius: "12px",
          boxShadow: "none",
        }}
      >
        {loading ? (
          <div className="flex justify-center items-center p-8">
            <CircularProgress />
          </div>
        ) : transactions.length === 0 ? (
          <Typography
            variant="body1"
            color="white"
            align="center"
            sx={{ p: 4, fontWeight: 600, fontSize: "1.2rem" }}
          >
            No Transactions history found
          </Typography>
        ) : (
          <Table sx={{ minWidth: 800 }} aria-label="transaction table">
            <TableHead>
              <TableRow sx={{ borderBottom: "1px solid #3f3f46" }}>
                <TableCell sx={{ color: "#a1a1aa", fontWeight: 600 }}>
                  TRANSACTION
                </TableCell>
                <TableCell sx={{ color: "#a1a1aa", fontWeight: 600 }}>
                  DATE & TIME
                </TableCell>
                <TableCell sx={{ color: "#a1a1aa", fontWeight: 600 }}>
                  AMOUNT
                </TableCell>
                <TableCell sx={{ color: "#a1a1aa", fontWeight: 600 }}>
                  STATUS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow
                  key={transaction.transaction_id}
                  sx={{
                    "&:not(:last-child)": { borderBottom: "1px solid #3f3f46" },
                    "&:hover": { backgroundColor: "#27272a" },
                  }}
                >
                  <TableCell sx={{ color: "#f4f4f5" }}>
                    {transaction.transaction}
                  </TableCell>
                  <TableCell sx={{ color: "#a1a1aa" }}>
                    {formatDate(transaction.transacted_at)}
                  </TableCell>
                  <TableCell sx={{ color: "#f4f4f5" }}>
                    {formatAmount(transaction.amount)}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={transaction.status}
                      color={getStatusColor(transaction.status)}
                      size="small"
                      sx={{
                        fontWeight: 600,
                        minWidth: 100,
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </div>
  );
};

export default TransactionTable;
