import { formatter } from '../util/investment';

interface ResultsTableProps {
  results: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
  }[];
  totalInterest: number[];
  totalInvestedCapital: number[];
}

const ResultsTable = ({
  results,
  totalInterest,
  totalInvestedCapital,
}: ResultsTableProps) => {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(totalInterest[index])}</td>
            <td>{formatter.format(totalInvestedCapital[index])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
