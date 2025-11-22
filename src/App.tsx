import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';

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
    </>
  );
}

export default App;
