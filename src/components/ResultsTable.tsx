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
            <td>{result.valueEndOfYear}</td>
            <td>{result.interest}</td>
            <td>{totalInterest[index]}</td>
            <td>{totalInvestedCapital[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;
