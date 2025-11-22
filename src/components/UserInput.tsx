import React from 'react';

interface UserInputProps {
  initialInvestment?: number;
  annualInvestment?: number;
  expectedReturn?: number;
  duration?: number;
  onInitialInvestmentChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAnnualInvestmentChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onExpectedReturnChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDurationChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInput = ({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onInitialInvestmentChanged,
  onAnnualInvestmentChanged,
  onExpectedReturnChanged,
  onDurationChanged,
}: UserInputProps) => {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={onInitialInvestmentChanged}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={annualInvestment}
            onChange={onAnnualInvestmentChanged}
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
            onChange={onExpectedReturnChanged}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={duration}
            min={1}
            onChange={onDurationChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default UserInput;
