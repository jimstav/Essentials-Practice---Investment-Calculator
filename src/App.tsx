import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import { calculateInvestmentResults } from './util/investment';
import ResultsTable from './components/ResultsTable';

type InvestmentInput = number | undefined;

function App() {
  const [initialInvestment, setInitialInvestment] = useState<InvestmentInput>();
  const [annualInvestment, setAnnualInvestment] = useState<InvestmentInput>();
  const [expectedReturn, setExpectedReturn] = useState<InvestmentInput>();
  const [duration, setDuration] = useState<InvestmentInput>();

  const handleInitialInvestmentChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    console.log(e);
    setInitialInvestment(parseInt(e.target.value));
  };

  const handleAnnualInvestmentChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setAnnualInvestment(parseInt(e.target.value));

  const handleExpectedReturnChanged = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => setExpectedReturn(parseFloat(e.target.value));

  const handleDurationChanged = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDuration(parseInt(e.target.value));

  const results = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  const totalInterest: number[] = [];
  const totalInvestedCapital: number[] = [];

  if (results.length > 0 && initialInvestment && annualInvestment) {
    totalInterest[0] = results[0].interest;
    totalInvestedCapital[0] = initialInvestment + annualInvestment;
    for (let i = 1; i < results.length; i++) {
      totalInterest[i] = totalInterest[i - 1] + results[i].interest;
      totalInvestedCapital[i] = totalInvestedCapital[i - 1] + annualInvestment;
    }
  }

  return (
    <>
      <Header />
      <UserInput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onInitialInvestmentChanged={handleInitialInvestmentChanged}
        onAnnualInvestmentChanged={handleAnnualInvestmentChanged}
        onExpectedReturnChanged={handleExpectedReturnChanged}
        onDurationChanged={handleDurationChanged}
      />
      <ResultsTable
        results={results}
        totalInterest={totalInterest}
        totalInvestedCapital={totalInvestedCapital}
      />
    </>
  );
}

export default App;
