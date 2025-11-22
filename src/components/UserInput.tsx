import { useState } from 'react';

type investmentInput = number | undefined;

const UserInput = () => {
  const [initialInvestment, setInitialInvestment] =
    useState<investmentInput>(undefined);
  const [annualInvestment, setAnnualInvestment] =
    useState<investmentInput>(undefined);
  const [expectedReturn, setExpectedReturn] =
    useState<investmentInput>(undefined);
  const [duration, setDuration] = useState<investmentInput>(undefined);
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(parseInt(e.target.value))}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={(e) => setAnnualInvestment(parseInt(e.target.value))}
          />
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            step=".01"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(parseFloat(e.target.value))}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
